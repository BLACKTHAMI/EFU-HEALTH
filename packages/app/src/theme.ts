import { createTheme, MantineThemeOverride } from '@mantine/core';

export const appTheme: MantineThemeOverride = {
  primaryColor: 'indigo',
  colors: {
    indigo: [
      '#EEF2FF',
      '#E0E7FF',
      '#C7D2FE',
      '#A5B4FC',
      '#818CF8',
      '#6366F1', // Primary color
      '#4F46E5', // Secondary color
      '#4338CA',
      '#3730A3',
      '#312E81',
    ],
  },
  components: {
    Button: {
      styles: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
  },
};