import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import * as sagas from './sagas/mock'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  reducers,
  applyMiddleware(createLogger(), sagaMiddleware)
)

for (let saga in sagas) {
   sagaMiddleware.run(sagas[saga])
}
