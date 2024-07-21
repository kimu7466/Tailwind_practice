/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      // this is the extended / added value for 13 now mx-13 will apply 3.25rem margin on x axis
      spacing:{
        13: '3.25rem',
        15: '3.75rem'
      }
      //
    },
  },
  plugins: [],
}

