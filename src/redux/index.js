import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import userReducer, { restoreLoginAcction } from './userDuck'

let rootReducers = combineReducers({
  user: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default function generateStore() {
  let store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
  )
  restoreLoginAcction()(store.dispatch)
  return store
}
