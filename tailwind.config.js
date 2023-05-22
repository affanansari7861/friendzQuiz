module.exports = {
 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      boxShadow: {
        '3xl': '0 1px 10px 5px rgba(0, 0, 0, 0.1)',
        'custom':'0 0px 5px 3px rgba(138, 8, 251)',
        'custom-inset':'inset 0px 0px 3px 2px rgba(138, 8, 251)',
      },
      transitionProperty: {
        'custom':'top .2s ease-out'
      }
    },
  },
  plugins: [],
}

