import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [solid(), tsconfigPaths()],
  base: "./",
  build: {
    outDir: "dist",
    target: "esnext",
  },
});
