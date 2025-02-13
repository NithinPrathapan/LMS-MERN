/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize:{
        'x-large': ['36px', '26px'],
        'xx-large': ['46px','36px'],
        'default': ['15px','21px']
      }
    },
  },
  plugins: [],
};