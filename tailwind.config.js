/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}'],
  theme: {
    extend: {
      flexGrow: {
        2:'2'
      },
      flexShrink: {
        2: '2'
      },
      textColor:{
        'primary': 'hsl(0, 0%, 8%)',
        'secondary': 'hsl(0, 0%, 41%)',
        'bg': 'hsl(0, 0%, 98%)'
      },
      fontFamily:{
        nun :['Outfit'],
        body : ['PT Sans']
      }
    },
  },
  plugins: [],
}
