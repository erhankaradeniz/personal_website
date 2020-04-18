const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    darkSelector: ".dark-mode",
    extend: {
      boxShadow: {
        "outline-orange": "0 0 0 3px rgba(254, 235, 200, 0.75)",
      },
      leading: {
        "0": 0,
        "14": "3.5rem",
        "20": "5rem",
      },
      colors: {
        gray: {
          100: "#fafafa",
          150: "#f3f3f3",
          200: "#d0d0d0",
          300: "#b9b9b9",
          400: "#a1a1a1",
          500: "#8a8a8a",
          600: "#727272",
          700: "#5b5b5b",
          800: "#434343",
          900: "#2c2c2c",
          1000: "#141414",
        },
      },
      padding: {
        "2/5": "0.625rem",
      },
      margin: {
        "7": "1.75rem",
      },
      height: {
        "80": "20rem",
      },
      width: {
        "70": "17.5rem",
      },
      minWidth: {
        "16": "1rem",
        "540": "540px",
      },
      maxWidth: {
        "720": "720px",
      },
      maxHeight: {
        "80vh": "80vh",
      },
      minHeight: {
        "14": "0.875rem",
        "20": "1.25rem",
      },
      borderRadius: {
        "1/75": "0.4375rem",
        "2": "0.5rem",
        "5": "1.25rem",
      },
      inset: {
        "16": "1rem",
        "32": "2rem",
        "48": "3rem",
        "80": "8rem",
      },
    },
  },
  variants: {
    display: ["dark", "responsive", "hover", "group-hover", "focus"],
    width: ["responsive", "hover", "focus"],
    opacity: [
      "responsive",
      "hover",
      "group-hover",
      "focus",
      "focus-within",
      "disabled",
    ],
    borderRadius: ["responsive", "first", "last"],
    textColor: [
      "dark",
      "dark-hover",
      "dark-focus",
      "responsive",
      "hover",
      "group-hover",
    ],
    borderColor: [
      "dark",
      "dark-hover",
      "responsive",
      "hover",
      "group-hover",
      "focus",
    ],
    backgroundColor: [
      "dark",
      "dark-focus",
      "dark-hover",
      "dark-odd",
      "dark-even",
      "responsive",
      "hover",
      "focus",
      "odd",
      "even",
      "group-hover",
      "disabled",
    ],
    cursor: ["responsive", "hover", "disabled"],
  },
  plugins: [
    require("tailwindcss-dark-mode")(),
    function({ addUtilities }) {
      const newUtilities = {
        ".hover-translateY": {
          transform: "translateY(-1px)",
        },
        ".ease-in-out": {
          transition: "all 125ms ease-in-out",
        },
        ".ease": {
          transition: "all 125ms ease",
        },
        ".bezier": {
          transition: "all 0.6s cubic-bezier(1, 0, 0, 1)",
        },
        ".transition-transform": {
          transition: "transform 240ms",
        },
        ".rotate-0": {
          transform: "rotate(0deg)",
        },
        ".rotate-90": {
          transform: "rotate(90deg)",
        },
        ".rotate-180": {
          transform: "rotate(180deg)",
        },
        ".rotate-270": {
          transform: "rotate(270deg)",
        },
        ".outline-pink": {
          outlineColor: colors.pink,
        },
      }

      addUtilities(newUtilities, ["responsive", "hover", "group-hover"])
    },
  ],
}
