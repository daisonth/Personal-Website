/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'PressStart2P': '"Press Start 2P"',
        'FiraCode': 'Fira Code',
      },
      animation: {
        'typing': 'typing 1.7s steps(10, end) forwards, blink 1.5s 3s step-end infinite',
        'typing1': 'blink 1.5s step-end infinite',
        'blinkProfileBorder': 'profileBorder 10s infinite',
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%": { 'border-color': 'rgba(255, 0, 0, 0.2)' },
          "50%": { 'border-color': 'red' },
        },
        profileBorder: {
          "50%": { 'border-color': 'red' },
        }
      },
      backgroundImage: {
        'grid-pattern': "url('/bg-grid.png')",
      }
    },
  },
  plugins: [],
}
