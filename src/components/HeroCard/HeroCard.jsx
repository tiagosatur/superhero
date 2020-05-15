import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'

import { uniqueId } from '../../utils'
import { PowerStats } from '..'

export default function HeroCard ({ data: { id, name, image, powerstats } }) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          {powerstats &&
            Object.entries(powerstats).map((power) => (
              <PowerStats
                data={{
                  name: power[0],
                  strength: power[1]
                }}
                key={uniqueId()}
              />
            ))}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    margin: [[8, 8, 24, 8]],

    [theme.breakpoints.up('lg')]: {
      minWidth: 292
    }
  },
  media: {
    height: 140
  }
}))
