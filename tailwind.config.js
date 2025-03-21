/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3a57e8',
        'secondary': '#08b1ba',
        'tertiary': '#6c757d',
        'gray': '#c5c5c5',
        'light': '#f3f4f9',
        'bg': '#F5F6FA',
        'dark': '#1f253f'
      },
      boxShadow: {
        'custom': '0 8px 12px -1px rgba(197, 197, 197, 0.2), 0 4px 8px -1px rgba(197, 197, 197, 0.1)',
      },
    },
  },
  plugins: [],
}