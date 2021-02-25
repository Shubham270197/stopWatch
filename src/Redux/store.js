import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './sagas/rootSaga'

const logger = createLogger({
    duration: true,
    timestamp: true,
    // diff: true,
  })

  const sagaMiddleware = createSagaMiddleware()

  const createStoreWithMiddleware = applyMiddleware(
    sagaMiddleware,
    logger
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer)

sagaMiddleware.run(rootSaga)

export default store