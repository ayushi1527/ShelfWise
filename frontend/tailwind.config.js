/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        retailerPrimary: "#0A2540",
        retailerAction: "#20B2AA",
        consumerPrimary: "#1F6FFF",
        consumerAction: "#FF5CA8"
      }
    }
  },
  plugins: []
};
