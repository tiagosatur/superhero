import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { BarLoader as MaterialBarLoader } from 'react-spinners'

import { colors } from '../../styles'

export default function BarLoader ({ data: { width, className } }) {
  const classes = useStyles()

  return (
    <div className={`${classes.loaderCotainer} ${className}`}>
      <MaterialBarLoader width={width} color={colors.primary.main} />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  loaderCotainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}))
