/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F8F2FF',
          200: '#D4BDFE',
          300: '#A785F6',
          400: '#6F4BE0',
          500: '#3418B5',
          600: '#190891',
          700: '#09026E',
          800: '#01004A',
          900: '#000226',
        },
        accent: {
          100: '#F2FFFE',
          200: '#BDFEF5',
          300: '#84F7E0',
          400: '#4BE5BD',
          500: '#17C28C',
          600: '#089B64',
          700: '#027443',
          800: '#004D27',
          900: '#002611',
        },
        neutral: {
          100: '#FBFAFC',
          200: '#E8E6EB',
          300: '#D4D2D9',
          400: '#C1BFC7',
          500: '#AEACB5',
          600: '#8A8891',
          700: '#66656E',
          800: '#44434A',
          900: '#222226',
        },
        "primary-color": 'var(--primary-color)',
        "secondary-color": 'var(--secondary-color)',
        "tertiary-color": 'var(--tertiary-color)',
        "quaternary-color": 'var(--quaternary-color)',
        "primary-text": 'var(--primary-text)',
        "secondary-text": 'var(--secondary-text)',
        "tertiary-text": 'var(--tertiary-text)',
        "primary-bg": 'var(--primary-bg)',
        "secondary-bg": 'var(--secondary-bg)',
        "tertiary-bg": 'var(--tertiary-bg)',
        "primary-button": 'var(--primary-button)',
        "secondary-button": 'var(--secondary-button)',
        "tertiary-button": 'var(--tertiary-button)'
      }
    },
  },
  plugins: [],
}