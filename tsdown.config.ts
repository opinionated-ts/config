import { defineConfig } from "tsdown";

export default defineConfig({
  deps: {
    neverBundle: true,
  },
  dts: true,

  exports: {
    customExports(exports) {
      delete exports["./tsdown.config"];

      exports["./lefthook.yml"] = "./lefthook.yml";

      return exports;
    },
  },

  outDir: "dist",
  target: false,
});
