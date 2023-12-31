/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F5DEB3',
        'dark-beige': '#DEB887',
        'castleton-green': '#00563F',
      },
    },
  },
  plugins: [],
  // darkMode: 'class',
};
