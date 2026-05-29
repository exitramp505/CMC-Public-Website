import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blackbrand: '#151616',
        slate: '#293D48',
        navy: '#3E4A56',
        sage: '#4DA79C',
        sand: '#FBF0DE',
        royal: '#4089CB',
        ember: '#EA9F43',
        sunflower: '#FFCF43',
        oatmeal: '#F1D2AC',
        whitebrand: '#FFFFFF',
        ink: '#151616',
        coal: '#1C2022',
        smoke: '#D9E0E2',
        muted: '#91A0A7',
        gold: '#C9A44C',
        oldgold: '#A8873A',
        goldlight: '#D7B75F',
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        display: ['Montserrat', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        brand: '0 24px 80px rgba(21, 22, 22, .28)',
      },
    },
  },
  plugins: [],
};

export default config;
