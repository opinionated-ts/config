import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/configs/semanticReleaseConfig.ts"],
  deps: {
    onlyBundle: ["@commitlint/types"],
  },
  treeshake: {
    moduleSideEffects: false,
  },
  dts: true,

  exports: {
    customExports(exports) {
      exports["./lefthook.yml"] = "./lefthook.yml";
      exports["./tsconfig.json"] = "./tsconfig.json";

      exports["./release"] = exports["./configs/semanticReleaseConfig"];
      delete exports["./configs/semanticReleaseConfig"];

      return exports;
    },
    exclude: ["./tsdown.config"],
  },

  outDir: "dist",
  target: false,
});
