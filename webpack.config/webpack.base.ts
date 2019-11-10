import { join } from 'path';
import { webpackBaseConfigFactory, IBaseConfig } from '@mantha/webpack-config';
import htmlConfigFactory from '../src/config/build/html';
import chunkSplitPatterns from '../src/config/build/chunk';

export default (mode: IBaseConfig['mode']) => webpackBaseConfigFactory({
  projectPath: join(__dirname, '..'),
  publicPath: '/',
  configJsonPath: './src/tsconfig.json',
  buildPath: './build',
  chunkSplitPatterns,
  htmlConfigFactory,
  mode,
});
