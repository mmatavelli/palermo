import { Platform } from 'react-native';

export const generateBoxShadowStyle = (
  xOffset: any,
  yOffset: any,
  shadowColorIos: any,
  shadowOpacity: any,
  shadowRadius: any,
  elevation: any,
  shadowColorAndroid: any,
) => {
  if (Platform.OS === 'ios') {
    return {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  }
  if (Platform.OS === 'android') {
    return {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};
