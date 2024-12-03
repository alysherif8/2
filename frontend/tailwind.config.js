/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'maya-blue': '#75c4ff',
        'vista-blue': '#99a1ff',
        'risd-blue': '#4452ff',
        // Secondary Colors
        'azure': '#e1f4f9',
        'mint-cream': '#f7ffff',
        // Neutral Colors
        'white': '#ffffff',
        'dark-gray': '#333333',
        'light-gray': '#f0f0f0',
      },
      fontFamily: {
        'brodien-bold': ['Brodien Bold', 'Arial', 'sans-serif'],
        'brodien-medium': ['Brodien Medium', 'Arial', 'sans-serif'],
        'gully': ['Gully CD Light', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
  important: true, // This ensures Tailwind styles take precedence
}
