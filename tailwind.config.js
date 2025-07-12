// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme"
import { createThemes } from "magicui/themes"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  presets: [createThemes()],
  plugins: [],
}
