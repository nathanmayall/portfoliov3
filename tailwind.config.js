module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
        linkButton: "#00a7a7 ",
        linkButtonHover: "#00c1c1",
        linkButtonLight: "#00dada",
      },
      backgroundImage: {
        "bio-image": "url('../../img/paintsplash.jpg')",
        "dark-bio-image": "url('../../img/diver.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
