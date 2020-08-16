import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { StateType } from './reducers'
import loadDataSaga from '../sagas/loadDataSaga'

const sagaMiddleware = createSagaMiddleware()

export const configureStore = (initialState: StateType) => {
  const middleware = [sagaMiddleware]

  const composeEnhancers =
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )
  sagaMiddleware.run(loadDataSaga)
  return store
}
