import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // Custom CollectWire Dashboard Colors
        "sidebar-bg": "hsl(var(--sidebar-bg))",
        "sidebar-active": "hsl(var(--sidebar-active))",
        "text-primary": "hsl(var(--text-primary))",
        "text-secondary": "hsl(var(--text-secondary))",
        "border-light": "hsl(var(--border-light))",
        "graph-green-light": "hsl(var(--graph-green-light))",
        "graph-green-dark": "hsl(var(--graph-green-dark))",

        // custom colors
        "text-white": "hsl(var(--text-white))",
        "cwg-05": "hsl(var(--cwg-05))",
        "cwg-06": "hsl(var(--cwg-06))",
        "cwg-darkgreen": "hsl(var(--cwg-darkgreen))",
        "text-darkgreen": "hsl(var(--text-darkgreen))", // Duplicate name, consider if this is intended
        "cwg-08": "hsl(var(--cwg-08))",
        "cwg-04": "hsl(var(--cwg-04))",
        "cwg-01": "hsl(var(--cwg-01))",
        "cwg-02": "var(--cwg-02)",
        "cwg-07": "var(--cwg-07)",
        "main-bg": "hsl(var(--main-bg))",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
