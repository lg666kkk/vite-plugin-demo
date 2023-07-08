import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'; 

export default defineConfig({
    input: 'src/index.ts',
    output: [
        {
          file: 'dist/index.js',
          format: 'umd',
          /**
           * 对于输出格式为 iife / umd 的 bundle 来说，
           * 若想要使用全局变量名来表示你的 bundle 时，name选项是必要的。
           * 同一页面上的其他脚本可以使用这个变量名来访问你的 bundle 输出
           */
          name: 'xxxx'
        },
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
          },
          {
            file: 'dist/index.mjs',
            format: 'esm',
          }
    ],
    plugins: [
        typescript()
    ]
}) 