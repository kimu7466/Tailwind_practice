/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      // this is the extended / added value for 13 now mx-13 will apply 3.25rem margin on x axis
      spacing:{
        13: '3.25rem',
        15: '3.75rem'
      },
      fontSize:
      {'10xl': ['9rem', { lineHeight: '1.2' }],
      },
      screens: {
        xsm: '500px',
      }
  
      //
    },
  },
  plugins: [],
}

