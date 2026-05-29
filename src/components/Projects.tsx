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
    <section className="py-20">
      
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center mb-16"
        >
          {/* 渐变文字 */}
          <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            项目作品
          </span>
        </motion.h2>

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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"    // group: 用于组合悬停效果
            >
              {/* 
                ====== 卡片光晕效果 ======
                
                悬停时显示的渐变光晕
              */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* 
                ====== 卡片主体 ======
                
                rounded-3xl: 更大的圆角
                overflow-hidden: 隐藏超出部分（图片）
              */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-primary-500/50 transition-all">
                
                {/* 
                  ====== 项目图片区域 ======
                  
                  h-48: 固定高度 48 单位
                  overflow-hidden: 隐藏超出部分
                */}
                <div className="relative h-48 overflow-hidden">
                  
                  {/* 
                    ====== 项目截图 ======
                    
                    src: 图片地址
                    alt: 图片描述
                    
                    transition-transform: 图片变换有过渡效果
                    duration-500: 过渡时长 500ms
                    group-hover:scale-110: 悬停时放大 10%
                    
                    效果：鼠标悬停时图片缓慢放大
                  */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* 
                    ====== 图片渐变遮罩 ======
                    
                    从底部到顶部的渐变遮罩
                    让图片底部变暗，方便显示链接按钮
                    
                    opacity-80: 80% 透明度
                  */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80" />
                  
                  {/* 
                    ====== 项目链接按钮 ======
                    
                    a: 超链接
                    
                    absolute: 绝对定位
                    bottom-4 right-4: 距离底部和右边 4 单位
                    
                    opacity-0: 默认隐藏
                    group-hover:opacity-100: 悬停时显示
                    
                    效果：鼠标悬停时显示链接按钮
                  */}
                  <a
                    href={project.link}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-primary-500 hover:scale-110"
                  >
                    {/* ExternalLink 图标 */}
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                {/* 
                  ====== 项目信息区域 ======
                  
                  p-6: 内边距 6 单位
                */}
                <div className="p-6">
                  
                  {/* 
                    ====== 项目标题 ======
                    
                    text-xl: 字体大小 xl
                    font-bold: 加粗
                    mb-3: 下边距 3 单位
                    
                    group-hover:text-primary-400: 悬停时变色
                    
                    效果：鼠标悬停时标题变成蓝色
                  */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* 
                    ====== 项目描述 ======
                    
                    text-slate-400: 灰色文字
                    text-sm: 小号字体
                    mb-4: 下边距
                    
                    line-clamp-2: 限制最多显示 2 行
                    超出部分隐藏（防止描述太长）
                  */}
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* 
                    ====== 技术标签 ======
                    
                    flex: 弹性布局
                    flex-wrap: 允许换行
                    gap-2: 间距
                  */}
                  <div className="flex flex-wrap gap-2">
                    
                    {/* 
                      ====== 遍历标签数组 ======
                      
                      为每个技术标签创建一个小标签
                    */}
                    {project.tags.map((tag) => (
                      
                      /**
                       * span: 标签容器
                       * 
                       * px-3 py-1: 内边距
                       * text-xs: 最小字体
                       * font-medium: 中等粗细
                       * rounded-full: 完全圆角
                       * bg-white/5: 背景（白色 5%）
                       * border: 边框
                       */
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 border border-white/10"
                      >
                        {/* 显示标签名称 */}
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