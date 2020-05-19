const palette = {
  primary: {
    50: '#ffebef',
    100: '#ffccd4',
    200: '#f5979d',
    300: '#ed6e76',
    400: '#f94854',
    500: '#ff2f39',
    600: '#f02338',
    700: '#de1532',
    800: '#d1052a',
    900: '#c3001d'
  },
  secondary: {
    50: '#FFF8E1',
    100: '#FFEDB4',
    200: '#FFE183',
    300: '#FFD651',
    400: '#FFCC2B',
    500: '#FFC30E',
    600: '#FFB506',
    700: '#FFA204',
    800: '#FF9103',
    900: '#FF7101',
    A100: '#ffe57f',
    A200: '#ffd740',
    A400: '#ffc400',
    A700: '#ffab00'
  },
  common: {
    white: {
      transparent: 'transparent',
      default: '#fff',
      98: '#fafafa'
    },
    black: {
      default: '#000',
      '01': 'rgba(0, 0, 0, 0.1)',
      25: 'rgba(0, 0, 0, 0.25)',
      12: 'rgba(0, 0, 0, 0.12)',
      87: 'rgba(0, 0, 0, 0.87)',
      54: 'rgba(0, 0, 0, 0.54)',
      38: 'rgba(0, 0, 0, 0.38)'
    }
  }
}

export default {
  common: {
    black: palette.common.black.default,
    white: palette.common.white.default,
    transparent: palette.common.white.transparent,
    ...palette.common.white,
    ...palette.common.black
  },
  background: {
    paper: palette.common.white.default,
    default: palette.common.white[98],
    opacity30: 'rgba(255, 255, 255, 0.3)'
  },
  primary: {
    light: palette.primary[200],
    main: palette.primary[700],
    dark: palette.primary[900],
    contrastText: palette.common.white.default,
    ...palette.primary
  },
  secondary: {
    light: palette.secondary[200],
    main: palette.secondary[500],
    dark: palette.secondary[900],
    contrastText: palette.common.white.default,
    ...palette.secondary
  },
  text: {
    primary: palette.common.black[87],
    secondary: palette.common.black[54],
    disabled: palette.common.black[38],
    hint: palette.common.black[38]
  },
  shadow: {
    default: `0 1px 14px ${palette.common.black['01']}`,
    wide: `0 24px 44px ${palette.common.black[25]}`
  }
}
