import React from 'react'

import { uniqueId } from '../../utils'

import { PowerStatsItem } from '..'

export default function PowerStatsList ({ data: { list } }) {
  return (
    <>
      {list &&
        Object.entries(list).map((power) => (
          <PowerStatsItem
            data={{
              name: power[0],
              strength: power[1]
            }}
            key={uniqueId()}
          />
        ))}
    </>
  )
}
