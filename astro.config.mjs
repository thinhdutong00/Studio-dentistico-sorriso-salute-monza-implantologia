import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://studio-dentistico-sorriso-salute-monza.vercel.app",
  output: "static",
  build: {
    format: "directory"
  }
});
