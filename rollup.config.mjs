import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import packageJson from './package.json' assert {type: "json"}

export default [
    {
        input: "src/index.js",
        output: [
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            babel({
              exclude: "node_modules/**"
            }),
            nodeResolve(),
            commonjs()
          ]
    }
]