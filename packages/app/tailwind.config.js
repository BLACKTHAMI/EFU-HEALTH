/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        text: 'var(--text)',
        primary: {
          DEFAULT: 'var(--primary)',
          light: '#0066CC',
          dark: '#004999',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          light: '#00A651',
          dark: '#007A3D',
        },
        danger: {
          DEFAULT: 'var(--danger)',
          light: '#FF3A44',
          dark: '#CC2E36',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}