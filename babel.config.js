const path = require('path');

const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [path.resolve('.')],
      extensions: [
        '.ts',
        '.tsx',
        '.ios.tsx',
        '.android.tsx',
        '.svg',
        '.jpg',
        '.png',
      ],
      alias: {
        features: './src/utils/clients',
        components: './src/components/',
        assets: './src/assets/',
        screens: './src/screens/',
        routes: './src/routes',
        'assets/*': './src/assets',
        firebase: './src/config',
        '@actions/auth': './src/store/ducks/auth.ts',
        '@actions/research': './src/store/ducks/research.ts',
        '@actions/radar': './src/store/ducks/radar.ts',
        functions: './src/functions',
        store: './src/store',
        validation: './src/utils/validation',
        '@mask': './src/utils/mask',
        hooks: './src/hooks',
        '@styles': './src/styles',
        '@ufs': './src/utils/UFs',
        '@biomes': './src/utils/biomes',
        '@reactotron': './src/config/ReactotronConfig.ts',
      },
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [...plugins, 'react-native-paper/babel'],
};
