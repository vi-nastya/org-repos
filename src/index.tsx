import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import './index.css'
import App from './App'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './ducks/repos-duck'
import loadReposSaga from './sagas/loadDataSaga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(loadReposSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
