/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-blue-800',
    'bg-green-800',
    'bg-purple-800',
    'bg-yellow-800',
    'bg-red-800',
    'bg-teal-800',
    'bg-indigo-800',
    'bg-orange-800',
  ],
  theme: {
    extend: {
      fontFamily: {
        p_sbold: ['Poppins Semibold', 'sans-serif'], // fallback font
        p_md: ['Poppins Medium', 'sans-serif'], // fallback font
        p_regular: ['Poppins Regular', 'sans-serif'], // fallback font
        p_light: ['Poppins Light', 'sans-serif'], // fallback font
        p_ebold: ['Poppins Extrabold', 'sans-serif'], // fallback font
        p_bold: ['Poppins Bold', 'sans-serif'], // fallback font
        p_black: ['Poppins Black', 'sans-serif'], // fallback font
        mont: ['Mulish', 'sans-serif'], // fallback font
      },
    },
  },
  plugins: [],
};
