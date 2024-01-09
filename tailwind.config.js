/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "bida-primary": "#92C7CF",
        "bida-secondary": "#FBF9F1",
        "bida-third": "#AAD7D9",
        "bida-fourth": "#E5E1DA",
        "bida-side-color-1": "#F29C1F",
        "bida-side-color-2": "#B1DC85",
        "bida-side-color-3": "#25C3AB",
        "bida-side-color-4": "#C03A2B",
        "bida-side-color-5": "#E64C3C",
      },
      fontFamily: {
        Aleo: ["Aleo, serif"],
      },
    },
  },
  plugins: [],
}

