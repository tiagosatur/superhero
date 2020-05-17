import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { auth, search, hero } from './reducers'

const rootReducer = combineReducers({
  auth,
  hero,
  search
})

const middlewares = [thunk]

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)
