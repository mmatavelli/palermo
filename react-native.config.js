const VECTOR_ICONS_FONTS_PATH =
  './node_modules/react-native-vector-icons/Fonts';
const VECTOR_FONTS = ['Feather.ttf'];

module.exports = {
  project: {
    ios: {},
    android: {},
  },
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
        android: null,
      },
      assets: VECTOR_FONTS.map(font => VECTOR_ICONS_FONTS_PATH + '/' + font),
    },
  },
  assets: ['./src/assets/fonts/'],
};
