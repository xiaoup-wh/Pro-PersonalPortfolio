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
          
          whileInView: 当元素进入视口时触发动画
          viewport={{ once: true }}: 只触发一次（不重复）
          
          效果：当用户滚动到这个区域时，标题渐入
        */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}      // 初始状态
          whileInView={{ opacity: 1, y: 0 }}   // 进入视口时的目标状态
          viewport={{ once: true }}            // 只触发一次
          transition={{ duration: 0.6 }}       // 动画时长
          className="text-3xl lg:text-4xl font-bold text-center mb-16"
        >
          {/* 
            渐变文字效果：
            bg-gradient-to-r: 从左到右渐变
            bg-clip-text: 渐变应用于文字
            text-transparent: 文字透明（显示渐变）
          */}
          <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            技术技能
          </span>
        </motion.h2>

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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // 延迟：依次出现
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group"    // group: 用于组合悬停效果
              >
                {/* 
                  ====== 卡片光晕效果 ======
                  
                  悬停时显示的渐变光晕
                  opacity-0: 默认隐藏
                  group-hover:opacity-100: 悬停时显示
                */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* 
                  ====== 卡片主体 ======
                  
                  bg-slate-800/50: 背景（深灰色，50% 透明度）
                  backdrop-blur-sm: 背景模糊（毛玻璃效果）
                  border: 边框
                  rounded-2xl: 圆角
                  p-6: 内边距
                  
                  hover:border-primary-500/50: 悬停时边框变色
                */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary-500/50 transition-all">
                  
                  {/* 
                    ====== 技能头部（图标 + 名称 + 熟练度） ======
                    
                    flex: 弹性布局
                    items-center: 垂直居中
                    gap-4: 间距
                    mb-4: 下边距
                  */}
                  <div className="flex items-center gap-4 mb-4">
                    
                    {/* 
                      ====== 图标容器 ======
                      
                      w-12 h-12: 宽高 12 单位
                      rounded-xl: 圆角
                      bg-gradient-to-br: 渐变背景
                      flex items-center justify-center: 图标居中
                    */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      {/* 
                        显示图标
                        Icon &&: 如果图标存在才显示
                        w-6 h-6: 图标大小
                        text-white: 白色
                      */}
                      {Icon && <Icon className="w-6 h-6 text-white" />}
                    </div>
                    
                    {/* 
                      ====== 技能名称和熟练度 ======
                    */}
                    <div>
                      {/* 技能名称 */}
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      {/* 熟练度百分比 */}
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>
                  </div>
                  
                  {/* 
                    ====== 进度条 ======
                    
                    h-2: 高度 2 单位
                    bg-slate-700: 背景颜色（深灰色）
                    rounded-full: 圆角
                    overflow-hidden: 隐藏超出部分
                  */}
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    
                    {/* 
                      ====== 进度条填充 ======
                      
                      motion.div: 带动画的进度条
                      
                      initial={{ width: 0 }}: 初始宽度 0
                      whileInView={{ width: `${skill.level}%` }}: 进入视口时填充到对应百分比
                      
                      效果：滚动到技能区域时，进度条从 0 增长到熟练度百分比
                    */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
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