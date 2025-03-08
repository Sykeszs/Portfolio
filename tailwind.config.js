/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Tailwind will scan all files in src
  ],
  theme: {
    extend: {
      colors: {
        'CA' : '#17252A',
        'CB' : '#2B7A78',
        'CC' : '#3AAFA9',
        'CD' : '#DEF2F1',
        'CE' : '#FEFFFF',
      },
      // Adding custom perspective for 3D effect
      perspective: {
        1000: '1000px',
      },
      // Ensuring that the 3D transformation works
      transformStyle: {
        preserve: 'preserve-3d',
      },
      rotate: {
        'y': 'rotateY',
      },
    },
  },
  plugins: [],
}
