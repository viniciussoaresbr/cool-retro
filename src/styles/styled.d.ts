import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      secondary: string;
      background: string;
      surface: string;
      text: string;
      textLight: string;
      border: string;
      gray: string;
      red: string;
      success: string;
    };
    fonts: {
      title: string;
      default: string;
      weight: {
        light: string;
        regular: string;
        medium: string;
        semibold: string;
        bold: string;
      };
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
  }
}
