import { definePreset } from '@primevue/themes'
import Material from '@primevue/themes/material'

export default definePreset(Material, {
  semantic: {
    transitionDuration: '300ms',
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}',
    },
    colorScheme: {
      light: {
        surface: {
          950: '#000000',
        },
      },
      dark: {
        surface: {
          900: '#000000',
          950: '#000000',
        },
      },
    },
  },
  components: {
    menubar: {
      gap: '3rem',
    },
    button: {
      colorScheme: {
        light: {
          root: {
            primary: {
              color: '#ffffff',
            },
          },
        },
        dark: {
          root: {
            primary: {
              color: '#ffffff',
              hover: {
                color: '#ffffff',
              },
            },
          },
        },
      },
    },
    togglebutton: {
      colorScheme: {
        dark: {
          root: {
            background: '{surface.800}',
            checked: {
              background: '{surface.800}',
            },
            hover: {
              background: '{surface.800}',
            },
          },
          content: {
            background: '{surface.950}',
            checked: {
              background: '{surface.950}',
            },
          },
        },
      },
    },
  },
})
