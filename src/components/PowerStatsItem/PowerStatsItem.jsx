import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Tooltip } from '@material-ui/core'

export default function PowerStatsItem ({ data: { name, strength } }) {
  const classes = useStyles({ strength })

  return (
    <div className={classes.container}>
      <Typography className={classes.name}>{name}</Typography>
      <Tooltip title={strength}>
        <div className={classes.barContainer}>
          <div className={classes.bar} />
        </div>
      </Tooltip>
    </div>
  )
}

const useStyles = makeStyles(({ palette }) => ({
  container: {
    display: 'flex'
  },
  name: {
    textTransform: 'capitalize',
    width: '50%'
  },
  bar: {
    backgroundColor: palette.primary.main,
    height: 5,
    width: ({ strength }) => `${strength}%`
  },
  barContainer: {
    backgroundColor: palette.common.black['01'],
    display: 'flex',
    alignItems: 'center',
    width: '50%'
  }
}))
