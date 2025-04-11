import { createTheme, MantineTheme, MantineThemeOverride } from '@mantine/core';

export const appTheme = createTheme({
  primaryColor: 'alpine',
  colors: {
    alpine: [
      '#FFFFFF', // White
      '#F8FAFC', // Snow white
      '#EDF2F7', // Ice white
      '#E2E8F0', // Glacier white
      '#FF3A44', // Alpine red
      '#0066CC', // Alpine blue
      '#00A651', // Alpine green
      '#004999', // Deep blue
      '#007A3D', // Deep green
      '#CC2E36', // Deep red
    ],
  },
  fontFamily: 'Inter, sans-serif',
  defaultRadius: 'md',
  components: {
    Button: {
      defaultProps: {
        size: 'md',
        radius: 'md',
      },
      styles: (theme: MantineTheme) => ({
        root: {
          '&:not([data-disabled]):hover': {
            transform: 'translateY(-1px)',
          },
        },
      }),
    },
    Card: {
      defaultProps: {
        radius: 'lg',
        shadow: 'sm',
      },
    },
  },
  other: {
    headerHeight: 60,
    navbarWidth: 300,
    containerPadding: 16,
  },
});