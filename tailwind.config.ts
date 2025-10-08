// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",   // all components
    "./app/**/*.{js,ts,jsx,tsx}",   // if using App Router
    "./globals.css"                 // 👈 include global styles
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
