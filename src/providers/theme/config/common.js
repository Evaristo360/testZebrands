import { breakpoints } from './breakpoints';

export const common = {
  breakpoints: {
    keys: Object.keys(breakpoints),
    values: breakpoints
  },
  mixins: {
    toolbar: {
      height: 56,
      [`@media (min-width: ${breakpoints.xs}px) and (orientation: landscape)`]: {
        height: 48
      },
      [`@media (min-width: ${breakpoints.sm}px)`]: {
        height: 64
      },
      [`@media (min-width: ${breakpoints.lg}px)`]: {
        height: 92
      }
    },
    getSideMenu: (mini) => ({
      width: mini ? 100 : 279
    })
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Noto Sans, sans-serif',
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em'
    },
    h2: {
      fontFamily: 'Noto Sans, sans-serif',
      fontWeight: 300,
      fontSize: '3.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em'
    },
    h3: {
      fontFamily: 'Noto Sans, sans-serif',
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: 1.167,
      letterSpacing: '0em'
    },
    h4: {
      fontFamily: 'Noto Sans, sans-serif',
      fontWeight: 400,
      fontSize: '2.125rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em'
    },
    h5: {
      fontFamily: 'Noto Sans, sans-serif',
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: '0em'
    },
    h6: {
      fontFamily: 'Noto Sans, sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em'
    },
    subtitle1: {
      fontFamily: 'Noto Sans, sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em'
    },
    subtitle2: {
      fontFamily: 'Noto Sans, sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em'
    },
    body1: {
      fontFamily: 'Noto Sans, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em'
    },
    body2: {
      fontFamily: 'Noto Sans, sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em'
    },
    button: {
      fontFamily: 'Noto Sans, sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase'
    },
    caption: {
      fontFamily: 'Noto Sans, sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em'
    },
    overline: {
      fontFamily: 'Noto Sans, sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase'
    }
  },
  shape: {
    borderRadius: 8
  },
  spacing: 12,
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  }
};
