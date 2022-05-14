import { fonts } from './fonts';

export const darkTheme = {
  colors: {
    PRIMARY: '#8775FE',
    TEXT: '#000000',
    TEXT_SECONDARY: '#85868A',
    BACKGROUND: '#E5E5E5',
    SURFACE: '#FFFFFF',
    DIVIDER: '#EBEBED',
    WHITE: '#FFFFFF',
    BLACK: '#000000',
  },
  shape: {
    RADIUS: 10,
  },
  fonts,
};

export const navigationDarkTheme = {
  dark: true,
  colors: {
    background: darkTheme.colors.BACKGROUND,
    card: darkTheme.colors.SURFACE,
    text: darkTheme.colors.TEXT,
    border: darkTheme.colors.DIVIDER,
    primary: darkTheme.colors.PRIMARY,
    notification: darkTheme.colors.TEXT,
  },
};
