# 测试案例集：AI四象限分类引擎 (v4.0 - "感知界面"版)

本文档旨在为“心流静岛”的AI效能教练，提供一套专业级的基准测试套件。所有案例均围绕具体、真实的用户画像构建，并经过“真实化增强”，引入了大量系统性噪音，以确保AI的分类与摘要能力，能够应对真实世界中的复杂性与细微差别。

---

## ⭐️ 测试案例设计标准 (Test Case Design Standards)

一份高质量的测试案例，必须遵循以下标准，以确保测试的有效性与全面性：

1.  **画像一致性 (Persona Consistency)**: 所有事件必须严格符合其所属用户画像的身份、职责、技术背景和生活状态。
2.  **情景真实性 (Contextual Realism)**: 事件描述应包含“噪音”，如口语化表达、客套话、非核心的与会者信息等。
3.  **意图模糊性 (Ambiguous Intent)**: 优先构造那些无法仅通过关键词就轻易分类的事件。
4.  **边界测试 (Boundary Testing)**: 必须包含难以界定、跨越象限边界的事件。
5.  **目标导向 (Goal-Oriented)**: 每个案例的核心目标是验证AI是否理解了“时间管理四象限”的**精髓**。

---

### **用户画像 1: 李翔宇 (Xiangyu Li) - AI技术骨干**

*   **年龄**: 42岁
*   **角色**: 公司AI硬件部，高级工程师
*   **职责**:
    *   负责可穿戴AI设备的核心主板芯片选型与构建。
    *   主导基于自然语言用户界面(NLUI)的设备调度系统开发。
    *   负责AI设备-大语言模型(LLM)-高德地图服务的三方联调工作。
*   **汇报关系**: 向公司AI技术负责人 **David** 汇报。
*   **生活状态**: 已婚，有一个正在上幼儿园的儿子。

---

#### **第一部分：李翔宇的测试案例 (Cases 01-20)**

### Case 01: David紧急召见 (Quadrant 1)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q1-001", "type": "VEVENT",
  "summary": "Fwd: 紧急同步 - NLUI调度系统延迟问题",
  "start": "2024-10-26T09:30:00.000Z",
  "description": "--- Forwarded message ---<br>From: David's Assistant<br>翔宇，David叫你马上来他办公室。昨天给繁星智算演示的NLUI调度系统demo出了点问题，中移动那边反馈说有几个关键指令的响应延迟过高，需要立刻评估一下影响，定个解决方案。",
  "organizer": "mailto:david.assistant@example.com"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q1-001", "time": "09:30", "summary": "向David紧急汇报", "quadrant": 1, "start": "2024-10-26T09:30:00.000Z" }
```
---
### Case 02: 线上服务重大Bug (Quadrant 1)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q1-002", "type": "VEVENT",
  "summary": "[ON-CALL ALERT] P0故障: LLM-高德地图联调服务API 503",
  "start": "2024-10-26T14:00:00.000Z",
  "description": "北京自然交互科技的陈彤反馈，我们的LLM服务接口在调用高德地图导航意图时，出现大面积503错误，线上可穿戴设备导航功能已不可用。需要你立刻牵头排查！",
  "attendee": ["mailto:chen.tong@natural-interaction.com"]
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q1-002", "time": "14:00", "summary": "处理线上服务危机", "quadrant": 1, "start": "2024-10-26T14:00:00.000Z" }
```
---
### Case 03: 核心芯片选型评审 (Quadrant 2)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q2-001", "type": "VEVENT",
  "summary": "AI主板V3芯片选型深度评审会",
  "start": "2024-10-27T09:00:00.000Z",
  "description": "翔宇，这是本季度最重要的技术决策。我们需要在深圳正指向科技的最新方案和另一家备选方案中做出选择。这将决定我们下一代设备的功耗和算力。请准备好你的分析。",
  "location": "会议室 501 (线上同步链接见邮件)"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q2-001", "time": "09:00", "summary": "核心芯片选型评审", "quadrant": 2, "start": "2024-10-27T09:00:00.000Z" }
```
---
### Case 04: 与供应商的技术会议 (Quadrant 2)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q2-002", "type": "VEVENT",
  "summary": "Re: 与深圳正指向科技的徐总，关于新芯片的技术细节沟通",
  "start": "2024-10-26T11:00:00.000Z",
  "description": "深入聊聊他们新芯片的内存带宽和AI算子支持情况，为下午的评审会做准备。",
  "attendee": ["mailto:xujd@pointing-tech.com"],
  "location": "Zoom"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q2-002", "time": "11:00", "summary": "与供应商技术沟通", "quadrant": 2, "start": "2024-10-26T11:00:00.000Z" }
```
---
### Case 05: 常规跨部门周会 (Quadrant 3)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q3-001", "type": "VEVENT",
  "summary": "硬件-固件-云端 每周同步会",
  "start": "2024-10-26T15:00:00.000Z",
  "description": "常规同步会，大家过一下各自的进度，看看有没有blocker。<br>---<br>Join Zoom Meeting<br>https://zoom.us/j/123456789",
  "attendee": ["mailto:firmware.team@example.com", "mailto:cloud.team@example.com"]
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q3-001", "time": "15:00", "summary": "跨部门同步会", "quadrant": 3, "start": "2024-10-26T15:00:00.000Z" }
```
---
### Case 06: Watchy设备认证流程 (Quadrant 3)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q3-002", "type": "VEVENT",
  "summary": "[ACTION] Watchy 墨水屏设备 SRRC 认证材料提交",
  "start": "2024-10-26T17:30:00.000Z",
  "description": "翔宇你好，我是质控部的林添顺。关于Watchy设备的无线电发射设备型号核准认证，还缺几份技术参数文件，今天下班前需要你这边提供一下，不然会影响整体的入网进度。",
  "organizer": "mailto:lints@example.com"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q3-002", "time": "17:30", "summary": "提交产品认证材料", "quadrant": 3, "start": "2024-10-26T17:30:00.000Z" }
```
---
### Case 07: 订阅的技术博客更新 (Quadrant 4)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q4-001", "type": "VEVENT",
  "summary": "[AnandTech Newsletter] ARMv9新指令集深度解析",
  "start": "2024-10-28T19:00:00.000Z",
  "description": "您订阅的RSS源有新文章更新。",
  "organizer": "mailto:newsletter@anandtech.com"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q4-001", "time": "今日", "summary": "阅读技术博客更新", "quadrant": 4, "start": "2024-10-28T19:00:00.000Z" }
```
---
### Case 08: 公司内部可选技术分享 (Quadrant 4)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q4-002", "type": "VEVENT",
  "summary": "[Invitation] Tech Talk: 深入浅出量子计算 @ Conference Room 3",
  "start": "2024-10-29T16:00:00.000Z",
  "description": "由公司研究院主办的技术讲座，欢迎感兴趣的同学参加！"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q4-002", "time": "16:00", "summary": "公司内部技术分享", "quadrant": 4, "start": "2024-10-29T16:00:00.000Z" }
```
---
### Case 09: 儿子幼儿园开放日 (Quadrant 1)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q1-003", "type": "VEVENT",
  "summary": "【紧急】幼儿园万圣节活动需要家长参加",
  "start": "2024-10-26T16:30:00.000Z",
  "description": "翔宇，老师刚在群里发通知，下午的活动需要一位家长必须到场和孩子一起做南瓜灯，你今天有空吗？",
  "location": "爱心幼儿园"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q1-003", "time": "16:30", "summary": "参加儿子幼儿园活动", "quadrant": 1, "start": "2024-10-26T16:30:00.000Z" }
```
---
### Case 10: 个人代码重构时间 (Quadrant 2)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q2-003", "type": "VEVENT",
  "summary": "FOCUS TIME: Refactor NLUI Core Module",
  "start": "2024-10-28T09:00:00.000Z",
  "description": "锁死日历，不接受任何会议。清理旧的技术债务，为下个季度的功能迭代做准备。",
  "showAs": "BUSY"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q2-003", "time": "09:00", "summary": "重构核心代码", "quadrant": 2, "start": "2024-10-28T09:00:00.000Z" }
```
---
### Case 11: 接孩子放学 (Quadrant 3)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q3-003", "type": "VEVENT",
  "summary": "去幼儿园接娃",
  "start": "2024-10-29T17:00:00.000Z",
  "description": "老婆今天加班，轮到我去接孩子。",
  "location": "爱心幼儿园"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q3-003", "time": "17:00", "summary": "接孩子放学", "quadrant": 3, "start": "2024-10-29T17:00:00.000Z" }
```
---
### Case 12: 结婚纪念日 (Quadrant 2)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q2-004", "type": "VEVENT",
  "summary": "和老婆的结婚纪念日",
  "start": "2024-10-28T19:30:00.000Z",
  "description": "已经预定了餐厅，千万别忘了！",
  "location": "TRB Hutong"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q2-004", "time": "19:30", "summary": "结婚纪念日晚餐", "quadrant": 2, "start": "2024-10-28T19:30:00.000Z" }
```
---
### Case 13: 新固件版本发布 (Quadrant 1)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q1-004", "type": "VEVENT",
  "summary": "[Go-Live] WatchyOS v1.2.0 正式版发布窗口",
  "start": "2024-10-29T10:00:00.000Z",
  "description": "上午10点整，我们将向所有设备推送新版固件。所有相关人员必须在线，随时监控后台数据，应对可能出现的问题。",
  "showAs": "BUSY"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q1-004", "time": "10:00", "summary": "新固件版本发布", "quadrant": 1, "start": "2024-10-29T10:00:00.000Z" }
```
---
### Case 14: 准备给David的汇报 (Quadrant 2)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q2-005", "type": "VEVENT",
  "summary": "准备周五给David的汇报材料",
  "start": "2024-10-29T15:00:00.000Z",
  "description": "整理NLUI调度系统的最新进展和下阶段计划，完成汇报PPT的初稿。",
  "showAs": "BUSY"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q2-005", "time": "15:00", "summary": "准备给David的汇报", "quadrant": 2, "start": "2024-10-29T15:00:00.000Z" }
```
---
### Case 15: 团队技术分享会 (Quadrant 3)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q3-004", "type": "VEVENT",
  "summary": "Invitation: 参加小王的WebAssembly技术分享 @ 会议室 302",
  "start": "2024-10-29T14:00:00.000Z",
  "description": "团队内部的技术分享，鼓励大家参加。"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q3-004", "time": "14:00", "summary": "参加团队技术分享", "quadrant": 3, "start": "2024-10-29T14:00:00.000Z" }
```
---
### Case 16: 刷技术论坛 (Quadrant 4)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q4-003", "type": "VEVENT",
  "summary": "看看Hacker News",
  "start": "2024-10-30T12:30:00.000Z",
  "description": "午休时间刷刷新闻"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q4-003", "time": "12:30", "summary": "刷Hacker News", "quadrant": 4, "start": "2024-10-30T12:30:00.000Z" }
```
---
### Case 17: 核心岗位招聘面试 (Quadrant 1)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q1-005", "type": "VEVENT",
  "summary": "[Interview] 面试：嵌入式系统专家 (终面)",
  "start": "2024-10-28T16:00:00.000Z",
  "description": "这是我们AI主板团队核心HC的最后一轮面试，候选人背景非常强，请务必准时参加。",
  "attendee": ["mailto:hr@example.com"]
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q1-005", "time": "16:00", "summary": "核心岗位终面", "quadrant": 1, "start": "2024-10-28T16:00:00.000Z" }
```
---
### Case 18: 学习新的编程语言 (Quadrant 2)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q2-006", "type": "VEVENT",
  "summary": "学习Rust语言",
  "start": "2024-10-26T21:00:00.000Z",
  "description": "每周坚持学习新技能，跟进官方的Rust教程。",
  "location": "家里书房"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q2-006", "time": "21:00", "summary": "学习Rust语言", "quadrant": 2, "start": "2024-10-26T21:00:00.000Z" }
```
---
### Case 19: 来自其他部门的信息请求 (Quadrant 3)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q3-005", "type": "VEVENT",
  "summary": "Re: 关于NLUI的功耗数据",
  "start": "2024-10-27T11:30:00.000Z",
  "description": "Hi翔宇，产品部这边想了解下新版NLUI调度系统在待机和唤醒状态下的功耗数据，方便同步一下吗？",
  "organizer": "mailto:product.manager@example.com"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q3-005", "time": "11:30", "summary": "同步功耗数据", "quadrant": 3, "start": "2024-10-27T11:30:00.000Z" }
```
---
### Case 20: 提醒交物业费 (Quadrant 4)
**原始事件数据:**
```json
{
  "uid": "persona-v2-q4-004", "type": "VEVENT",
  "summary": "交物业费",
  "start": "2024-10-31T00:00:00.000Z",
  "description": "月底了，记得把物业费交了。"
}
```
**预期AI分析:**
```json
{ "uid": "persona-v2-q4-004", "time": "今日", "summary": "提醒：交物业费", "quadrant": 4, "start": "2024-10-31T00:00:00.000Z" }
```
---
<br>

### **用户画像 2: 唐志伟 (Zhiwei Tang) - AI博士研究生**

*   **年龄**: 26岁
*   **角色**: 清华大学计算机系在读博士研究生
*   **研究方向**: 人工智能 Agent 技术
*   **导师**: 张辉教授, 杨锐研究员
*   **生活状态**: 单身，大部分时间在实验室和教室。

#### **唐志伟的课程表 (秋季学期)**
| 时间 | 周一 | 周二 | 周三 | 周四 | 周五 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **08:00-09:35** | | | 灾害流体力学<br>@清华学堂211 | 灾害模拟与仿真<br>@三教3307 | |
| **09:50-11:25** | 情景推演方法<br>@三教3309 | 人工智能基础算法<br>@三教3104 | | | 博士生英语<br>@建华/经管新楼A207 |
| **13:30-15:05** | 中国马克思主义与当代<br>@明理楼214 | | | | 人工智能与公共安全<br>@三教1308 |
| **15:20-16:55** | | | 人工智能<br>@五教5101 | | |

#### **第二部分：唐志伟的测试案例 (Cases 21-40)**

### Case 21: 论文投稿截止日 (Quadrant 1)
**原始事件数据:**
```json
{ "uid": "persona-phd-q1-001", "summary": "[CMT System Reminder] NeurIPS 2025 Submission Deadline", "start": "2024-11-05T23:59:00.000Z", "description": "太平洋时间晚上11:59截止，换算成北京时间是下午4点。必须在此之前完成所有修改和上传！" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q1-001", "time": "23:59", "summary": "论文最终版提交", "quadrant": 1, "start": "2024-11-05T23:59:00.000Z" }
```
---
### Case 22: 导师紧急约谈 (Quadrant 1)
**原始事件数据:**
```json
{ "uid": "persona-phd-q1-002", "summary": "Fwd: 实验数据问题", "start": "2024-10-26T10:00:00.000Z", "description": "志伟，张老师看了你昨晚发的实验数据，发现一个严重问题，让你现在马上去他办公室一趟。" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q1-002", "time": "10:00", "summary": "与导师紧急约谈", "quadrant": 1, "start": "2024-10-26T10:00:00.000Z" }
```
---
### Case 23: 准备组会报告 (Quadrant 2)
**原始事件数据:**
```json
{ "uid": "persona-phd-q2-001", "summary": "准备周四下午的Agent课题组会报告", "start": "2024-10-29T19:00:00.000Z", "description": "整理本周的实验进展，制作PPT，准备好可能会被问到的问题。" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q2-001", "time": "19:00", "summary": "准备组会报告", "quadrant": 2, "start": "2024-10-29T19:00:00.000Z" }
```
---
### Case 24: 上专业课 (Quadrant 2)
**原始事件数据:**
```json
{ "uid": "persona-phd-q2-002", "summary": "人工智能基础算法", "start": "2024-10-29T09:50:00.000Z", "description": "别忘了带电脑，可能有随堂练习。", "location": "三教3104" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q2-002", "time": "09:50", "summary": "上课: 人工智能基础", "quadrant": 2, "start": "2024-10-29T09:50:00.000Z" }
```
---
### Case 25: 实验室服务器维护通知 (Quadrant 3)
**原始事件数据:**
```json
{ "uid": "persona-phd-q3-001", "summary": "[MAINTENANCE] 实验室服务器今晚重启", "start": "2024-10-26T22:00:00.000Z", "description": "为更新驱动，计算服务器将于今晚10点重启，预计中断15分钟。请在此之前保存好您的实验。" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q3-001", "time": "22:00", "summary": "实验室服务器维护", "quadrant": 3, "start": "2024-10-26T22:00:00.000Z" }
```
---
### Case 26: 帮师弟调代码 (Quadrant 3)
**原始事件数据:**
```json
{ "uid": "persona-phd-q3-002", "summary": "Re: 师兄，环境配不上了，求助！", "start": "2024-10-28T15:00:00.000Z", "description": "师兄，我的环境配了半天还是有问题，下午有空帮我看看吗？" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q3-002", "time": "15:00", "summary": "帮师弟调代码", "quadrant": 3, "start": "2024-10-28T15:00:00.000Z" }
```
---
### Case 27: 订阅的ArXiv邮件 (Quadrant 4)
**原始事件数据:**
```json
{ "uid": "persona-phd-q4-001", "summary": "[ArXiv Daily] cs.AI, cs.LG (23 new)", "start": "2024-10-27T08:00:00.000Z", "description": "今日有23篇新论文发布。" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q4-001", "time": "今日", "summary": "查看ArXiv每日论文", "quadrant": 4, "start": "2024-10-27T08:00:00.000Z" }
```
---
### Case 28: 学生节活动通知 (Quadrant 4)
**原始事件数据:**
```json
{ "uid": "persona-phd-q4-002", "summary": "[GROUP NOTICE] 计算机系学生节活动志愿者招募", "start": "2024-11-01T12:00:00.000Z", "description": "一年一度的学生节来了，快来报名成为志愿者吧！" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q4-002", "time": "今日", "summary": "学生节志愿者招募", "quadrant": 4, "start": "2024-11-01T12:00:00.000Z" }
```
---
### Case 29: 期中课程项目DDL (Quadrant 1)
**原始事件数据:**
```json
{ "uid": "persona-phd-q1-003", "summary": "[DEADLINE] 灾害模拟与仿真课大作业提交", "start": "2024-11-10T18:00:00.000Z", "description": "Project Phase 1 的报告和代码，必须在今晚6点前提交到网络学堂。" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q1-003", "time": "18:00", "summary": "课程大作业提交", "quadrant": 1, "start": "2024-11-10T18:00:00.000Z" }
```
---
### Case 30: 每周固定的组会 (Quadrant 2)
**原始事件数据:**
```json
{ "uid": "persona-phd-q2-003", "summary": "人工智能Agent课题组讨论会", "start": "2024-10-31T14:30:00.000Z", "description": "和张辉教授的每周例行组会。", "location": "FIT楼1-312" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q2-003", "time": "14:30", "summary": "Agent课题组会", "quadrant": 2, "start": "2024-10-31T14:30:00.000Z" }
```
---
### Case 31: 报销实验设备 (Quadrant 3)
**原始事件数据:**
```json
{ "uid": "persona-phd-q3-003", "summary": "找于老师报销买的Jetson Nano", "start": "2024-10-28T11:00:00.000Z", "description": "于老师上午在办公室，记得带上发票和申请单去找她签字。" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q3-003", "time": "11:00", "summary": "报销实验设备", "quadrant": 3, "start": "2024-10-28T11:00:00.000Z" }
```
---
### Case 32: 参加学术会议 (Quadrant 2)
**原始事件数据:**
```json
{ "uid": "persona-phd-q2-004", "summary": "线上参加ICML 2025", "start": "2025-07-20T09:00:00.000Z", "description": "为期一周的顶级机器学习会议，重点关注Agent和RL相关的session。" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q2-004", "time": "09:00", "summary": "参加ICML学术会议", "quadrant": 2, "start": "2025-07-20T09:00:00.000Z" }
```
---
### Case 33: 博士生英语课 (Quadrant 1)
**原始事件数据:**
```json
{ "uid": "persona-phd-q1-004", "summary": "博士生英语 - presentation", "start": "2024-11-08T09:50:00.000Z", "description": "这周轮到我做presentation了，关于我的研究方向，占总成绩30%。", "location": "建华/经管新楼A207" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q1-004", "time": "09:50", "summary": "博士生英语pre", "quadrant": 1, "start": "2024-11-08T09:50:00.000Z" }
```
---
### Case 34: 每周阅读论文 (Quadrant 2)
**原始事件数据:**
```json
{ "uid": "persona-phd-q2-005", "summary": "文献阅读时间", "start": "2024-10-28T19:30:00.000Z", "description": "精读2篇顶会论文，完成笔记。" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q2-005", "time": "19:30", "summary": "阅读文献", "quadrant": 2, "start": "2024-10-28T19:30:00.000Z" }
```
---
### Case 35: 学生会会议 (Quadrant 3)
**原始事件数据:**
```json
{ "uid": "persona-phd-q3-004", "summary": "计算机系研会例会", "start": "2024-10-29T18:30:00.000Z", "description": "讨论下个月迎新活动方案。", "location": "系馆" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q3-004", "time": "18:30", "summary": "研究生会例会", "quadrant": 3, "start": "2024-10-29T18:30:00.000Z" }
```
---
### Case 36: 打篮球 (Quadrant 4)
**原始事件数据:**
```json
{ "uid": "persona-phd-q4-003", "summary": "和同学去紫操打球", "start": "2024-10-27T16:00:00.000Z", "description": "放松一下。" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q4-003", "time": "16:00", "summary": "和同学打篮球", "quadrant": 4, "start": "2024-10-27T16:00:00.000Z" }
```
---
### Case 37: 资格考试 (Quadrant 1)
**原始事件数据:**
```json
{ "uid": "persona-phd-q1-005", "summary": "博士生资格考试", "start": "2025-01-15T09:00:00.000Z", "description": "决定能否继续读博的关键考试。", "location": "FIT楼" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q1-005", "time": "09:00", "summary": "博士生资格考试", "quadrant": 1, "start": "2025-01-15T09:00:00.000Z" }
```
---
### Case 38: 旁听感兴趣的课程 (Quadrant 2)
**原始事件数据:**
```json
{ "uid": "persona-phd-q2-006", "summary": "旁听：情景推演方法", "start": "2024-10-28T09:50:00.000Z", "description": "虽然不是必修课，但对Agent决策很有启发，去听听。", "location": "三教3309" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q2-006", "time": "09:50", "summary": "旁听: 情景推演方法", "quadrant": 2, "start": "2024-10-28T09:50:00.000Z" }
```
---
### Case 39: 领取快递 (Quadrant 3)
**原始事件数据:**
```json
{ "uid": "persona-phd-q3-005", "summary": "取快递", "start": "2024-10-27T12:15:00.000Z", "description": "新买的机械键盘到了，中午去快递点取一下。", "location": "C楼快递点" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q3-005", "time": "12:15", "summary": "领取快递", "quadrant": 3, "start": "2024-10-27T12:15:00.000Z" }
```
---
### Case 40: 校园讲座通知 (Quadrant 4)
**原始事件数据:**
```json
{ "uid": "persona-phd-q4-004", "summary": "[Tsinghua Forum] 诺贝尔奖得主某某某与你面对面", "start": "2024-11-03T19:00:00.000Z", "description": "教务处通知：欢迎全校师生参加。", "location": "大礼堂" }
```
**预期AI分析:**
```json
{ "uid": "persona-phd-q4-004", "time": "19:00", "summary": "校园讲座通知", "quadrant": 4, "start": "2024-11-03T19:00:00.000Z" }
```
---
<br>

### **用户画像 3: 陈雅琳 (Yalin Chen) - 市场运营骨干**

*   **年龄**: 38岁
*   **角色**: 公司市场部负责人
*   **职责**:
    *   全面负责AI Watchy可穿戴墨水屏产品的市场宣发。
    *   开拓并维护市场渠道合作伙伴。
    *   管理产品手册、主页设计、社区维护及宣发预算。
*   **汇报关系**: 向公司 **CEO Lin** 汇报。
*   **生活状态**: 已婚，有一个上小学的儿子。

---

#### **第三部分：陈雅琳的测试案例 (Cases 41-60)**

### Case 41: CEO紧急会议 (Quadrant 1)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q1-001", "summary": "URGENT: 小红书数据复盘", "start": "2024-11-12T10:00:00.000Z", "description": "雅琳，马上来我办公室。这周小红书的预热笔记数据非常差，互动率远低于预期，我们需要立刻调整策略。" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q1-001", "time": "10:00", "summary": "与CEO紧急会议", "quadrant": 1, "start": "2024-11-12T10:00:00.000Z" }
```
---
### Case 42: 产品负面舆情 (Quadrant 1)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q1-002", "summary": "[公关警报] 抖音出现产品负面视频", "start": "2024-11-11T15:30:00.000Z", "description": "一个百万粉丝的科技博主发视频吐槽我们的墨水屏刷新率问题，视频已经开始发酵了。公关团队需要你立刻牵头，和产品、技术（李翔宇）一起出具应对方案！" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q1-002", "time": "15:30", "summary": "处理产品负面舆情", "quadrant": 1, "start": "2024-11-11T15:30:00.000Z" }
```
---
### Case 43: 制定季度市场策略 (Quadrant 2)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q2-001", "summary": "Q1 市场宣发策略规划会", "start": "2024-11-13T09:30:00.000Z", "description": "锁定Q1的核心营销主题、预算分配和关键渠道。这是明年开门红的基础。" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q2-001", "time": "09:30", "summary": "制定Q1市场策略", "quadrant": 2, "start": "2024-11-13T09:30:00.000Z" }
```
---
### Case 44: 与渠道伙伴开会 (Quadrant 2)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q2-002", "summary": "和云祈文化的徐慧总敲定年度合作框架", "start": "2024-11-12T14:00:00.000Z", "description": "云祈是我们最重要的KOL渠道伙伴，这次会议要确定明年的合作金额和核心权益，建立更深的战略关系。", "attendee": ["mailto:xuhui@yunqi-culture.com"] }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q2-002", "time": "14:00", "summary": "与核心渠道伙伴会议", "quadrant": 2, "start": "2024-11-12T14:00:00.000Z" }
```
---
### Case 45: 市场部周会 (Quadrant 3)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q3-001", "summary": "Marketing Team Weekly Sync", "start": "2024-11-11T10:00:00.000Z", "description": "大家同步一下上周数据和本周计划。<br>Zoom: https://zoom.us/j/987654321" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q3-001", "time": "10:00", "summary": "市场部周会", "quadrant": 3, "start": "2024-11-11T10:00:00.000Z" }
```
---
### Case 46: 审核宣发预算 (Quadrant 3)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q3-002", "summary": "[ACTION REQUIRED] 审批辛娇提交的KOL投放预算申请", "start": "2024-11-12T17:00:00.000Z", "description": "辛娇的预算申请在OA里，今天下班前需要审批完，不然会影响明天打款。", "organizer": "mailto:xinjiao@example.com" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q3-002", "time": "17:00", "summary": "审批投放预算", "quadrant": 3, "start": "2024-11-12T17:00:00.000Z" }
```
---
### Case 47: 订阅行业报告 (Quadrant 4)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q4-001", "summary": "[QuestMobile] 2024智能穿戴设备行业洞察报告", "start": "2024-11-14T12:00:00.000Z", "description": "您订阅的行业报告已发送至邮箱。" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q4-001", "time": "今日", "summary": "阅读行业报告", "quadrant": 4, "start": "2024-11-14T12:00:00.000Z" }
```
---
### Case 48: 友商产品发布会 (Quadrant 4)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q4-002", "summary": "观看友商新品发布会直播", "start": "2024-11-13T19:30:00.000Z", "description": "看看他们这次有什么新东西。" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q4-002", "time": "19:30", "summary": "观看友商发布会", "quadrant": 4, "start": "2024-11-13T19:30:00.000Z" }
```
---
### Case 49: 儿子学校家长会 (Quadrant 1)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q1-003", "summary": "【必须参加】小学家长会", "start": "2024-11-15T16:00:00.000Z", "description": "雅琳，班主任通知，周五下午的家长会必须爸爸或妈妈参加，讨论小升初的重要事项。", "location": "实验二小" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q1-003", "time": "16:00", "summary": "参加儿子家长会", "quadrant": 1, "start": "2024-11-15T16:00:00.000Z" }
```
---
### Case 50: 个人能力提升 (Quadrant 2)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q2-003", "summary": "学习：AIGC营销案例复盘", "start": "2024-11-13T21:00:00.000Z", "description": "每周至少2小时输入，保持对行业新趋势的敏感度。" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q2-003", "time": "21:00", "summary": "学习AIGC营销案例", "quadrant": 2, "start": "2024-11-13T21:00:00.000Z" }
```
---
### Case 51: 去4S店保养特斯拉 (Quadrant 3)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q3-003", "summary": "特斯拉常规保养", "start": "2024-11-16T14:00:00.000Z", "description": "预约了下午两点的保养，大概要2小时。", "location": "特斯拉服务中心" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q3-003", "time": "14:00", "summary": "汽车保养", "quadrant": 3, "start": "2024-11-16T14:00:00.000Z" }
```
---
### Case 52: 与丈夫的二人晚餐 (Quadrant 2)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q2-004", "summary": "和老公的Date Night", "start": "2024-11-15T19:30:00.000Z", "description": "每周一次的二人世界，已经订好位子了。" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q2-004", "time": "19:30", "summary": "与丈夫二人晚餐", "quadrant": 2, "start": "2024-11-15T19:30:00.000Z" }
```
---
### Case 53: 产品宣发稿最终审核 (Quadrant 1)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q1-004", "summary": "[FINAL REVIEW] 公众号头条推文发布前最终审核", "start": "2024-11-12T21:30:00.000Z", "description": "雅琳姐，明早9点要发的头条推文，今晚10点前需要你最后看一眼定稿，不然来不及了。" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q1-004", "time": "21:30", "summary": "审核公众号最终稿", "quadrant": 1, "start": "2024-11-12T21:30:00.000Z" }
```
---
### Case 54: 准备给CEO的汇报 (Quadrant 2)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q2-005", "summary": "准备月度市场复盘PPT", "start": "2024-11-18T14:00:00.000Z", "description": "为下周一给Lin的汇报做准备，整理好上个月的所有数据和关键结论。" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q2-005", "time": "14:00", "summary": "准备给CEO的汇报", "quadrant": 2, "start": "2024-11-18T14:00:00.000Z" }
```
---
### Case 55: 与设计师的常规对稿 (Quadrant 3)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q3-004", "summary": "Quick Sync: 和Lulu对一下产品手册的图标细节", "start": "2024-11-14T11:00:00.000Z", "description": "一个快速的线上会议，过一下几个小图标的修改。", "attendee": ["mailto:lulu.designer@example.com"] }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q3-004", "time": "11:00", "summary": "与设计师对稿", "quadrant": 3, "start": "2024-11-14T11:00:00.000Z" }
```
---
### Case 56: 刷小红书 (Quadrant 4)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q4-003", "summary": "刷小红书看竞品动态", "start": "2024-11-12T12:30:00.000Z", "description": "午休时间看看大家都在做什么内容。" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q4-003", "time": "12:30", "summary": "刷小红书看竞品", "quadrant": 4, "start": "2024-11-12T12:30:00.000Z" }
```
---
### Case 57: 与产品、技术的关键会议 (Quadrant 1)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q1-005", "summary": "AI Watchy v2 产品定义评审会", "start": "2024-11-19T14:00:00.000Z", "description": "这是V2产品定义的关键决策会，需要市场、产品和技术（李翔宇）三方负责人共同敲定核心功能。你的市场输入至关重要。", "attendee": ["mailto:lixiangyu@character-walk.com"] }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q1-005", "time": "14:00", "summary": "V2产品定义评审", "quadrant": 1, "start": "2024-11-19T14:00:00.000Z" }
```
---
### Case 58: 维护社区核心用户 (Quadrant 2)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q2-006", "summary": "和几位核心种子用户聊聊", "start": "2024-11-14T20:00:00.000Z", "description": "组织一个小范围的线上沟通会，听听他们对产品的真实反馈和建议，维护好社区氛围。" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q2-006", "time": "20:00", "summary": "与核心用户沟通", "quadrant": 2, "start": "2024-11-14T20:00:00.000Z" }
```
---
### Case 59: 与供应链的信息同步 (Quadrant 3)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q3-005", "summary": "和深圳正指向的林宗明，同步一下包装盒的物料进度", "start": "2024-11-13T16:30:00.000Z", "description": "快速同步一下信息，确保不会影响我们的宣发节奏。", "attendee": ["mailto:linzm@pointing-tech.com"] }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q3-005", "time": "16:30", "summary": "同步供应链信息", "quadrant": 3, "start": "2024-11-13T16:30:00.000Z" }
```
---
### Case 60: 接收公司行政通知 (Quadrant 4)
**原始事件数据:**
```json
{ "uid": "persona-mkt-q4-004", "summary": "[Admin] 本周五下午茶", "start": "2024-11-15T15:00:00.000Z", "description": "别忘了来吃点心！" }
```
**预期AI分析:**
```json
{ "uid": "persona-mkt-q4-004", "time": "15:00", "summary": "公司下午茶通知", "quadrant": 4, "start": "2024-11-15T15:00:00.000Z" }
```