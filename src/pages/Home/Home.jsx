import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core'

import { useAction, useStore, uniqueId } from '../../utils'

import {
  SearchField,
  HeroCard,
  HeroDetailsModal,
  BarLoader
} from '../../components'

export default function Home () {
  const [term, setTerm] = useState('')
  const [shakeField, setShakeField] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)

  const classes = useStyles()
  const { actions } = useAction()
  const {
    state: {
      search: { total, term: searchedTerm, results, isSearchLoading }
    }
  } = useStore()

  function handleChange (e) {
    setTerm(e.target.value)
  }

  async function handleSubmitSearch (e) {
    e.preventDefault()
    if (term.length >= 2) {
      actions.searchHeroes(term)
      setTerm('')
    } else {
      setShakeField(true)
      setTimeout(() => {
        setShakeField(false)
      }, 1000)
    }
  }

  function handleCloseModal () {
    setModalOpen(false)
  }

  function handleOpenModal (heroId) {
    setModalOpen(true)
    actions.getHero(heroId)
  }

  return (
    <Grid container data-testid='homepage'>
      <Grid item xs={12} className={classes.searchContainer}>
        <SearchField
          data={{ value: term, shakeField }}
          actions={{ handleChange, handleSubmitSearch }}
        />
      </Grid>
      <Grid item xs={12}>
        {isSearchLoading ? (
          <BarLoader data={{ width: 500, className: classes.barLoader }} />
        ) : (
          results &&
          results.length > 0 && (
            <div className={classes.heros}>
              <div className={classes.foundResults}>
                <Typography className={classes.resultsFor}>
                  We found {total} results for
                </Typography>

                <Typography className={classes.term} color='primary'>
                  "{searchedTerm}"
                </Typography>
              </div>
              <div className={classes.heroList}>
                {results &&
                  results.map((item, i) => (
                    <HeroCard
                      data={{
                        id: item.id,
                        name: item.name,
                        image: item.image.url,
                        powerstats: item.powerstats,
                        handleOpenModal
                      }}
                      key={uniqueId()}
                    />
                  ))}
              </div>
              <HeroDetailsModal
                data={{
                  handleCloseModal,
                  isModalOpen
                }}
              />
            </div>
          )
        )}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    fontFamily: 'Roboto',
    '::selection': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary[100]
    }
  },
  searchContainer: {
    marginBottom: 50
  },
  heroList: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  foundResults: {
    display: 'flex',
    marginBottom: 8
  },
  term: {
    fontWeight: 700
  },
  resultsFor: {
    marginRight: 4
  },
  barLoader: {
    marginTop: 100
  }
}))
