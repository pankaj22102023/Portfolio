import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "opensans": ['Open Sans', 'sans-serif'],
        "poppins": ['Poppins', 'sans-serif'],
        "mono": ['Roboto Mono', 'monospace'],
      },
      boxShadow: {
        'sectionBoxShadow': '0 8px 26px 0 rgba(22,24,26,0.07)',
        'sectionBoxShadowHover': '0 8px 32px 0 rgba(22,24,26,0.11)',
        'avatarText': '0 8px 26px 0 rgba(22,24,26,0.11)',
        'darkBox': '0 8px 26px 0 rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'bodyBg': '#f2f5f8',
        'boxDark': '#1c1e20',
        'pColor': '#838485',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      keyframes: {
        lineMove: {
          '0%': {
            top: '-80px',
          },
          '100%': {
            top: '100%',
          }
        },
        loaderLetter: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          }
        },
      },
      animation: {
        bgLine: 'lineMove 8s linear infinite',
        loader: 'loaderLetter 1.0s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
