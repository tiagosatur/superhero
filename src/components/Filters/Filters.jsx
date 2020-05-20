import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'
import { PulseLoader as Spinner } from 'react-spinners'

import { colors } from '../../styles'
import { useStore } from '../../utils'
import { Slider } from '..'

export default function Filters ({
  actions: { handleApplyFilters, handleresetFilters }
}) {
  const classes = useStyles()

  const {
    state: {
      filter: { power, speed, isFiltering }
    }
  } = useStore()

  return (
    <div className={classes.filterModalContainer}>
      <div className={classes.filtersSpace}>
        <Slider
          data={{
            label: 'Power',
            defaultValue: power && power,
            key: 'power'
          }}
        />
        <Slider
          data={{
            label: 'Speed',
            defaultValue: speed && speed,
            key: 'speed'
          }}
        />
      </div>
      <div className={classes.filterModalFooter}>
        <Button
          onClick={handleApplyFilters}
          color='primary'
          variant='contained'
        >
          {isFiltering ? (
            <Spinner size={10} color={colors.common.white} />
          ) : (
            'Apply filters'
          )}
        </Button>
        {/* <Button onClick={handleresetFilters}>Reset filters</Button> */}
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  filterModalContainer: {
    display: 'flex',
    flexDirection: 'column',

    padding: 16
  },
  filterModalFooter: {
    display: 'flex',
    flexDirection: 'column',

    justifyContent: 'space-between'
  },
  filtersSpace: {
    flexGrow: 1,
    marginBottom: 100
  }
}))
