import { defaultState } from '../../server/defaultState'
import {
  ADD_TODO_ITEM,
  UPDATE_TODO_ITEM,
  DELETE_TODO_ITEM,
} from '../actions/Actions'
import reject from 'lodash/reject'

export default function todoListReducer(
  state = {
    itemList: defaultState.tasks,
  },
  action
) {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return Object.assign({}, state, {
        itemList: [...state.itemList, action.payload],
      })
    case UPDATE_TODO_ITEM:
      return Object.assign({}, state, {
        itemList: state.itemList.map((item) => {
          return item.id === action.payload.id
            ? {
                ...item,
                title: action.payload.title,
                description: action.payload.description,
              }
            : item
        }),
      })
    case DELETE_TODO_ITEM:
      return Object.assign({}, state, {
        itemList: reject(state.itemList, ['id', action.payload]),
      })
    default:
      return state
  }
}
