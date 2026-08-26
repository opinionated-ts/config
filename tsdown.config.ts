import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/configs/release.ts"],
  deps: {
    neverBundle: true,
  },
  dts: true,

  exports: {
    customExports(exports) {
      exports["./lefthook.yml"] = "./lefthook.yml";
      exports["./tsconfig.json"] = "./tsconfig.json";

      exports["./release"] = exports["./configs/release"];
      delete exports["./configs/release"];

      return exports;
    },
    exclude: ["./tsdown.config"],
  },

  outDir: "dist",
  target: false,
});
