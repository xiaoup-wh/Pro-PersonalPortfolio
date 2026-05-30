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
     * 项目展示区域
     * ============
     *
     * 与技能区域形成视觉对比：
     * - 装饰圆形位置相反（左上 vs 右下）
     * - 渐变方向相反（from-primary vs from-accent）
     * - 营造视觉节奏感
     */
    <section className="py-32 relative overflow-hidden">
      {/* 纹理背景 */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-grain opacity-20 mix-blend-soft-light" />

      {/* 装饰性渐变圆形 */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* 左上角：琥珀色渐变 */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-primary-500/6 to-transparent rounded-full blur-3xl" />
        {/* 右下角：薄荷绿渐变 */}
        <div className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] bg-gradient-to-tr from-accent-500/6 to-transparent rounded-full blur-3xl" />
      </div>
      
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
        {/**
         * 标题区域设计
         * ------------
         *
         * 与技能区域形成呼应：
         * - 装饰数字 "02"（技能区域是 "01"）
         * - 英文标签 "Portfolio"（技能区域是 "Expertise"）
         * - 标题渐变方向相反（accent -> primary）
         *
         * 视觉节奏：
         * 01 (技能) -> 02 (项目)
         * Expertise -> Portfolio
         */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24 relative"
        >
          {/* 装饰数字：背景锚点 */}
          <span className="font-display text-[120px] lg:text-[180px] font-extrabold text-white/[0.02] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
            02
          </span>

          <div className="relative">
            {/* 英文标签 */}
            <span className="font-mono text-sm text-primary-400 tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
            {/* 中文标题 */}
            <h2 className="font-display text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-dark-50">项目</span>
              <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">作品</span>
            </h2>
            {/* 描述文字 */}
            <p className="font-body text-dark-400 text-lg max-w-xl mx-auto">
              精选项目展示，每个项目都体现了对技术与设计的追求
            </p>
          </div>
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
             * 项目卡片
             * --------
             *
             * 设计特点：
             * 1. 更大的圆角 (rounded-[1.5rem])
             *    - 比技能卡片更圆润
             *    - 营造友好、现代的感觉
             *
             * 2. 更强的悬停效果
             *    - y: -15: 上浮 15px（技能卡片是 12px）
             *    - 更明显的光晕效果
             *    - scale-95: 光晕比卡片稍小
             *
             * 3. flex flex-col h-full
             *    - 确保所有卡片等高
             *    - 标签自动推到底部
             *
             * 4. 交错动画
             *    - delay: index * 0.15: 每个卡片延迟 150ms
             *    - 比技能卡片稍慢，更优雅
             */
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -15, transition: { duration: 0.4 } }}
              className="group relative h-full"
            >
              {/* 悬停光晕：在卡片下方，稍小 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 scale-95" />

              {/* 卡片主体 */}
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-[1.5rem] overflow-hidden hover:border-primary-400/20 transition-all duration-500 group-hover:bg-white/[0.05] flex flex-col h-full">
                
                {/* 
                  ====== 项目图片区域 ======
                  
                  h-48: 固定高度 48 单位
                  overflow-hidden: 隐藏超出部分
                */}
                {/**
                 * 图片区域
                 * --------
                 *
                 * 设计细节：
                 * 1. 固定高度 (h-56)
                 *    - 确保所有卡片图片区域等高
                 *    - overflow-hidden 裁剪超出部分
                 *
                 * 2. 图片缩放
                 *    - duration-1000: 1 秒慢速缩放
                 *    - scale-110: 放大 10%
                 *    - 营造"拉近看"的效果
                 *
                 * 3. 渐变遮罩
                 *    - 从底部深色到顶部透明
                 *    - 让图片底部融入卡片内容区
                 *
                 * 4. 链接按钮
                 *    - 右上角，悬停时渐现
                 *    - 圆角方形容器，与整体风格统一
                 *    - 悬停时变色 + 上浮 + 阴影
                 *
                 * 5. 装饰序号
                 *    - 左下角超大数字
                 *    - 极低透明度 (5%)，增加层次
                 */}
                <div className="relative h-56 overflow-hidden">
                  {/* 项目图片 */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* 渐变遮罩：底部融入 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />

                  {/* 链接按钮：悬停时显示 */}
                  <a
                    href={project.link}
                    className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary-500 hover:scale-110 hover:-translate-y-1 hover:shadow-warm active:scale-95 active:translate-y-0 border border-white/10"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>

                  {/* 装饰序号 */}
                  <span className="absolute bottom-4 left-5 font-display text-[80px] font-extrabold text-white/[0.05] leading-none select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* 
                  ====== 项目信息区域 ======
                  
                  p-6: 内边距 6 单位
                */}
                {/**
                 * 内容区域
                 * --------
                 *
                 * 布局：
                 * - flex flex-col flex-1: 垂直布局，自动填充剩余空间
                 * - mt-auto: 标签自动推到底部
                 *
                 * 标题：
                 * - font-display: Syne 显示字体
                 * - 悬停时变色 (primary-300)
                 *
                 * 描述：
                 * - line-clamp-2: 限制 2 行，超出省略
                 * - flex-1: 占据剩余空间
                 *
                 * 标签：
                 * - font-mono: 等宽字体，技术感
                 * - rounded-xl: 比圆形更现代
                 * - hover:border-accent-400/30: 悬停时薄荷绿边框
                 * - transitionDelay: 标签交错动画
                 */}
                <div className="p-7 flex flex-col flex-1">
                  {/* 项目标题 */}
                  <h3 className="font-display text-2xl font-bold text-dark-50 mb-3 group-hover:text-primary-300 transition-colors duration-500">
                    {project.title}
                  </h3>

                  {/* 项目描述 */}
                  <p className="font-body text-dark-400 text-base mb-6 line-clamp-2 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* 技术标签 */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-xs font-mono font-medium rounded-xl bg-white/[0.04] text-dark-300 border border-white/[0.06] hover:border-accent-400/30 hover:text-accent-400 hover:bg-accent-500/10 transition-all duration-300"
                        style={{ transitionDelay: `${tagIndex * 50}ms` }}
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