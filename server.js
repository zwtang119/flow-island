// 心流静岛 (Flow Island) Local Server v2.3.0 "Secure Gateway"
// ARCHITECTURE: Server acts as a secure gateway for AI API calls.
// API keys are never exposed to the client. All AI requests are proxied through the backend.
const express = require('express');
const path = require('path');
const os = require('os');
const sharp = require('sharp');
const crypto = require('crypto');

const app = express();
const port = 3000;

// --- Auth Token ---
// Generate a random token on server start for client-server authentication.
// The token is displayed once in the server console and must be entered in the Web UI.
const AUTH_TOKEN = crypto.randomBytes(16).toString('hex');

// This will hold the latest image data (as a binary Buffer) in memory
let latestImageData = null;

// --- Middleware ---
app.use(express.raw({ type: 'image/png', limit: '5mb' }));
app.use(express.json({ limit: '1mb' }));

// --- Auth Middleware for API routes ---
function requireAuth(req, res, next) {
    const token = req.headers['authorization']?.replace('Bearer ', '');
    if (!token || token !== AUTH_TOKEN) {
        return res.status(401).json({ success: false, message: 'Unauthorized.' });
    }
    next();
}

// --- API Endpoints ---
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Return auth status (whether server has API key configured), without exposing the key
app.get('/api/status', (req, res) => {
    res.json({ aiAvailable: !!process.env.API_KEY });
});

// Proxy AI requests to Gemini API — API key stays on the server
app.post('/api/ai', requireAuth, async (req, res) => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        return res.status(503).json({ success: false, message: 'AI service not configured on server.' });
    }

    const { contents, systemInstruction, responseMimeType, responseSchema } = req.body;
    if (!contents) {
        return res.status(400).json({ success: false, message: 'Missing contents field.' });
    }

    try {
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
        const requestBody = {
            contents: [{ parts: [{ text: contents }] }],
        };
        if (systemInstruction) {
            requestBody.systemInstruction = { parts: [{ text: systemInstruction }] };
        }
        if (responseMimeType) {
            requestBody.generationConfig = { responseMimeType };
        }
        if (responseSchema) {
            requestBody.generationConfig = { ...requestBody.generationConfig, responseSchema };
        }

        const geminiRes = await fetch(geminiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        });

        if (!geminiRes.ok) {
            const errText = await geminiRes.text();
            console.error('Gemini API error:', geminiRes.status, errText);
            return res.status(geminiRes.status).json({ success: false, message: 'AI service error.' });
        }

        const data = await geminiRes.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        res.json({ success: true, text });
    } catch (error) {
        console.error('AI proxy error:', error);
        res.status(500).json({ success: false, message: 'AI request failed.' });
    }
});

app.post('/api/image', requireAuth, async (req, res) => {
    if (!req.body || req.body.length === 0) {
        return res.status(400).json({ success: false, message: 'No image data received.' });
    }
    try {
        const processedImageBuffer = await sharp(req.body)
            .flatten({ background: '#FFFFFF' }) // 1. Remove alpha channel.
            .threshold(128)                     // 2. Binarize image for crisp e-ink display.
            .png({ palette: false })            // 3. CRITICAL: Force non-paletted PNG for hardware compatibility.
            .toBuffer();
        latestImageData = processedImageBuffer;
        console.log(`Received and binarized client-rendered image (${latestImageData.length} bytes).`);
        res.status(200).json({ success: true, message: 'Image received and cached.' });
    } catch (error) {
        console.error('Error processing image with sharp:', error);
        res.status(500).json({ success: false, message: 'Server failed to process image.' });
    }
});

app.get('/api/image', (req, res) => {
    const token = req.query.token;
    if (!token || token !== AUTH_TOKEN) {
        return res.status(401).send('Unauthorized: missing or invalid token.');
    }
    if (latestImageData) {
        console.log(`Sending cached PNG (${latestImageData.length} bytes) to Watchy.`);
        res.setHeader('Content-Type', 'image/png');
        res.setHeader('Content-Length', latestImageData.length);
        res.send(latestImageData);
    } else {
        console.log('No image available for Watchy yet.');
        res.status(404).send('No image available. Please generate one via the Web UI.');
    }
});

function getLocalIpAddresses() {
    const addresses = [];
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                addresses.push(iface.address);
            }
        }
    }
    return addresses;
}

// --- Server Initialization ---
app.listen(port, () => {
    const ipAddresses = getLocalIpAddresses();
    if (!process.env.API_KEY) {
        console.warn('\n⚠️ WARNING: API_KEY is not set. The Web UI will need it for AI features.\n');
    }
    console.log('===================================================');
    console.log('  心流静岛 (Flow Island) Local Server Started');
    console.log(`  > Version: v2.3.0 (Secure Gateway)`);
    console.log('---------------------------------------------------');
    console.log(`  > Web UI (on this computer):`);
    console.log(`    - http://localhost:${port}`);
    if (ipAddresses.length > 0) {
        console.log('  > Watchy Device (on same Wi-Fi):');
        ipAddresses.forEach(ip => console.log(`    - http://${ip}:${port}/api/image?token=${AUTH_TOKEN}`));
    }
    console.log('---------------------------------------------------');
    console.log(`  > Auth Token (enter in Web UI):`);
    console.log(`    ${AUTH_TOKEN}`);
    console.log('===================================================');
    console.log('Keep this terminal window open...');
});