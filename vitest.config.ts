import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      include: ["components/**/*.{ts,tsx}", "app/**/*.{ts,tsx}"],
      exclude: [
        "app/layout.tsx",
        "**/*.d.ts",
        "**/*.test.{ts,tsx}",
        "**/__tests__/**",
      ],
    },
  },
});
