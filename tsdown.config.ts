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
      exports["./tsconfig.json"] = "./tsconfig.json";

      return exports;
    },
  },

  outDir: "dist",
  target: false,
});
