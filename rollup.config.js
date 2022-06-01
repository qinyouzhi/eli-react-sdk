import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';

const { name } = pkg;
const sourcemap = true;

const config = [
  {
    input: './src/index.js',
    output: [
      // ESM
      {
        name,
        file: `./es/${name}.js`,
        sourcemap,
      },
      // CommonJS
      {
        name,
        file: `./lib/${name}.js`,
        format: 'cjs',
        sourcemap,
      },
    ],
    plugins: [
      resolve(), // 这样 Rollup 能找到 `ms`
      commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
      peerDepsExternal(),
      typescript({
        useTsconfigDeclarationDir: true,
      }),
      eslint({
        include: ['src/**'],
        exclude: ['node_modules/**'],
      }),
      babel({
        exclude: 'node_modules/**', // 防止打包node_modules下的文件
        runtimeHelpers: true, // 使plugin-transform-runtime生效
        extensions: ['.ts', '.js'],
      }),
      terser(),
      filesize(),
    ],
  },
];

export default config;
