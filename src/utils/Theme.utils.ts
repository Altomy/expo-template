/**
 * Theme
 * @utils
 */

import { extendTheme } from 'native-base';

/* A constant variable to set the border radius */
export const BorderRadius = 3;

/* A constant variable to set the font size. */
export const FontSizes = {
  small: 12,
  medium: 16,
  large: 20,
};

/* A constant variable to set the colors. */
export const Colors = {
  light: {},
  dark: {},
};

/* A way to set the metrics sizes for the whole app. */
const StanderMetric = 1.5;
export const MetricsSizes = {
  tiny: StanderMetric,
  small: StanderMetric * 2,
  medium: StanderMetric * 3,
  large: StanderMetric * 4,
};

/* Extending the theme. */
export const theme = extendTheme({
  /* A way to set the font family for the whole app. */
  fontConfig: {
    Inter: {
      100: {
        normal: 'Inter_100Thin',
      },
      200: {
        normal: 'Inter_200ExtraLight',
      },
      300: {
        normal: 'Inter_300Light',
      },
      400: {
        normal: 'Inter_400Regular',
      },
      500: {
        normal: 'Inter_500Medium',
      },
      600: {
        normal: 'Inter_600SemiBold',
      },
      700: {
        normal: 'Inter_700Bold',
      },
      800: {
        normal: 'Inter_800ExtraBold',
      },
      900: {
        normal: 'Inter_900Black',
      },
    },
  },
  /* Setting the font family for the whole app. */
  fonts: {
    heading: 'Inter',
    body: 'Inter',
    mono: 'Inter',
  },
});
