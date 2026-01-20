import { CycloneDxWebpackPlugin } from '@cyclonedx/webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './dist/swl/modal-lib/fesm2022/swl-modal-lib.mjs',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/swl/modal-lib'),
    filename: 'noop.js',
  },
  plugins: [
    new CycloneDxWebpackPlugin({
      specVersion: '1.6',
      wellknownLocation: './.sbom',
      outputLocation: './bom'
    }),
  ],
};
