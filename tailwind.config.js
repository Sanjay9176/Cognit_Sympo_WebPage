/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textStrokeWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
      },

      colors: {
        "cse-violet": "#FF2EFF",
        "cse-cyan": "#3DF6FF",
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
