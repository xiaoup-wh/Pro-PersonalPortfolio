/**
 * Projects.tsx - 项目展示组件
 * 
 * 这个组件负责显示项目作品部分，包括：
 * - 项目截图（图片）
 * - 项目名称（标题）
 * - 项目描述（简介）
 * - 技术标签（使用的技术）
 * - 项目链接（点击跳转）
 * 
 * 使用卡片网格布局，每个项目是一个卡片
 * 悬停时有动画效果（上浮、图片放大）
 */

// ========== 导入必要的库 ==========

// React: 用于创建组件
import React from 'react';

// motion: Framer Motion 动画组件
import { motion } from 'framer-motion';

// ExternalLink: 外部链接图标
import { ExternalLink } from 'lucide-react';

// Project 类型定义
import { Project } from '../types';

// ========== 定义组件的 Props 类型 ==========

/**
 * ProjectsProps: 组件接收的属性类型
 * 
 * projects: 项目数组，包含多个项目对象
 */
interface ProjectsProps {
  projects: Project[];  // 项目列表
}

// ========== 定义组件 ==========

/**
 * Projects: 项目展示组件
 * 
 * 接收 projects 数组，遍历显示每个项目卡片
 */
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  
  // ========== 返回 JSX 结构 ==========
  
  return (
    /**
     * section: 区域容器
     * 
     * py-20: 上下内边距 20 单位
     */
    <section className="py-24 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-900/5 to-transparent" />
      
      {/* 
        ====== 内容容器 ======
        
        max-w-6xl: 最大宽度
        mx-auto: 居中
        px-6: 左右内边距
      */}
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 
          ====== 标题 ======
          
          motion.h2: 带动画的标题
          
          whileInView: 进入视口时触发动画
          viewport={{ once: true }}: 只触发一次
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent-400 via-primary-400 to-accent-400 bg-clip-text text-transparent">
              项目作品
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            精选项目展示，每个项目都体现了对技术与设计的追求
          </p>
        </motion.div>

        {/* 
          ====== 项目卡片网格 ======
          
          grid: 网格布局
          grid-cols-1: 1 列（手机）
          md:grid-cols-2: 2 列（平板）
          lg:grid-cols-3: 3 列（桌面）
          gap-8: 卡片间距
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 
            ====== 遍历项目数组 ======
            
            map: 遍历每个项目
            为每个项目创建一个卡片
          */}
          {projects.map((project, index) => (
            
            /**
             * motion.div: 带动画的卡片容器
             * 
             * whileHover: 悬停时向上移动 8px
             * 
             * 效果：鼠标悬停时卡片上浮
             */
            <motion.div
              key={project.id}              // React key（项目唯一 ID）
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative h-full"    // group: 用于组合悬停效果，h-full 确保高度一致
            >
              {/* 卡片光晕效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/25 to-accent-500/25 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* 卡片主体 */}
              <div className="relative bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-primary-400/50 transition-all duration-300 shadow-xl shadow-black/20 group-hover:shadow-2xl group-hover:shadow-primary-500/15 flex flex-col h-full">
                
                {/* 
                  ====== 项目图片区域 ======
                  
                  h-48: 固定高度 48 单位
                  overflow-hidden: 隐藏超出部分
                */}
                <div className="relative h-52 overflow-hidden">
                  {/* 项目截图 */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* 图片渐变遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90" />

                  {/* 项目链接按钮 */}
                  <a
                    href={project.link}
                    className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/30 active:scale-95 active:translate-y-0"
                  >
                    {/* ExternalLink 图标 */}
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                
                {/* 
                  ====== 项目信息区域 ======
                  
                  p-6: 内边距 6 单位
                */}
                <div className="p-7 flex flex-col flex-1">
                  {/* 项目标题 */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* 项目描述 */}
                  <p className="text-slate-400 text-base mb-5 line-clamp-2 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* 技术标签 - 固定在底部 */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-white/5 to-white/10 text-slate-300 border border-white/10 hover:border-primary-400/50 hover:bg-primary-500/10 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ========== 导出组件 ==========

export default Projects;