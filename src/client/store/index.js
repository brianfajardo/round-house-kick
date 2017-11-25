import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from '../reducers'

// Redux devtools.
// Prefixing with "typeof window !== 'undefined' &&" for this app since it's isomorphic.
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = applyMiddleware(reduxThunk)

export default (initialState = {}) =>
  createStore(rootReducer, initialState, composeEnhancers(middleware))

