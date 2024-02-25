const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  tsconfig: "./tsconfig.json",
  target: ["node20"],
  platform: "node",
  packages: "external",
  outdir: "./dist",
  format: "cjs",
  alias: {
    "@modules": "./src/modules",
    "@config": "./src/config",
    "@shared": "./src/shared",
    "@database": "./src/database",
  },
});
