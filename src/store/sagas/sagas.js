import { take, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import uuid from 'uuid'
import axios from 'axios'

import * as actions from '../actions/Actions'

const url = 'http://localhost:8080'
const config = { headers: { 'Content-Type': 'application/json' } }

export function* todoSingleItemGetSaga() {
  while (true) {
    const { payload } = yield take(actions.REQUEST_GET_SINGLE_TODO_ITEM)
    const response = yield axios.get(url + `/task/${ payload }`)
    if (response){
      yield put(actions.getSingleTodoItem(response.data))
    } 
  }
}

export function* todoItemListGetSaga() {
  while (true) {
    yield take(actions.REQUEST_GET_TODO_ITEMS)
    const response = yield axios.get(url + `/tasks`)
    if (response){
      yield put(actions.getTodoItems(response.data))
    } 
  }
}

export function* todoItemCreationSaga() {
  while (true) {
    const { payload } = yield take(actions.REQUEST_ADD_TODO_ITEM)
    payload.id = uuid()
    yield put(actions.addNewItem(payload))
    const { res } = yield axios.post(
      url + `/task/create`,
      {
        task: {
          id: payload.id,
          title: payload.title,
          description: payload.description,
        },
      },
      config
    )
    yield put(push('/tasks'))
  }
}

export function* todoItemUpdateSaga() {
  while (true) {
    const { payload } = yield take(actions.UPDATE_TODO_ITEM)
    const { res } = yield axios.put(
      url + `/task/${payload.id}/update`,
      {
        task: {
          id: payload.id,
          title: payload.title,
          description: payload.description,
        },
      },
      config
    )
    yield put(push('/tasks'))
  }
}

export function* todoItemDeleteSaga() {
  while (true) {
    const { payload } = yield take(actions.DELETE_TODO_ITEM)
    const { res } = yield axios.delete(
      url + `/task/${payload}/delete`,
      {},
      config
    )
  }
}
