import { fonts } from './fonts';

export const lightTheme = {
  colors: {
    PRIMARY: '#8775FE',
    TEXT: '#000000',
    TEXT_SECONDARY: '#85868A',
    BACKGROUND: '#F8F8F8',
    SURFACE: '#FFFFFF',
    DIVIDER: 'rgba(235, 235, 230, 1)',
    WHITE: '#FFFFFF',
    BLACK: '#000000',
  },
  shape: {
    RADIUS: 13,
  },
  fonts,
};

export const navigationLightTheme = {
  dark: false,
  colors: {
    background: lightTheme.colors.BACKGROUND,
    card: lightTheme.colors.SURFACE,
    text: lightTheme.colors.TEXT,
    border: lightTheme.colors.DIVIDER,
    primary: lightTheme.colors.PRIMARY,
    notification: lightTheme.colors.TEXT,
  },
};
