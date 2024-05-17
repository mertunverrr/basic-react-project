/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container : {
      center : true,
      screens : {
        lg: '600px',
        xl: '600px',
        '2xl' : '600px',
      },
        },
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans' , 'sans-serif']
      },
      backgroundImage: {
        'bg-image' : "url('./src/assets/bg-desktop-light.jpg')"
      },
      letterSpacing : {
        widest: '0.8rem'
      },
      colors : {
        'linearfrom' : "hsl(192, 100%, 67%)",
        'linearto' : "hsl(280, 87%, 65%)"
      }
    },
  },
  plugins: [],
}

