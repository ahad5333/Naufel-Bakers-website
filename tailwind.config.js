/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Only scan your source code
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFF7F0',
        'brown-dark': '#4A2C2A',
        'brown-light': '#A37E63',
        'accent': '#E8A565',
        'pastel-pink': '#F4DBD8',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'scale-up': 'scale-up 0.3s ease-out forwards',
      }
    },
  },
  plugins: [],
}
