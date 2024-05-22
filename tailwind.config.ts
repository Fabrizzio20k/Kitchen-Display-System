import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "mainBlue": {
          50: "#DBF4FF",
          100: "#B3E7FF",
          200: "#66CFFF",
          300: "#1AB6FF",
          400: "#008BCC",
          500: "#005780",
          600: "#004666",
          700: "#00344D",
          800: "#002333",
          900: "#001119",
          950: "#000A0F"
        },
        'mainBlue2': {
          '50': '#eef7ff',
          '100': '#dcefff',
          '200': '#b2dfff',
          '300': '#6dc6ff',
          '400': '#20aaff',
          '500': '#008eff',
          '600': '#0070df',
          '700': '#0058b4',
          '800': '#004b95',
          '900': '#003d7a',
          '950': '#001124',
        },

      },
    },
  },
  plugins: [],
};
export default config;
