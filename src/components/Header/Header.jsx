import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Container, Toolbar } from '@material-ui/core'

export default function Header () {
  const classes = useStyles()

  return (
    <>
      <div className={classes.container} data-testid='brf-hero-header'>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Container className={classes.materialContainer}>
              <h2 className={classes.title}>Super Hero</h2>
            </Container>
          </Toolbar>
        </AppBar>
      </div>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme && theme.palette && theme.palette.primary.main
  },
  appBarItens: {
    flexGrow: 1
  },
  container: {
    position: 'relative',
    minHeight: 96
  },
  toolbar: {
    padding: [[16, 0]]
  },
  materialContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
    // [theme.breakpoints.up("lg")]: {
    //   padding: 0,
    // },
  },
  title: {
    fontFamily: 'Permanent Marker',
    fontSize: 40,
    color: theme && theme.palette && theme.palette.primary[100],
    margin: 0
  }
}))
