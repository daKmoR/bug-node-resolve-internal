import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'app.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [nodeResolve()]
};
