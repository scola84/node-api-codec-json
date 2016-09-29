import buble from 'rollup-plugin-buble';

export default {
  dest: './dist/api-codec-json.js',
  entry: 'index.js',
  format: 'cjs',
  external: [
    'stream'
  ],
  plugins: [
    buble()
  ]
};
