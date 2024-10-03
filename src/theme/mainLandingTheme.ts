import { createTheme } from '@mui/material';
import {
  darkViolet,
  lightViolet,
  textViolet,
  textWhite,
  textGrey,
} from '../common';

const breakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 390,
      md: 830,
      lg: 1440,
      xl: 1920,
    },
  },
});

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    violet: true;
    grey: true;
  }
}

export const mainLandingTheme = createTheme({
  ...breakpoints,
  palette: {
    primary: {
      main: darkViolet,
    },
    secondary: {
      main: lightViolet,
    },
  },
  typography: {
    h1: {
      fontFamily: 'Raleway',
      color: textWhite,
      fontWeight: 800,
      fontSize: '48px',
      lineHeight: '120%',
      [breakpoints.breakpoints.down('md')]: {
        fontSize: '34px',
      },
    },
    h2: {
      fontFamily: 'Raleway',
      textAlign: 'center',
      color: textWhite,
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '120%',
      [breakpoints.breakpoints.down('md')]: {
        fontSize: '24px',
      },
    },
    h3: {
      fontFamily: 'Raleway',
      fontWeight: 400,
      fontSize: '24px',
      textAlign: 'center',
      color: textGrey,
      [breakpoints.breakpoints.down('md')]: {
        fontSize: '18px',
        textAlign: 'justify',
      },
    },
    h4: {
      fontFamily: 'Raleway',
      fontWeight: 400,
      fontSize: '18px',
      textAlign: 'center',
      color: textGrey,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: '-6px',
        left: 0,
        width: '100%',
        height: '3px',
        backgroundColor: 'rgba(123, 74, 226, 0.5)',
        transform: 'scale(0, 1)',
        transition: 'transform .3s ease',
      },
      '&:hover::before': {
        transform: 'scale(1, 1)',
      },
      '&:hover': {
        fontWeight: 700,
        color: textViolet,
        transition: 'all .3s ease-in-out',
      },
    },
    h5: {
      fontFamily: 'Raleway',
      fontWeight: '700',
      fontSize: '20px',
      textAlign: 'center',
      color: 'rgba(123, 74, 226, 0.5)',
      [breakpoints.breakpoints.down('md')]: {
        fontSize: '18px',
      },
    },

    subtitle1: {
      fontFamily: 'Raleway',
      fontSize: '16px',
      fontWeight: 400,
      color: textGrey,
      [breakpoints.breakpoints.down('md')]: {
        fontSize: '14px',
      },
    },
    subtitle2: {
      fontFamily: 'Raleway',
      fontSize: '14px',
      fontWeight: 400,
      color: textGrey,
    },
    button: {
      backgroundColor: darkViolet,
      border: '1px solid rgba(123, 74, 226, 0.5)',
      borderRadius: '16px',
      color: textViolet,
      width: '253px',
      height: '44px',
      fontWeight: 600,
      fontSize: '16px',
      [breakpoints.breakpoints.down('md')]: {
        width: '146px',
        height: '44px',
      },
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: darkViolet,
          color: textViolet,
          border: '1px solid rgba(123, 74, 226, 0.5)',
          borderRadius: '16px',
          width: '253px',
          height: '44px',
          '&:hover': {
            transition: 'all .3s ease-in-out',
            fontWeight: 900,
            textDecoration: 'none',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          maxWidth: theme.breakpoints.values.sm,
          padding: '0 20px !important',
          [theme.breakpoints.up('md')]: {
            maxWidth: theme.breakpoints.values.md,
            padding: '0 60px !important',
          },
          [theme.breakpoints.up('lg')]: {
            maxWidth: theme.breakpoints.values.lg,
            padding: '0 100px !important',
          },
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: darkViolet,
          borderRadius: '16px',
          border: '1px solid rgba(123, 74, 226, 0.5)',
          width: '360px',
          height: '460px',
          padding: '30px',
          [theme.breakpoints.down('md')]: {
            maxWidth: theme.breakpoints.values.md,
            padding: '24px',
          },
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '&.adminTextField': {
            '& .MuiInputBase-root': {
              color: '#ffffff',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ffffff80',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ffffff80',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ffffff80',
            },
            '& .MuiInputLabel-root': {
              color: '#ffffff80',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#ffffff80',
            },
            '& .MuiInputLabel-root.MuiInputLabel-shrink': {
              color: '#ffffff80',
            },
          },
        },
      },
    },
  },
});
