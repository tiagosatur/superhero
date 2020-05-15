import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'

import store from './store'
import { Layout } from './components'
import { Home } from './pages'
import { theme } from './styles'

function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Router>
            <Switch>
              <Route component={Home} path='/' exact />
            </Switch>
          </Router>
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default App
