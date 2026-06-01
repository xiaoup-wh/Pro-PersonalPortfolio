# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指导。

## 项目概述

个人作品集网站 — 一个静态单页 React 应用，展示个人信息、技能和项目。所有内容为中文。无后端、无路由、无状态管理，纯展示型页面。

## 常用命令

```bash
npm run dev      # 启动 Vite 开发服务器，端口 50258
npm run build    # 先运行 TypeScript 类型检查 (tsc)，再执行 Vite 生产构建 → dist/
npm run preview  # 本地预览生产构建结果
```

**注意：** `build` 脚本使用了显式的 `node` 路径（`node ./node_modules/typescript/lib/tsc.js && node ./node_modules/vite/bin/vite.js build`），而不是直接用 `tsc && vite build`。这是为了避免某些环境下 PATH/npx 的问题。修改构建脚本时请保持此模式。

## 架构

**数据流：** `data.ts` → `App.tsx`（导入并传递 props）→ 各区块组件（Profile、Skills、Projects）

- `src/data.ts` — 所有内容数据在此。修改此文件即可更新作品集内容（个人信息、技能列表、项目）。无 API 调用，无动态数据。
- `src/types.ts` — TypeScript 接口定义：`Profile`、`Skill`、`Project`
- `src/App.tsx` — 根组件。组合三个区块和页脚。无 hooks，无状态。
- `src/components/Profile.tsx` — 顶部个人展示区，包含头像、姓名、简介、社交链接。使用 `framer-motion` 实现入场动画。
- `src/components/Skills.tsx` — 技能网格，带动画进度条。图标通过字符串名称从 `lucide-react` 动态查找（`Icons[skill.icon]`）。
- `src/components/Projects.tsx` — 项目网格，带悬停效果和图片缩放。
- `standalone.html` — 独立免构建版本（CDN Tailwind，内联 SVG）。展示较少内容（4 个技能、3 个项目），不会随 React 版本自动同步。

## 关键模式

- **样式：** 纯 Tailwind CSS 工具类。通过硬编码的 slate 色值实现暗色主题。自定义颜色 `primary`（蓝色）和 `accent`（青色）在 `tailwind.config.js` 中定义。
- **动画：** Framer Motion。Profile 使用 `initial`+`animate`；Skills 和 Projects 使用 `whileInView` + `viewport={{ once: true }}`。通过 `index * 0.1` 实现交错延迟。
- **响应式：** Tailwind 断点 — 移动端单列，`md:` 2 列，`lg:` 3-4 列水平布局。
- **图标：** `lucide-react` — 技能图标通过字符串名称从 `Icons` 映射中查找；新增图标时需确保名称存在于 `lucide-react` 导出中。
- **图片：** 当前使用 Unsplash URL。部署时替换为本地资源或真实 URL。

## 修改内容

添加新技能：在 `src/data.ts` 的 `skills` 数组中添加条目，包含 `name`、`level`（0-100）和 `icon`（必须是有效的 `lucide-react` 图标名称）。

添加新项目：在 `src/data.ts` 的 `projects` 数组中添加条目，包含 `id`、`title`、`description`、`image`、`tags[]` 和 `link`。

## TypeScript

已启用严格模式。`noUnusedLocals` 和 `noUnusedParameters` 均为强制检查 — 构建前请移除所有未使用的导入和变量。

## 设计约束

### 使用 frontend-design 技能时的限制：
- ❌ 不要改变现有的设计风格（暗色主题、slate 色值）
- ❌ 不要修改已有的字体和颜色方案
- ❌ 不要重构现有的布局结构
- ✅ 只在创建全新组件时使用创意设计
- ✅ 新组件必须与现有设计风格保持一致
- ✅ 使用项目已有的 CSS 变量和工具类
- ✅ 保持 Tailwind CSS 的使用方式
