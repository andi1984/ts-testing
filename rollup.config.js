import babel from "rollup-plugin-babel";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";
export default {
  input: "src/index.ts", // our source file
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "es" // the preferred format
    }
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    babel({
      extensions: [".js", ".ts"]
    }),
    terser() // minifies generated bundles
  ]
};
