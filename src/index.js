/* eslint-disable */
// react deps
import React from 'react'
import ReactDOM from 'react-dom'
// hot reload for development
import { AppContainer } from 'react-hot-loader'

// redux deps
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducers'
import App from './App'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') middleware.push(logger)

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
)

const root = document.getElementById('root')

const render = (Component) => {
    ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
    module.hot.accept('./App', () => { render(App) })
    module.hot.accept('./reducers', () => { store.replaceReducer(reducer) })
}
