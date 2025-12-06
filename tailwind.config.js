/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",   // blue
        accent: "#38BDF8",    // sky
        gray: "#6B7280",      // neutral
        light: "#F9FAFB",     // panel/white
        dark: "#0F172A",      // bg navy
        line: "#E5E7EB"       // border
      },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.25)" },
      borderRadius: { xxl: "1.25rem" }
    },
  },
  plugins: [],
}
