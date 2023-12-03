/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1c2538",
        grey: "#676767",
        header: "#212529",
        primary: "#88cc14",
      },
      minHeight: {
        task: 180,
      },
      height: {
        "3/4-screen": "75vh",
      },
    },
  },
  plugins: [],
}
export default tailwindConfig
