const path = require('path');

const exampleMode = 'expand';
const usageMode = 'expand';

const webpackConfig = require('./config/webpack.config.js');

module.exports = {
  usageMode,
  exampleMode,
  webpackConfig,
  assetsDir: './src',
  pagePerSection: true,
  skipComponentsWithoutExample: true,

  require: [path.resolve('./config/styleguide-helpers')],
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,

  ignore: [
    'src/services/**',
    '**/*.test.{ts,tsx,js,mjs,jsx}',
    '**/*.d.{ts,tsx,js,mjs,jsx}'
  ],

  sections: [
    {
      name: 'Introduction',
      content: 'README.md',
    },
    {
      name: 'UI components',
      content: 'src/components/Components.md',
      components: 'src/components/**/[A-Z]*.tsx',
      exampleMode,
      usageMode,
    },
  ],
};
