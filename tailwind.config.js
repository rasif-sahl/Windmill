module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Enables dark mode
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1A1B1E', // Background
        'dark-card': '#2D2F33', // Card
        'dark-text': '#E4E4E7', // Text
        'dark-border': '#3A3B3F', // Borders
        'brand-color': '#6366F1', // Accent color
      },
    },
  },
  plugins: [],
}
