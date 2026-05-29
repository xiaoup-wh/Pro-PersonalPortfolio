/**
 * data.ts - 数据文件
 * 
 * 这个文件存储了网站的所有数据内容。
 * 把数据和界面分开，方便修改内容而不需要改动代码。
 * 
 * 就像餐厅的菜单：
 * - 菜单内容（数据）在这里
 * - 菜单样式（界面）在组件里
 * - 要改菜名，只需要改这里，不用改样式
 */

// 导入类型定义，确保数据格式正确
import { Profile, Skill, Project } from './types';

// ========== 个人信息数据 ==========

/**
 * profile: 个人信息
 * 
 * 这里定义了你的个人信息，可以修改成你自己的内容：
 * - name: 改成你的名字
 * - avatar: 改成你的头像图片链接
 * - bio: 改成你的个人简介
 * - email: 改成你的邮箱
 * - socialLinks: 改成你的社交媒体链接
 */
export const profile: Profile = {
  // 姓名：显示在网站标题处
  name: '张伟',
  
  // 头像：使用 Unsplash 提供的示例图片
  // 你可以替换成自己的头像 URL
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  
  // 个人简介：介绍你的职业和特长
  bio: '全栈开发工程师，专注于构建优雅、高性能的 Web 应用。热爱编程，追求代码的简洁与美感。',
  
  // 邮箱：用于联系按钮
  email: 'zhangwei@example.com',
  
  // 社交媒体链接：点击图标会跳转到对应页面
  socialLinks: {
    github: 'https://github.com',       // GitHub 主页
    linkedin: 'https://linkedin.com',   // LinkedIn 主页
    twitter: 'https://twitter.com',     // Twitter 主页
    website: 'https://example.com'      // 个人网站
  }
};

// ========== 技能数据 ==========

/**
 * skills: 技能列表
 * 
 * 数组：用方括号 [] 包围的一组数据
 * 每个元素用逗号分隔
 * 
 * 你可以：
 * - 添加新技能：复制一行，改内容
 * - 删除技能：删除对应行
 * - 修改熟练度：改变 level 值（0-100）
 */
export const skills: Skill[] = [
  // 技能 1：React
  { name: 'React', level: 90, icon: 'Code2' },
  
  // 技能 2：TypeScript
  { name: 'TypeScript', level: 85, icon: 'FileCode2' },
  
  // 技能 3：Node.js
  { name: 'Node.js', level: 80, icon: 'Server' },
  
  // 技能 4：Python
  { name: 'Python', level: 75, icon: 'Terminal' },
  
  // 技能 5：Tailwind CSS
  { name: 'Tailwind CSS', level: 88, icon: 'Palette' },
  
  // 技能 6：PostgreSQL（数据库）
  { name: 'PostgreSQL', level: 70, icon: 'Database' },
  
  // 技能 7：Docker（容器技术）
  { name: 'Docker', level: 65, icon: 'Box' },
  
  // 技能 8：AWS（云服务）
  { name: 'AWS', level: 60, icon: 'Cloud' }
];

// ========== 项目数据 ==========

/**
 * projects: 项目列表
 * 
 * 每个项目包含：
 * - id: 项目编号（必须唯一）
 * - title: 项目名称
 * - description: 项目简介
 * - image: 项目截图（使用 Unsplash 示例图片）
 * - tags: 使用的技术（数组）
 * - link: 项目链接
 */
export const projects: Project[] = [
  // 项目 1：电商平台
  {
    id: '1',
    title: '电商平台',
    description: '一个功能完整的电商平台，包含商品展示、购物车、支付等功能。',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  
  // 项目 2：任务管理系统
  {
    id: '2',
    title: '任务管理系统',
    description: '团队协作任务管理工具，支持看板视图和甘特图。',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    link: '#'
  },
  
  // 项目 3：AI 图像生成器
  {
    id: '3',
    title: 'AI 图像生成器',
    description: '基于 Stable Diffusion 的 AI 图像生成 Web 应用。',
    image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=600&fit=crop',
    tags: ['Python', 'FastAPI', 'React', 'TensorFlow'],
    link: '#'
  },
  
  // 项目 4：在线教育平台
  {
    id: '4',
    title: '在线教育平台',
    description: '支持视频课程、直播互动、作业提交的在线学习平台。',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    tags: ['Next.js', 'PostgreSQL', 'Redis'],
    link: '#'
  },
  
  // 项目 5：社交网络应用
  {
    id: '5',
    title: '社交网络应用',
    description: '实时消息、动态发布、好友系统的社交网络平台。',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['React Native', 'Socket.io', 'GraphQL'],
    link: '#'
  },
  
  // 项目 6：数据分析仪表板
  {
    id: '6',
    title: '数据分析仪表板',
    description: '企业级数据可视化和分析平台。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['D3.js', 'React', 'Python', 'Pandas'],
    link: '#'
  }
];