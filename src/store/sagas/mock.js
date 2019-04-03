import { take, put, select } from 'redux-saga/effects'
import * as actions from '../actions/Actions'
import uuid from 'uuid'

export function* todoItemCreationSaga(){
  while (true){
    const { payload } = yield take(actions.REQUEST_ADD_TODO_ITEM)
    payload.id = uuid()
    yield put(actions.addNewItem(payload))
  }
}