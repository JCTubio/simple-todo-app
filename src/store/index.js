import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { history } from '../store/history'
import { routerMiddleware } from 'react-router-redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import * as sagas from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware()
const routersMiddleware = routerMiddleware(history)

export const store = createStore(
  reducers,
  applyMiddleware(createLogger(), sagaMiddleware, routersMiddleware)
)

for (let saga in sagas) {
   sagaMiddleware.run(sagas[saga])
}
