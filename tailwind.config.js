/** @type {import('tailwindcss').Config} */
export const content = ['./public/**/*.{html, js}'];
export const theme = {
  screen: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  container: {
    center: true,
    padding: '1rem',
  },
  extend: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    colors: {
      primary: '#fd3d57',
      or: '#ff5700',
      gr: '#00bc1c',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
