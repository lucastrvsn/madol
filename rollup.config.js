import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: './src/index.js',
  output: [
    { file: pkg.main, format: 'cjs', exports: 'named' },
    { file: pkg.module, format: 'es', exports: 'named' }
  ],
  external: [
    'react',
    'react-dom',
    'prop-types',
    'styled-components'
  ],
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
      exclude: ['node_modules/**']
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};
