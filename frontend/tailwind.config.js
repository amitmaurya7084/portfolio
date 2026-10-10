/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FFFDF3", // cream
          surface: "#FFFFFF", // cards
          border: "rgba(15,23,42,0.08)",
          primary: "#2563EB", // blue
          primaryDark: "#1D4ED8",
          accent: "#FBBF24", // yellow
          text: "#0B1B3A", // dark navy
          muted: "#475569",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(37,99,235,0.18)",
        card: "0 8px 24px rgba(15,23,42,0.08)",
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.10), transparent 40%), radial-gradient(circle at 80% 60%, rgba(251,191,36,0.15), transparent 40%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
