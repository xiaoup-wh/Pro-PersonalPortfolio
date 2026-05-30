/**
 * Skills.tsx - 技能展示组件
 * 
 * 这个组件负责显示技术技能部分，包括：
 * - 技能名称（如 "React"、"Python"）
 * - 熟练程度（进度条显示）
 * - 技能图标（每个技能的图标）
 * 
 * 使用网格布局，每个技能是一个卡片
 */

// ========== 导入必要的库 ==========

// React: 用于创建组件
import React from 'react';

// motion: Framer Motion 动画组件
import { motion } from 'framer-motion';

// Icons: lucide-react 图标库的所有图标
// * as Icons: 导入所有图标，存到 Icons 对象中
import * as Icons from 'lucide-react';

// Skill 类型定义
import { Skill } from '../types';

// ========== 定义组件的 Props 类型 ==========

/**
 * SkillsProps: 组件接收的属性类型
 * 
 * skills: 技能数组，包含多个技能对象
 */
interface SkillsProps {
  skills: Skill[];  // 技能列表
}

// ========== 定义组件 ==========

/**
 * Skills: 技能展示组件
 * 
 * 接收 skills 数组，遍历显示每个技能卡片
 */
const Skills: React.FC<SkillsProps> = ({ skills }) => {
  
  // ========== 返回 JSX 结构 ==========
  
  return (
    /**
     * section: 区域容器
     * 
     * py-20: 上下内边距 20 单位
     */
    <section className="py-24 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent" />
      
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
          
          whileInView: 当元素进入视口时触发动画
          viewport={{ once: true }}: 只触发一次（不重复）
          
          效果：当用户滚动到这个区域时，标题渐入
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              技术技能
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            掌握多种前沿技术，专注于构建高质量的 Web 应用
          </p>
        </motion.div>

        {/* 
          ====== 技能卡片网格 ======
          
          grid: 网格布局
          grid-cols-1: 1 列（手机）
          md:grid-cols-2: 2 列（平板）
          lg:grid-cols-4: 4 列（桌面）
          gap-6: 卡片间距
          
          响应式设计：不同屏幕显示不同列数
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 
            ====== 遍历技能数组 ======
            
            map: 数组方法，遍历每个元素
            为每个技能创建一个卡片
            
            (skill, index): 
            - skill: 当前技能对象
            - index: 当前索引（用于动画延迟）
          */}
          {skills.map((skill, index) => {
            
            /**
             * 动态获取图标组件
             * 
             * Icons[skill.icon]: 根据图标名称获取对应组件
             * 例如：skill.icon = 'Code2' -> Icons.Code2
             * 
             * as React.ElementType: 类型断言
             * 告诉 TypeScript 这是一个 React 组件类型
             */
            const Icon = Icons[skill.icon as keyof typeof Icons] as React.ElementType;
            
            // 返回技能卡片
            return (
              /**
               * motion.div: 带动画的卡片容器
               * 
               * whileHover: 悬停时的动画效果
               * y: -4: 向上移动 4px
               * scale: 1.02: 放大 2%
               * 
               * 效果：鼠标悬停时卡片轻微上浮和放大
               */
              <motion.div
                key={skill.name}              // React 需要 key 来识别元素
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }} // 延迟：依次出现
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative group"    // group: 用于组合悬停效果
              >
                {/* 卡片光晕效果 */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/25 to-accent-500/25 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* 卡片主体 */}
                <div className="relative bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-7 hover:border-primary-400/50 transition-all duration-300 shadow-lg shadow-black/10 group-hover:shadow-xl group-hover:shadow-primary-500/10">
                  
                  {/* 
                    ====== 技能头部（图标 + 名称 + 熟练度） ======
                    
                    flex: 弹性布局
                    items-center: 垂直居中
                    gap-4: 间距
                    mb-4: 下边距
                  */}
                  <div className="flex items-center gap-4 mb-4">
                    
                    {/* 图标容器 */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow duration-300">
                      {/* 显示图标 */}
                      {Icon && <Icon className="w-7 h-7 text-white" />}
                    </div>
                    
                    {/* 技能名称和熟练度 */}
                    <div>
                      {/* 技能名称 */}
                      <h3 className="font-bold text-xl text-white group-hover:text-primary-300 transition-colors duration-300">{skill.name}</h3>
                      {/* 熟练度百分比 */}
                      <span className="text-sm font-medium text-accent-400">{skill.level}%</span>
                    </div>
                  </div>
                  
                  {/* 进度条 */}
                  <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden shadow-inner">
                    {/* 进度条填充 */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary-500 via-accent-400 to-primary-500 rounded-full shadow-lg shadow-primary-500/30"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ========== 导出组件 ==========

export default Skills;