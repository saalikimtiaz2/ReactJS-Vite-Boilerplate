module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: false,
  theme: {
    colors: {
      primary: "#9326A6",
      secondary: "#3adede",
    },
    screens: {
      xs: "0px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1336px",
    },
    container: {
      padding: {
        xs: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
