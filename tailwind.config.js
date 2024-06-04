/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx }"],
  theme: {
    extend: {
      fontFamily: {
        gandom: "gandom",
      },
      backgroundColor: {
        header: "#E7EAEF",
        line: "#555555",
      },
      colors : {
        lineColor: "#555555",
      },
      
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
