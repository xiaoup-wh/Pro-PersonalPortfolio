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
// 这些是社交媒体图标和邮箱图标
import { Github, Linkedin, Twitter, Globe, Mail } from 'lucide-react';

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
  
  /**
   * socialIcons: 社交媒体图标映射
   * 
   * 这是一个对象，把社交媒体名称映射到对应的图标组件
   * 例如：'github' -> Github 图标组件
   * 
   * 用途：根据数据中的社交媒体名称，显示对应的图标
   */
  const socialIcons = {
    github: Github,      // GitHub 图标
    linkedin: Linkedin,  // LinkedIn 图标
    twitter: Twitter,    // Twitter 图标
    website: Globe       // 网站图标（地球图标）
  };

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
    <motion.section
      initial={{ opacity: 0, y: 20 }}      // 初始：透明 + 下移 20px
      animate={{ opacity: 1, y: 0 }}       // 目标：不透明 + 原位
      transition={{ duration: 0.8, ease: "easeOut" }} // 动画时长，使用更平滑的缓动函数
      className="relative overflow-hidden" // 相对定位 + 隐藏溢出
    >
      
      {/* 
        ====== 背景装饰层 ======
        
        这些 div 是纯装饰性的，不显示任何内容
        它们创建漂亮的渐变和模糊效果
      */}
      
      {/* 渐变背景：从蓝色到青色的渐变 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-slate-900/80 to-accent-900/30" />

      {/* 右上角光晕：大圆形模糊效果 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/25 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />

      {/* 左下角光晕：另一个大圆形模糊效果 */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/25 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse" />

      {/* 中心装饰光晕 */}
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-500/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      
      {/* 
        ====== 主要内容区域 ======
        
        max-w-6xl: 最大宽度 6xl（约 1152px）
        mx-auto: 水平居中（margin-x auto）
        px-6: 左右内边距 6 单位
        py-20: 上下内边距 20 单位
      */}
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        
        {/* 
          flex: 弹性布局（让子元素灵活排列）
          flex-col: 垂直排列（手机上）
          lg:flex-row: 大屏幕上水平排列
          items-center: 子元素垂直居中
          gap-12: 子元素间距 12 单位
        */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* 
            ====== 头像部分 ======
            
            motion.div: 带动画的容器
            动画效果：从缩小状态放大到正常大小
          */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}  // 初始：缩小 + 透明
            animate={{ scale: 1, opacity: 1 }}     // 目标：正常 + 不透明
            transition={{ duration: 0.6, delay: 0.2, ease: "backOut" }} // 动画时长 + 延迟，使用弹性缓动
            className="relative group"
          >
            {/* 头像光晕：渐变模糊效果 */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

            {/* 头像容器 */}
            <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-primary-400/50 transition-all duration-500 shadow-2xl shadow-primary-500/20 group-hover:shadow-primary-500/40">
              {/* 头像图片 */}
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* 
            ====== 文字信息部分 ======
            
            flex-1: 占据剩余空间
            text-center: 文字居中（手机）
            lg:text-left: 大屏幕文字左对齐
          */}
          <div className="flex-1 text-center lg:text-left">
            
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
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-200 to-accent-400 bg-clip-text text-transparent drop-shadow-lg"
            >
              {/* 显示姓名 */}
              {profile.name}
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
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl"
            >
              {/* 显示个人简介 */}
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
              transition={{ duration: 0.6, delay: 0.5 }}
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
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-1 active:translate-y-0 active:shadow-lg"
              >
                {/* Mail 图标 */}
                <Mail className="w-6 h-6" />
                {/* 按钮文字 */}
                联系我
              </a>

              {/* 
                ====== 社交媒体图标 ======
                
                Object.entries: 把对象转成数组
                例如 { github: 'url' } 变成 [['github', 'url']]
                
                map: 遍历数组，为每个元素创建一个图标按钮
              */}
              {Object.entries(profile.socialLinks).map(([key, url], index) => {
                // 如果没有链接，就不显示
                if (!url) return null;
                
                // 获取对应的图标组件
                const Icon = socialIcons[key as keyof typeof socialIcons];
                
                // 返回图标按钮
                return (
                  /**
                   * a: 超链接
                   * 
                   * target="_blank": 在新标签页打开
                   * rel="noopener noreferrer": 安全属性（防止恶意网站）
                   * 
                   * Tailwind 类名解释：
                   * - w-12 h-12: 宽高 12 单位
                   * - flex items-center justify-center: 居中
                   * - rounded-full: 圆形
                   * - bg-white/5: 背景（白色 5% 透明度）
                   * - hover:bg-white/10: 悬停时背景加深
                   * - border border-white/10: 边框
                   * - hover:scale-110: 悬停时放大 110%
                   * - hover:border-accent-500/50: 悬停时边框变色
                   * - transitionDelay: 延迟动画（依次出现）
                   */
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-primary-500/20 hover:to-accent-500/20 border border-white/10 hover:border-primary-400/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/20 active:scale-95 active:translate-y-0"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    {/* 显示图标 */}
                    <Icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
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