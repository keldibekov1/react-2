/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // React loyihalari uchun
      "./public/index.html",        // agar kerak bo‘lsa
    ],
    theme: {
      extend: {
        fontFamily: {
          Lora: ['Lora', 'serif'],
          Oxygen: ['Oxygen', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  