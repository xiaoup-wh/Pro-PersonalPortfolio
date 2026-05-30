/**
 * App.tsx - 主应用组件
 * 
 * 这个文件是整个网站的"骨架"，它把所有部分组合在一起。
 * 就像盖房子一样，这个文件是整体框架，其他组件是各个房间。
 * 
 * 包含的部分：
 * 1. Profile - 个人介绍（头像、姓名、简介、联系方式）
 * 2. Skills - 技能展示（技术能力列表）
 * 3. Projects - 项目展示（作品列表）
 * 4. Footer - 页脚（版权信息）
 */

// ========== 导入 React 和组件 ==========

// React: 用于定义组件类型
import React from 'react'

// Framer Motion: 动画库
import { motion } from 'framer-motion'

// Profile: 个人介绍组件
import Profile from './components/Profile'

// Skills: 技能展示组件
import Skills from './components/Skills'

// Projects: 项目展示组件
import Projects from './components/Projects'

// 数据文件：包含个人信息、技能列表、项目列表
import { profile, skills, projects } from './data'

// ========== 定义主组件 ==========

/**
 * App: 主应用组件
 * 
 * React.FC 是 React 函数组件的类型
 * FC = Functional Component（函数组件）
 * 
 * 函数组件是 React 中最常用的组件类型
 * 它是一个返回 JSX（HTML 结构）的函数
 */
const App: React.FC = () => {
  
  /**
   * return: 返回 JSX 结构
   * 
   * JSX 是 JavaScript 的语法扩展，让我们可以在 JavaScript 中写 HTML
   * 看起来像 HTML，但实际上是 JavaScript
   * 
   * 例如：<div className="min-h-screen"> 
   * 实际上会被转换成：React.createElement('div', {className: 'min-h-screen'})
   */
  return (
    /**
     * div: 最外层容器
     * 
     * className="min-h-screen": Tailwind CSS 类名
     * min-h-screen = 最小高度等于屏幕高度
     * 确保页面至少占满整个屏幕
     */
    <div className="min-h-screen">
      
      {/* 
        Profile 组件: 个人介绍部分
        传入 profile 数据作为 props（属性）
        props 是组件之间传递数据的方式
        就像给组件"传参数"
      */}
      <Profile profile={profile} />
      
      {/* 
        Skills 组件: 技能展示部分
        传入 skills 数组作为 props
      */}
      <Skills skills={skills} />
      
      {/* 
        Projects 组件: 项目展示部分
        传入 projects 数组作为 props
      */}
      <Projects projects={projects} />
      
      {/* 
        footer: 页脚部分
        显示版权信息
        
        className 解释：
        - py-12: 上下内边距 12 单位（padding-y）
        - text-center: 文字居中
        - text-slate-500: 文字颜色（灰色）
        - text-sm: 文字大小（小号）
        - border-t: 上边框
        - border-white/5: 边框颜色（白色，透明度 5%）
      */}
      {/**
       * 页脚设计
       * ========
       *
       * 设计理念：
       * - 与整体风格统一，使用纹理背景
       * - 顶部装饰线分隔内容区和页脚
       * - 姓名使用渐变色，成为视觉焦点
       * - 技术栈使用等宽字体，展示技术能力
       *
       * 层次结构：
       * 1. 姓名（渐变，大号）
       * 2. 版权信息（中性色）
       * 3. 技术栈（等宽字体，带颜色标识）
       */}
      <footer className="relative py-20 overflow-hidden">
        {/* 纹理背景 */}
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 bg-grain opacity-20 mix-blend-soft-light" />

        {/* 顶部装饰线：渐变分隔线 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          {/* 姓名：渐变色 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="font-display text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.div>

          {/* 版权信息 */}
          <p className="font-body text-dark-400 text-base mb-3">
            © 2024 保留所有权利
          </p>

          {/* 技术栈展示 */}
          <div className="flex items-center justify-center gap-2 text-dark-500 text-sm">
            <span className="font-mono">使用</span>
            <span className="text-primary-400/70 font-mono">React</span>
            <span className="font-mono">+</span>
            <span className="text-accent-400/70 font-mono">TypeScript</span>
            <span className="font-mono">+</span>
            <span className="text-dark-300 font-mono">Tailwind CSS</span>
            <span className="font-mono">构建</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ========== 导出组件 ==========

/**
 * export default: 默认导出
 * 
 * 让其他文件可以通过 import App from './App' 来使用这个组件
 * 一个文件只能有一个默认导出
 */
export default App