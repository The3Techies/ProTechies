/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        PrimaryBg: '#334A5C',
        SecondaryBg: '#fff',
        Highlight: '#00DFC0',
      },
    },
  },
  plugins: [],
}

