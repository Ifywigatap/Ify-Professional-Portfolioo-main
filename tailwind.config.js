/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        accent: "#38BDF8",
        gray: "#6B7280",
        light: "#F9FAFB",
        dark: "#0F172A",
        line: "#E5E7EB",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        xxl: "1.25rem",
      },
    },
  },
  plugins: [],
}