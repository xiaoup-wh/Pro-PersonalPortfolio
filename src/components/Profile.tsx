/**
 * Profile.tsx - 个人介绍组件
 * 
 * 这个组件负责显示个人信息部分，包括：
 * - 头像（圆形图片）
 * - 姓名（大标题）
 * - 个人简介（一段文字）
 * - 联系方式（邮箱按钮 + 社交媒体图标）
 * 
 * 组件就像一个"积木块"，可以重复使用。
 * 我们给它传入数据（props），它就显示对应的内容。
 */

// ========== 导入必要的库 ==========

// React: 用于创建组件
import React from 'react';

// motion: Framer Motion 的动画组件
// 用于实现流畅的动画效果（渐入、滑动等）
import { motion } from 'framer-motion';

// 图标：从 lucide-react 图标库导入
import { Mail, Phone, Github } from 'lucide-react';

// Profile 类型：确保传入的数据格式正确
import { Profile as ProfileType } from '../types';

// ========== 定义组件的 Props 类型 ==========

/**
 * ProfileProps: 组件接收的属性类型
 * 
 * Props 是组件的"输入参数"
 * 就像函数有参数，组件也有 props
 * 
 * 这里定义了 Profile 组件需要接收一个 profile 对象
 */
interface ProfileProps {
  profile: ProfileType;  // 个人信息对象
}

// ========== 定义组件 ==========

/**
 * Profile: 个人介绍组件
 * 
 * React.FC<ProfileProps>: 
 * - React.FC = React 函数组件
 * - <ProfileProps> = 这个组件接收 ProfileProps 类型的 props
 * 
 * ({ profile }): 从 props 中提取 profile 数据
 * 这是 ES6 的解构语法，相当于 props.profile
 */
const Profile: React.FC<ProfileProps> = ({ profile }) => {
  
  // ========== 返回 JSX 结构 ==========
  
  return (
    /**
     * motion.section: 带动画的区域容器
     * 
     * section: HTML 区域标签，表示一个内容区块
     * motion: 添加动画效果
     * 
     * 动画属性：
     * - initial: 初始状态（透明度 0，向下偏移 20px）
     * - animate: 动画目标（透明度 1，回到原位）
     * - transition: 动画时长 0.6 秒
     *
     * 效果：组件从下方渐入，像"飘上来"一样
     */

    /**
     * 主容器
     * ------
     * - min-h-screen: 占满整个视口高度
     * - flex items-center: 垂直居中内容
     * - overflow-hidden: 隐藏溢出的装饰元素
     *
     * 入场动画：
     * - 从下方 30px 渐入
     * - 使用自定义贝塞尔曲线 [0.22, 1, 0.36, 1]，比默认 ease-out 更有弹性
     */
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      
      {/* 
        ====== 背景装饰层 ======
        
        这些 div 是纯装饰性的，不显示任何内容
        它们创建漂亮的渐变和模糊效果
      */}
      
      {/**
       * 背景层设计
       * ----------
       * 采用三层结构营造深度感：
       *
       * 1. 纯色底层 (bg-dark-950)
       *    - 最深的背景色 #0a0a0a
       *
       * 2. 纹理层 (bg-grain)
       *    - SVG 噪点纹理，增加纸质/手工质感
       *    - mix-blend-soft-light: 柔光混合模式，自然融合
       *    - opacity-30: 微妙的透明度，不喧宾夺主
       *
       * 3. 有机形状装饰
       *    - 使用 animate-morph 动画，形状像细胞一样呼吸
       *    - 两个形状错开 6 秒，形成节奏感
       *    - blur-3xl: 大量模糊，营造光晕效果
       *
       * 4. 对角线装饰
       *    - 细线条增加几何感和方向性
       *    - 25度倾斜，打破水平/垂直的单调
       */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-grain opacity-30 mix-blend-soft-light" />

      {/* 有机形状：右上角 */}
      <div className="absolute top-20 right-[15%] w-[500px] h-[500px] bg-gradient-to-br from-primary-500/15 to-transparent rounded-full blur-3xl animate-morph" />
      {/* 有机形状：左下角，延迟 6 秒形成错位 */}
      <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-gradient-to-tr from-accent-500/10 to-transparent rounded-full blur-3xl animate-morph" style={{ animationDelay: '-6s' }} />

      {/* 对角线装饰元素：增加几何感 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[60%] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-primary-500/20 to-transparent rotate-[25deg]" />
        <div className="absolute top-[40%] left-[70%] w-[1px] h-[200px] bg-gradient-to-b from-transparent via-accent-500/15 to-transparent rotate-[25deg]" />
      </div>
      
      {/* 主要内容区域 - 非对称布局 */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        
        {/* 非对称布局：左侧内容，右侧装饰 */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
          
          {/* 
            ====== 头像部分 ======
            
            motion.div: 带动画的容器
            动画效果：从缩小状态放大到正常大小
          */}
          {/**
           * 头像区域 - 有机形状设计
           * -----------------------
           *
           * 设计亮点：
           * 1. 有机形状 (blob shape)
           *    - 使用 border-radius 的 8 值语法创建不规则形状
           *    - 格式: 水平半径 / 垂直半径
           *    - 示例: 60% 40% 30% 70% / 60% 30% 70% 40%
           *    - 悬停时变形，像细胞呼吸一样
           *
           * 2. 入场动画
           *    - 从 90% 缩放 + -5度旋转开始
           *    - 带有弹性的贝塞尔曲线
           *    - 延迟 0.3 秒，与文字形成节奏
           *
           * 3. 响应式顺序
           *    - order-first: 移动端头像在前
           *    - lg:order-last: 桌面端头像在后（右侧）
           *
           * 4. 浮动装饰
           *    - 两个小圆点持续浮动
           *    - 4-5 秒周期，错开 1 秒
           *    - 增加生动感和层次感
           */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative group order-first lg:order-last flex justify-center"
          >
            {/* 有机形状光晕背景 */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-1000 group-hover:rounded-[40%_60%_70%_30%/40%_70%_30%_60%]" />

            {/* 头像容器 */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden border-2 border-white/10 group-hover:border-primary-400/30 transition-all duration-1000 shadow-2xl group-hover:rounded-[40%_60%_70%_30%/40%_70%_30%_60%]">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* 叠加纹理：增加质感 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent mix-blend-overlay" />
            </div>

            {/* 浮动装饰元素 1：右上角 */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-accent-500/20 rounded-full blur-xl"
            />
            {/* 浮动装饰元素 2：左下角，延迟 1 秒 */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-500/15 rounded-full blur-xl"
            />
          </motion.div>

          {/**
           * 左侧：文字信息区域
           * -----------------
           * - 移动端居中对齐
           * - 桌面端左对齐，与右侧头像形成平衡
           */}
          <div className="text-center lg:text-left">
            
            {/* 
              ====== 姓名 ======
              
              motion.h1: 带动画的标题
              动画：从左侧滑入
              
              Tailwind 类名解释：
              - text-4xl: 字体大小 4xl（手机）
              - lg:text-6xl: 大屏幕字体 6xl
              - font-bold: 加粗
              - mb-4: 下边距 4 单位
              - bg-gradient-to-r: 从左到右渐变背景
              - bg-clip-text: 渐变只应用于文字
              - text-transparent: 文字透明（让渐变显示）
            */}
            {/**
             * 角色标签
             * --------
             * - 使用等宽字体 (font-mono) 呈现技术感
             * - 脉冲动画的小圆点表示"在线"状态
             * - 毛玻璃效果 (backdrop-blur-sm) 增加层次
             */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              <span className="text-sm font-mono text-accent-400 tracking-wider">AI项目/产品经理</span>
            </motion.div>

            {/**
             * 姓名标题
             * --------
             * - 使用 Syne 显示字体，几何风格，现代有个性
             * - 超大字号 (text-6xl ~ text-9xl)，视觉冲击力强
             * - 第一个字用纯色，其余用渐变，创造视觉焦点
             * - leading-[0.9] 紧凑行高，增强标题气势
             * - tracking-tight 紧凑字距，更紧凑有力
             */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl lg:text-8xl xl:text-9xl font-extrabold mb-8 leading-[0.9] tracking-tight"
            >
              <span className="text-dark-50">{profile.name.split('')[0]}</span>
              <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 bg-clip-text text-transparent">
                {profile.name.slice(1)}
              </span>
            </motion.h1>

            {/* 
              ====== 个人简介 ======
              
              motion.p: 带动画的段落
              
              Tailwind 类名解释：
              - text-lg: 字体大小 lg
              - lg:text-xl: 大屏幕字体 xl
              - text-slate-300: 文字颜色（浅灰色）
              - mb-8: 下边距 8 单位
              - leading-relaxed: 行高宽松（文字间距）
            */}
            {/**
             * 个人简介
             * --------
             * - 使用 DM Sans 正文字体，优雅清晰
             * - text-dark-300: 比主文字稍暗，层次分明
             * - leading-relaxed: 宽松行高，阅读舒适
             * - max-w-xl: 限制最大宽度，避免单行过长
             */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-body text-lg lg:text-xl text-dark-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {profile.bio}
            </motion.p>

            {/* 
              ====== 联系方式按钮 ======
              
              motion.div: 带动画的容器
              
              flex: 弹性布局
              flex-wrap: 允许换行（按钮太多时）
              gap-4: 间距 4 单位
              justify-center: 手机上居中
              lg:justify-start: 大屏幕左对齐
            */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {/* 
                ====== 邮箱按钮 ======
                
                a: 超链接标签
                
                href: 链接地址
                mailto: 会打开邮件客户端
                
                Tailwind 类名解释：
                - flex: 弹性布局（让图标和文字水平排列）
                - items-center: 垂直居中
                - gap-2: 间距 2 单位
                - px-6 py-3: 内边距
                - bg-gradient-to-r: 渐变背景
                - hover:from-... hover:to-...: 悬停时改变渐变
                - rounded-full: 完全圆角
                - font-medium: 字体粗细
                - transition-all: 所有属性都有过渡效果
                - hover:shadow-lg: 悬停时显示阴影
                - hover:shadow-primary-500/25: 阴影颜色
              */}
              {/**
               * 联系按钮
               * --------
               * - rounded-2xl: 大圆角，现代感
               * - font-display: 使用 Syne 字体，与标题呼应
               * - hover:shadow-warm-lg: 悬停时琥珀色阴影
               * - hover:-translate-y-1: 悬停时上浮 4px
               * - active:translate-y-0: 点击时下沉反馈
               *
               * 光效动画：
               * - 使用伪元素实现扫光效果
               * - 从左到右滑过，营造高级感
               * - duration-700: 700ms 完成扫光
               */}
              <div className="relative group/btn-wrapper">
                <a
                  href={`mailto:${profile.email}`}
                  className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 rounded-2xl font-display font-semibold text-lg transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-1 active:translate-y-0 overflow-hidden"
                >
                  {/* 扫光效果 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                  <Mail className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">联系我</span>
                </a>

                {/* 悬停浮窗：显示电话和邮箱 */}
                <div className="absolute left-0 top-full mt-3 w-72 opacity-0 invisible group-hover/btn-wrapper:opacity-100 group-hover/btn-wrapper:visible transition-all duration-300 transform translate-y-2 group-hover/btn-wrapper:translate-y-0 pointer-events-none group-hover/btn-wrapper:pointer-events-auto z-50">
                  <div className="bg-dark-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/50">
                    {/* 浮窗标题 */}
                    <div className="text-xs font-mono text-accent-400 mb-3 tracking-wider">联系方式</div>

                    {/* 电话 */}
                    <a
                      href={`tel:${profile.phone}`}
                      className="flex items-center gap-3 py-2 text-dark-200 hover:text-primary-400 transition-colors"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-500/20">
                        <Phone className="w-4 h-4 text-primary-400" />
                      </div>
                      <span className="font-body text-sm">{profile.phone}</span>
                    </a>

                    {/* 邮箱 */}
                    <a
                      href={`mailto:${profile.email}`}
                      className="flex items-center gap-3 py-2 text-dark-200 hover:text-primary-400 transition-colors"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-accent-500/20">
                        <Mail className="w-4 h-4 text-accent-400" />
                      </div>
                      <span className="font-body text-sm">{profile.email}</span>
                    </a>

                    {/* 浮窗装饰箭头 */}
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-dark-900/95 border-l border-t border-white/10 transform rotate-45" />
                  </div>
                </div>
              </div>

              {/* GitHub 图标按钮 */}
              {profile.socialLinks?.github && (
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-400/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-warm active:scale-95 active:translate-y-0 backdrop-blur-sm"
                >
                  <Github className="w-5 h-5 text-dark-200 hover:text-primary-400 transition-colors" />
                </a>
              )}

            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// ========== 导出组件 ==========

/**
 * export default: 默认导出
 * 让其他文件可以使用这个组件
 */
export default Profile;