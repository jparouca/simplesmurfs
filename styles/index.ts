
import { createStitches } from '@stitches/react';


export const {
  config,
  styled,
  globalCss,
  css,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches ({
  theme: {
    colors: {
      rs: '#8257e6',
      white: '#fff',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',
    
    },

    fontSizes: {
      sm: '1.125rem',
      md: '1.25rem',
      lg: '1.5rem',
      xl: '2rem',
    }
  }
});