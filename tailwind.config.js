/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#602377",
      },
    },
  },
  prefix: "tw-",
  plugins: [],
};
