/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-blue': '4px 4px 4px lightblue',
      },
    },
    colors: {
      'light-blue': 'aliceblue',
      blue: 'rgb(69, 179, 230)',
      'brand-blue': 'rgb(118, 200, 238)',
      'hover-blue': 'rgb(8, 168, 241)',
      'hover-gray': 'rgb(199, 210, 219)',
      red: 'red',
    },
  },
  daisyui: {
    themes: ['pastel'],
  },
  plugins: [require('daisyui')],
};
