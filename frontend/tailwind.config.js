const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'dorm': "url('../src/Images/Dorm.png')",
        'apartment': "url('../src/Images/Apartment.png')",
        'bedroom': "url('../src/Images/Bedroom.png')",
        'kitchen': "url('../src/Images/Kitchen.png')",
        'livingroom': "url('../src/Images/LivingRoom.png')",
        'deskarea': "url('../src/Images/DeskArea.png')",
        'electronics': "url('../src/Images/Electronics.jpg')",
      },
    },
  },
  plugins: [
    require("daisyui"),
    flowbite.plugin(),
  ],
  daisyui: {
    themes: [],
  },
}

