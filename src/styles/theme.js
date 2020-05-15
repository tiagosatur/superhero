import { createMuiTheme } from '@material-ui/core/styles'
import { colors } from '.'

export default createMuiTheme({
  palette: {
    ...colors
  },
  customShape: {
    borderRadius: {
      default: 8,
      rounded: '50%'
    }
  },
  customShadow: {
    default: colors.shadow.default,
    wide: colors.shadow.wide
  },
  customSize: {
    card: {
      default: 170
    }
  }
})
