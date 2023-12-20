/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',    // adding a new smaller breakpoint
        'sm': '640px',    // default
        'md': '768px',    // default
        'lg': '1024px',   // default
        'xl': '1280px',   // default
        '2xl': '1536px',  // default
        '3xl': '1920px',  // adding a new larger breakpoint
      },
      colors: {
        'trendy-blue': '#0077B6',
        'soft-green': '#90BE6D',
        'warm-gray': '#DDDDDD',
        'vibrant-coral': '#FF6B6B',
        'muted-gold': '#FFD60A',
      },
      // ... other custom extensions
    },
  },
  plugins: [],
}
