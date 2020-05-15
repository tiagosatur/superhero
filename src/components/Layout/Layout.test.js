/* eslint-env jest */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'

import Layout from './Layout'

describe('Layout component', () => {
  beforeEach(() => {
    cleanup()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Layout />)
    expect(
      asFragment(
        <Layout>
          <h2 data-testid='layout-children'>Some child content</h2>
        </Layout>
      )
    ).toMatchSnapshot()
  })

  it('renders ', () => {
    const { queryByTestId } = render(
      <Layout>
        <h2>Some child content</h2>
      </Layout>
    )

    expect(queryByTestId('layout').textContent).not.toEqual(null)
  })

  it('renders its children ', () => {
    const { queryByTestId } = render(
      <Layout>
        <h2>Some child content</h2>
      </Layout>
    )

    expect(queryByTestId('layout')).toBe('layout')
  })
})
