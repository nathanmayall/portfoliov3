module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Skobeloff: "#297373",
        TailwindLogo: "#43a8b3",
        ReactLogo: "#00D8FF",
        html5: "#E44D26",
        javascript: "#f7df1e",
        typescript: "#007acc",
        postgresql: "#336791",
        nodejs: "#68A063",
        webpack: "#1C78C0",
        kubernetes: "#326ce5",
      },
      backgroundImage: {
        "bio-image": "url('../../img/paintsplash.jpg')",
        "dark-bio-image": "url('../../img/diver.jpg')",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-textshadow")],
};
