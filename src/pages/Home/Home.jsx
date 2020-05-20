import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core'
import { isEmpty } from 'lodash'

import { useAction, useStore, uniqueId } from '../../utils'

import {
  BarLoader,
  HeroCard,
  HeroDetailsModal,
  SearchField,
  Filters
} from '../../components'

export default function Home () {
  const [term, setTerm] = useState('')
  const [shakeField, setShakeField] = useState(false)
  const [isHeroDetailsModalOpen, setHeroDetailsModalOpen] = useState(false)

  const classes = useStyles()
  const { actions } = useAction()
  const {
    state: {
      search: { total, term: searchedTerm, results, isSearchLoading },
      filter: { filteredList }
    }
  } = useStore()

  useEffect(() => {
    !isEmpty(results) && actions.filterResults()
  }, [results])

  function handleChangeTerm (e) {
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

  function handleHeroDetailsCloseModal () {
    setHeroDetailsModalOpen(false)
  }

  function handleHeroDetailsOpenModal (heroId) {
    setHeroDetailsModalOpen(true)
    actions.getHero(heroId)
  }

  async function handleApplyFilters () {
    actions.filterResults()
  }

  function handleresetFilters () {
    actions.resetFilters()
  }

  return (
    <Grid container data-testid='homepage'>
      <Grid item xs={12} className={classes.searchContainer}>
        <SearchField
          data={{ value: term, shakeField }}
          actions={{ handleChangeTerm, handleSubmitSearch }}
        />
      </Grid>
      <Grid item xs={12}>
        {isSearchLoading ? (
          <BarLoader data={{ width: 500, className: classes.barLoader }} />
        ) : (
          <Grid container spacing={2} className={classes.heros}>
            {filteredList && filteredList.length > 0 && (
              <Grid item xs={12} className={classes.foundResults}>
                <div className={classes.foundResults}>
                  <Typography className={classes.resultsFor}>
                    We found {total} results for
                  </Typography>

                  <Typography className={classes.term} color='primary'>
                    "{searchedTerm}"
                  </Typography>
                </div>
              </Grid>
            )}
            <Grid item xs={12} sm={3}>
              <div className={classes.filterContainer}>
                {results && results.length > 0 && (
                  <Filters
                    actions={{
                      handleApplyFilters,
                      handleresetFilters
                    }}
                  />
                )}
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <div className={classes.heroList}>
                {filteredList.length > 0 &&
                  filteredList.map((item, i) => (
                    <HeroCard
                      data={{
                        id: item.id,
                        name: item.name,
                        image: item.image.url,
                        powerstats: item.powerstats,
                        handleOpenModal: handleHeroDetailsOpenModal
                      }}
                      key={uniqueId()}
                    />
                  ))}
              </div>
            </Grid>

            <Grid item xs={12}>
              <HeroDetailsModal
                data={{
                  isModalOpen: isHeroDetailsModalOpen
                }}
                actions={{
                  handleCloseModal: handleHeroDetailsCloseModal
                }}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      margin: 0
    },
    fontFamily: [
      'Roboto',
      '-apple - system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans - serif'
    ],
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
    justifyContent: 'space-between',
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
