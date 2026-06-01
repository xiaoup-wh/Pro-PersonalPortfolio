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
    /**
     * 技能展示区域
     * ============
     *
     * 背景设计：
     * - py-32: 大量垂直内边距，营造呼吸感
     * - 纹理背景增加质感
     * - 两个大尺寸渐变圆形，创造空间深度
     */
    <section className="py-32 relative overflow-hidden">
      {/* 纹理背景层 */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-grain opacity-20 mix-blend-soft-light" />

      {/* 装饰性渐变圆形 */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* 右上角：薄荷绿渐变 */}
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-gradient-to-br from-accent-500/8 to-transparent rounded-full blur-3xl" />
        {/* 左下角：琥珀色渐变 */}
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-gradient-to-tr from-primary-500/8 to-transparent rounded-full blur-3xl" />
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
          
          whileInView: 当元素进入视口时触发动画
          viewport={{ once: true }}: 只触发一次（不重复）
          
          效果：当用户滚动到这个区域时，标题渐入
        */}
        {/**
          * 标题区域设计
          * ------------
          *
          * 设计亮点：
          * 1. 装饰数字 "01"
          *    - 超大字号 (120-180px)，极低透明度 (2%)
          *    - 作为视觉锚点，增加空间层次
          *    - select-none + pointer-events-none: 不可选中、不可点击
          *
          * 2. 英文标签 "Expertise"
          *    - 等宽字体，大写，宽字距 (tracking-[0.3em])
          *    - 薄荷绿色，技术感
          *
          * 3. 中文标题
          *    - "技术" 用纯色，"技能" 用渐变
          *    - 创造视觉焦点和节奏
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
            01
          </span>

          <div className="relative">
            {/* 英文标签 */}
            <span className="font-mono text-sm text-accent-400 tracking-[0.3em] uppercase mb-4 block">Expertise</span>
            {/* 中文标题 */}
            <h2 className="font-display text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-dark-50">技术</span>
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">技能</span>
            </h2>
            {/* 描述文字 */}
            <p className="font-body text-dark-400 text-lg max-w-xl mx-auto">
              精通 AI 应用开发与项目管理，擅长用 Vibe Coding 快速实现创意
            </p>
          </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
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
               * 技能卡片
               * --------
               *
               * 设计特点：
               * 1. 极简玻璃态
               *    - bg-white/[0.03]: 极低透明度白色背景
               *    - backdrop-blur-xl: 强毛玻璃效果
               *    - border-white/[0.06]: 极细边框
               *
               * 2. 悬停效果
               *    - y: -12: 上浮 12px
               *    - 背景色略微变亮 (0.03 -> 0.05)
               *    - 边框变色 (primary-400/20)
               *    - 光晕出现
               *
               * 3. 交错动画
               *    - delay: index * 0.12: 每个卡片延迟 120ms
               *    - 营造依次入场的效果
               *
               * 4. 顶部装饰线
               *    - 悬停时渐现，增加精致感
               */
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="relative group"
              >
                {/* 悬停光晕：在卡片下方 */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/15 to-accent-500/15 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                {/* 卡片主体 */}
                <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-3xl p-7 hover:border-primary-400/20 transition-all duration-500 group-hover:bg-white/[0.05]">
                  {/* 顶部装饰线：悬停时渐现 */}
                  <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-primary-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/**
                   * 图标区域
                   * --------
                   * - 圆角方形容器 (rounded-2xl)，与卡片风格统一
                   * - 渐变背景 + 边框，层次分明
                   * - 悬停时放大 + 旋转 (scale-110 + rotate-3)
                   * - 序号使用等宽字体，极低透明度
                   */}
                  <div className="flex items-start justify-between mb-6">
                    {/* 图标容器 */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-400/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      {Icon && <Icon className="w-6 h-6 text-primary-400" />}
                    </div>
                    {/* 序号 */}
                    <span className="font-mono text-2xl font-bold text-white/10 group-hover:text-primary-400/20 transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/**
                   * 技能信息
                   * --------
                   * - 名称使用 Syne 显示字体
                   * - 百分比使用等宽字体，薄荷绿色
                   * - 悬停时名称变色
                   */}
                  <div className="mb-5">
                    <h3 className="font-display text-xl font-bold text-dark-50 mb-1 group-hover:text-primary-300 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <span className="font-mono text-sm text-accent-400/70">{skill.level}%</span>
                  </div>
                  
                  {/**
                   * 进度条设计
                   * ----------
                   *
                   * 设计亮点：
                   * 1. 极细进度条 (h-1.5)
                   *    - 不喧宾夺主，保持优雅
                   *    - 轨道使用极低透明度白色
                   *
                   * 2. 渐变填充
                   *    - 从琥珀色到薄荷绿，与主题呼应
                   *    - 1.5 秒动画，延迟 0.4 秒
                   *
                   * 3. 光点效果
                   *    - 进度条末端的小光点
                   *    - 薄荷绿阴影，微微模糊
                   *    - 像激光指示器一样精致
                   */}
                  <div className="relative">
                    {/* 进度条轨道 */}
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      {/* 进度条填充 */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.12 + 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-400 rounded-full relative"
                      >
                        {/* 末端光点 */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent-400 rounded-full shadow-mint blur-[2px]" />
                      </motion.div>
                    </div>
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