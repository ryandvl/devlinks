/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      backgroundImage: {
        "desktop-light": "url('/bg-desktop-light.jpg')",
        "desktop-dark": "url('/bg-desktop.jpg')",
        "mobile-light": "url('/bg-mobile-light.jpg')",
        "mobile-dark": "url('/bg-mobile.jpg')",
        sun: "url('/sun.svg')",
        "moon-stars": "url('/moon-stars.svg')",
      },
      animation: {
        "slide-back": "slide-back 0.2s",
        "slide-in": "slide-in 0.2s forwards",
      },
      translate: {
        button: "translateY(-50%)",
      },
    },
  },
  plugins: [],
};
