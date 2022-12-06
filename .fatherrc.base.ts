import { readdirSync } from 'fs';
import { join } from 'path';
import { defineConfig } from 'father';

// utils must build before core
// runtime must build before renderer-react
// components dependencies order: form -> table -> list
const headPkgs: string[] = [
  'provider',
  'utils',
  'layout',
  'card',
  'field',
  'skeleton',
  'layout',
  'form',
  'table',
  'list',
  'descriptions',
  'components',
];
const tailPkgs = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgs.includes(pkg),
);

export default defineConfig({
  cjs: {
    output: 'lib',
  },
  esm: {
    output: 'es',
  },
});
