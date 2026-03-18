import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#132C33', // Dark Teal
    primaryLight: '#51C4D3', // Bright Teal
    secondary: '#126E82', // Medium Teal
    background: '#F1F6F8', // Very Light Cyan-Gray
    surface: '#FFFFFF',
    text: '#132C33',
    textLight: '#50666C',
    border: '#D8E3E7',
    gray: '#D8E3E7',
    red: '#D90429',
    success: '#0E8388',
  },
  fonts: {
    title: "'Inter', sans-serif",
    default: "'Inter', sans-serif",
    weight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(19 44 51 / 0.05)',
    md: '0 4px 6px -1px rgb(19 44 51 / 0.1), 0 2px 4px -2px rgb(19 44 51 / 0.1)',
    lg: '0 10px 15px -3px rgb(19 44 51 / 0.1), 0 4px 6px -4px rgb(19 44 51 / 0.1)',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    full: '9999px',
  },
};

export default theme;
