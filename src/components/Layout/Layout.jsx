import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { Header } from '..'

export default function Layout ({ children }) {
  const classes = useStyles()

  return (
    <Container data-testid='layout'>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} className={classes.main}>
        {children}
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  main: {
    padding: [[64, 0]]
  }
}))
