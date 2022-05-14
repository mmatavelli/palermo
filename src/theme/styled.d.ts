/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { lightTheme } from './light';

declare module 'styled-components' {
  type ThemeType = typeof lightTheme;

  // eslint-disable-next-line prettier/prettier
  export interface DefaultTheme extends ThemeType { }
}
