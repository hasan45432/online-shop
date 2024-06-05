/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx }"],
  theme: {
    extend: {
      screens: {
        custom: { min: "400px" },
      },
      fontFamily: {
        gandom: "gandom",
      },
      backgroundColor: {
        header: "#E7EAEF",
        line: "#555555",
        main: "#F2F2F2",
      },
      colors: {
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
