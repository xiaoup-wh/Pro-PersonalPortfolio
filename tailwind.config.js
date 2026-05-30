/**
 * Tailwind CSS 配置文件
 * ====================
 *
 * 设计理念："数字工匠"（Digital Artisan）
 * - 融合有机温暖感与数字精确性
 * - 避免通用的 AI 美学，创造独特的视觉体验
 * - 使用温暖的深色调，营造精致的手工匠人感
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /**
       * 字体系统
       * --------
       * 使用三字体组合，各司其职：
       * - display (Syne): 标题和强调文字，几何风格，现代有个性
       * - body (DM Sans): 正文内容，清晰易读，优雅不俗套
       * - mono (JetBrains Mono): 代码和技术标签，精致专业
       */
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      /**
       * 颜色系统
       * --------
       * 采用温暖的大地色调，营造"数字工匠"的有机感
       *
       * dark: 温暖的深色调（替代冷酷的纯黑/深灰）
       *   - 950: 最深色，用于背景 (#0a0a0a)
       *   - 50: 最浅色，用于主要文字 (#f5f0eb)
       *
       * primary: 琥珀色系（温暖、有机、手工感）
       *   - 500: 主色调 (#ed7a1f)
       *   - 用于按钮、图标、强调元素
       *
       * accent: 薄荷绿系（清新、科技、对比）
       *   - 500: 主色调 (#14b8a6)
       *   - 用于标签、链接、次要强调
       */
      colors: {
        dark: {
          50: '#f5f0eb',
          100: '#e8dfd6',
          200: '#d4c8b8',
          300: '#b8a898',
          400: '#9c8a7a',
          500: '#806c5c',
          600: '#645242',
          700: '#483828',
          800: '#2c1e0e',
          900: '#1a1108',
          950: '#0a0a0a',
        },
        primary: {
          50: '#fef7ee',
          100: '#fdeed7',
          200: '#fad8ae',
          300: '#f6bc7a',
          400: '#f19744',
          500: '#ed7a1f',
          600: '#de6015',
          700: '#b84813',
          800: '#933917',
          900: '#773115',
          950: '#401609',
        },
        accent: {
          50: '#f0fdf9',
          100: '#ccfbef',
          200: '#99f6df',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
      },
      /**
       * 自定义动画
       * -----------
       * 创造有机、自然的动效，避免生硬的机械感
       *
       * float: 轻微浮动效果，用于装饰元素
       *   - 8秒周期，带旋转，营造呼吸感
       *
       * glow: 发光效果，用于强调元素
       *   - 从琥珀色渐变到薄荷绿，3秒交替
       *
       * grain: 纹理噪点动画
       *   - 8秒周期，10步离散，营造纸质质感
       *
       * morph: 有机形状变形
       *   - 12秒周期，不规则圆角变化，像细胞呼吸
       */
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out-infinite alternate',
        'grain': 'grain 8s steps(10) infinite',
        'morph': 'morph 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(2deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(237, 122, 31, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(20, 184, 166, 0.3)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(3%, -15%)' },
          '50%': { transform: 'translate(12%, 9%)' },
          '70%': { transform: 'translate(9%, 4%)' },
          '90%': { transform: 'translate(-1%, 7%)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      /**
       * 自定义阴影
       * -----------
       * 使用主题色创建阴影，增强层次感和氛围
       *
       * warm: 琥珀色阴影，用于主色调元素
       * mint: 薄荷绿阴影，用于强调元素
       * inner-warm: 内阴影，用于输入框等
       */
      boxShadow: {
        'warm': '0 4px 20px rgba(237, 122, 31, 0.15)',
        'warm-lg': '0 8px 40px rgba(237, 122, 31, 0.2)',
        'mint': '0 4px 20px rgba(20, 184, 166, 0.15)',
        'mint-lg': '0 8px 40px rgba(20, 184, 166, 0.2)',
        'inner-warm': 'inset 0 2px 20px rgba(237, 122, 31, 0.1)',
      },
      /**
       * 纹理背景
       * ---------
       * 使用 SVG 噪点纹理，增加视觉质感
       * - noise: 细腻的噪点，用于微妙的纹理
       * - grain: 粗糙的颗粒感，用于营造纸质/手工感
       */
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
