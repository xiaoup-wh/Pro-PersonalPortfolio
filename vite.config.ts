// ========== Vite 配置文件 ==========
// 
// Vite 是一个现代化的前端构建工具，它的特点是：
// 1. 极速的开发服务器启动（基于原生 ES 模块）
// 2. 热模块替换（HMR），修改代码后自动更新页面
// 3. 优化的生产构建

// 导入 Vite 的配置函数
import { defineConfig } from 'vite'

// 导入 Vite 的 React 插件
// 这个插件提供了 React 项目所需的一切：
// - JSX/TSX 语法支持
// - React 热模块替换（HMR）
// - 自动引入 React（React 17+）
import react from '@vitejs/plugin-react'

// 导出 Vite 配置
export default defineConfig({
  // plugins: 配置 Vite 使用的插件
  plugins: [react()],
  
  // server: 开发服务器配置
  server: {
    // port: 指定开发服务器的端口号
    // 默认端口是 5173，这里设置为 50258
    port: 50258
  }
})
