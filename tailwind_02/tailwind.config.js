/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'azul-claro':'#0ea5e9',
        'rojo-claro':'#fda4af'
      },
      width :{
        '42': '160px',
        '98':'400px'
      }
    },
  },
  plugins: [],
}

