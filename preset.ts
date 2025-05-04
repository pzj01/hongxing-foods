import { definePreset } from '@primevue/themes'
import Nora from '@primevue/themes/nora'

export default definePreset(Nora, {
  semantic: {
    transitionDuration: '300ms',
    primary: {
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}',
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
