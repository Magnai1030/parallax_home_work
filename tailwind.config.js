/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        header:
          "0px 4px 8px rgba(78, 75, 102, 0.18), 0px 0px 2px rgba(78, 75, 102, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
