import React, { FC } from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import theme from '@/theme';
import { PanoThemeProps } from './interface';

const PanoTheme: FC<PanoThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
    </ThemeProvider>
  );
};

export default PanoTheme;
