/**
 * types.ts - TypeScript 类型定义文件
 * 
 * 这个文件定义了项目中使用的所有数据类型。
 * TypeScript 类型就像"蓝图"或"模板"，规定了数据应该是什么样子。
 * 
 * 为什么需要类型定义？
 * 1. 防止错误：如果数据格式不对，TypeScript 会报错提醒我们
 * 2. 代码提示：编辑器会根据类型提供智能提示
 * 3. 文档作用：类型定义本身就是很好的文档
 * 
 * interface: TypeScript 中定义对象类型的关键字
 * 可以理解为"数据的结构说明书"
 */

// ========== 技能类型定义 ==========

/**
 * Skill: 技能数据类型
 * 
 * 每个技能包含三个信息：
 * - name: 技能名称（如 "React"、"Python"）
 * - level: 熟练程度（0-100 的数字）
 * - icon: 图标名称（用于显示图标）
 * 
 * 示例数据：
 * { name: "React", level: 90, icon: "Code2" }
 */
export interface Skill {
  name: string;      // string = 字符串类型（文字）
  level: number;     // number = 数字类型
  icon: string;      // 图标名称，对应 lucide-react 图标库
}

// ========== 项目类型定义 ==========

/**
 * Project: 项目数据类型
 * 
 * 每个项目包含六个信息：
 * - id: 项目唯一标识符（用于区分不同项目）
 * - title: 项目名称
 * - description: 项目描述
 * - image: 项目截图的 URL 地址
 * - tags: 技术标签数组（如 ["React", "Node.js"]）
 * - link: 项目链接地址
 * 
 * 示例数据：
 * {
 *   id: "1",
 *   title: "电商平台",
 *   description: "一个功能完整的电商平台",
 *   image: "https://...",
 *   tags: ["React", "Node.js"],
 *   link: "https://..."
 * }
 */
export interface Project {
  id: string;            // 项目唯一 ID
  title: string;         // 项目标题
  description: string;   // 项目描述
  image: string;         // 项目图片 URL
  tags: string[];        // 技术标签数组（string[] = 字符串数组）
  link: string;          // 项目链接
}

// ========== 个人信息类型定义 ==========

/**
 * Profile: 个人信息数据类型
 * 
 * 包含个人基本信息和社交媒体链接
 * 
 * 示例数据：
 * {
 *   name: "张伟",
 *   avatar: "https://...",
 *   bio: "全栈开发工程师...",
 *   email: "zhangwei@example.com",
 *   socialLinks: {
 *     github: "https://github.com",
 *     linkedin: "https://linkedin.com"
 *   }
 * }
 */
export interface Profile {
  name: string;          // 姓名
  avatar: string;        // 头像图片 URL
  bio: string;           // 个人简介
  email: string;         // 邮箱地址
  phone?: string;        // 电话号码（可选）

  /**
   * socialLinks: 社交媒体链接
   *
   * ?: 可选属性（可能存在，也可能不存在）
   * 例如：github?: string 表示 github 链接是可选的
   *
   * 这样设计的好处：
   * - 如果用户没有某个社交媒体账号，可以不填
   * - 不会报错，更加灵活
   */
  socialLinks: {
    github?: string;     // GitHub 链接（可选）
    linkedin?: string;   // LinkedIn 链接（可选）
    twitter?: string;    // Twitter 链接（可选）
    website?: string;    // 个人网站链接（可选）
  };
}