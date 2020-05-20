import React, { useState, useEffect } from 'react'
import {
  Slider as MaterialSlider,
  Tooltip,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { debounce } from 'lodash'

import { useAction } from '../../utils'

export default function Slider ({ data: { label, defaultValue, key } }) {
  const { actions } = useAction()
  const [filterValue, setFilterValue] = useState(defaultValue)

  useEffect(() => {
    debouncedStoreFilter(() => {
      actions.setFilters({ key, data: filterValue })
    })
  }, [filterValue])

  function handleChangeFilterValue (e, value) {
    setFilterValue(value)
  }
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography id='continuous-slider'>{label}</Typography>
      <MaterialSlider
        ValueLabelComponent={ValueLabelComponent}
        value={filterValue}
        onChange={handleChangeFilterValue}
      />
    </div>
  )
}

const debouncedStoreFilter = debounce((callback) => {
  callback()
}, 500)

function ValueLabelComponent (props) {
  const { children, open, value } = props

  return (
    <>
      <Tooltip open={open} enterTouchDelay={0} placement='top' title={value}>
        {children}
      </Tooltip>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: 16
  }
}))
