/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
      },
      colors: {
        "custom-bg": "rgb(40, 47, 97)",
      },
      keyframes: {
        gototop: {
          "0%": { transform: "translateY(-0.5rem)" },
          "100%": { transform: "translateY(1rem)" },
        },
      },
      animation: {
        gototop: "gototop 1.2s linear infinite alternate-reverse",
      },
    },
  },
  plugins: [],
};
