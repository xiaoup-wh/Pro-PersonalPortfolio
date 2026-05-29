/**
 * main.tsx - 应用入口文件
 * 
 * 这个文件是整个 React 应用的启动点。
 * 它的作用是：
 * 1. 找到 HTML 中的 root 元素（容器）
 * 2. 把 React 应用渲染到这个容器里
 * 
 * 可以理解为：这个文件是"点火器"，启动整个应用
 */

// ========== 导入必要的库 ==========

// React: React 核心库，用于创建组件
import React from 'react'

// ReactDOM: React 的 DOM 渲染库，用于把 React 组件渲染到网页上
import ReactDOM from 'react-dom/client'

// App: 我们的主应用组件（在 App.tsx 中定义）
import App from './App.tsx'

// index.css: 全局样式文件
import './index.css'

// ========== 启动应用 ==========

/**
 * ReactDOM.createRoot: 创建 React 根节点
 * 
 * document.getElementById('root'): 找到 HTML 中 id="root" 的元素
 * 这个元素就是 React 应用的"容器"，所有内容都会渲染到这里
 * 
 * ! (感叹号): TypeScript 类型断言
 * 告诉 TypeScript "这个元素一定存在，不用担心它是 null"
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  
  /**
   * React.StrictMode: React 的严格模式
   * 
   * 它会检查代码中的潜在问题，比如：
   * - 不安全的生命周期方法
   * - 废弃的 API 使用
   * - 意外的副作用
   * 
   * 它只在开发模式下工作，不会影响生产版本
   * 帮助我们写出更好的代码
   */
  <React.StrictMode>
    
    {/* 
      App: 主应用组件
      这里渲染我们的主组件，它包含了整个网站的内容
      包括：个人介绍、技能展示、项目展示等
    */}
    <App />
  </React.StrictMode>,
)