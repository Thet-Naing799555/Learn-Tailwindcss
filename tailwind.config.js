/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {



    extend: {


      fontFamily: {
        sans: ['Rethink Sans', 'sans-serif'],
        serif: ['Silkscreen', 'serif'],
        mono: ['Silkscreen', "monospace"],
      },


      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
    

    },

  },
  plugins: [
    require('@tailwindcss/typography'),


  ],
}

