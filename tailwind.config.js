/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      opacity: ['responsive', 'hover', 'focus', 'group-hover'],
      fontFamily: {
        'nitti': ['Nitti', 'mono'],
        'guyot': ['Guyot', 'sans'],
        'lora':['"Space Grotesk"', 'sans'],
        'GTWalsheim':['GTWalsheimPro', 'sans']
      },
    },
  },
  plugins: [],
}

