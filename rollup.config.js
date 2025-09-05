import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'named'
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm'
      }
    ],
    plugins: [
      typescript({
        typescript: require('typescript'),
        useTsconfigDeclarationDir: true
      }),
      postcss({
        extract: true,
        minimize: true,
        use: ['sass']
      })
    ],
    external: ['tailwindcss']
  }
]);
