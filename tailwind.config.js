/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(600px)', opacity: '0' },
        },
        surge: {
          '0%, 100%': { opacity: '0.8', filter: 'drop-shadow(0 0 5px #06b6d4)' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 20px #22d3ee)' },
        }
      },
      animation: {
        'scan': 'scan 4s linear infinite',
        'surge': 'surge 2s infinite',
      },
    },
  },
  plugins: [],
}