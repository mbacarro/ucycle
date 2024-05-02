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

