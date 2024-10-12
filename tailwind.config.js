/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },

      textStrokeWidth: {
        0: "0.3px",
        1: "0.8px",
        2: "1.5px",
        3: "3px",
        4: "4px",
        5: "5px",
      },

      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        RubikDoodle: ["Rubik Doodle Shadow", "system-ui"],
      },

      colors: {
        "cse-violet": "#FF2EFF",
        "cse-cyan": "#3DF6FF",
        "cse-main": "#05172D",
        "cse-dark-cyan": "#3df6ff59",
      },
    },

    container: {
      center: true,
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const strokeWidths = theme("textStrokeWidth");
      const colors = theme("colors");

      const newUtilities = Object.entries(strokeWidths).reduce(
        (acc, [key, width]) => {
          Object.entries(colors).forEach(([colorKey, colorValue]) => {
            acc[`.text-stroke-${key}-${colorKey}`] = {
              "-webkit-text-stroke-width": width,
              "-webkit-text-stroke-color": colorValue,
            };
          });
          return acc;
        },
        {}
      );

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
