import { createTheme, Theme } from '@mui/material/styles';
import components from './src/components';
import custom from './src/custom';
import palette from './src/palette';
import shadows from './src/shadows';
import transitions from './src/transitions';
import typography from './src/typography';
import zIndex from './src/zIndex';

const theme: Theme = createTheme(
  {
    palette,
    components,
    typography,
    transitions,
    shadows,
    zIndex,
  },
  {
    custom,
  }
);

export default theme;
