import { defineConfig } from "tsdown";

export default defineConfig({
  deps: {
    neverBundle: true,
  },
  dts: true,
  entry: ["**/*.config.ts"],

  exports: {
    customExports(exports) {
      delete exports["./tsdown.config"];

      return exports;
    },
  },

  outDir: "dist",
  target: false,
});
