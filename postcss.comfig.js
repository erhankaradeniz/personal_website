module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    process.env.NODE_ENV === "production"
      ? [
          "@fullhuman/postcss-purgecss",
          {
            content: [
              "./pages/**/*.{js,jsx,ts,tsx}",
              "./components/**/*.{js,jsx,ts,tsx}",
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            whitelist: ["html", "body", "dark-mode"],
          },
        ]
      : undefined,
    "postcss-preset-env",
  ],
}
