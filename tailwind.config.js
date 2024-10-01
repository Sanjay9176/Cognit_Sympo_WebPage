/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.7)",
        cyan: "0 0 10px rgba(61, 246, 255, 0.7)", // Custom cyan shadow
        white: "0 0 10px rgba(255, 255, 255, 1)", // White glow shadow
      },

      textStrokeWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
      },

      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        "cse-violet": "#FF2EFF",
        "cse-cyan": "#3DF6FF",
        "cse-main": "#05172D",
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
      const textShadows = theme("textShadow");

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

      // Adding text shadow utilities
      const shadowUtilities = Object.entries(textShadows).reduce(
        (acc, [key, shadow]) => {
          acc[`.text-shadow-${key}`] = { textShadow: shadow };
          return acc;
        },
        {}
      );

      addUtilities(newUtilities, ["responsive", "hover"]);
      addUtilities(shadowUtilities, ["responsive", "hover"]);
    },
  ],
};
