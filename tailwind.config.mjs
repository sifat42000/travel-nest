/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Search/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '790px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      spacing: {
        '300px': '300px',
        '350px': '350px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        carServiceTheme: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: '#07689F',
          secondary: 'teal',
          ".btn-primary": {
            'color': '#fff',
          },
          ".btn-outline.btn-primary:hover": {
            'color': '#fff'
          },
        },
      },
    ],
  },
};
