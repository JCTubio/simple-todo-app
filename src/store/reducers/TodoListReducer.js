import {
  GET_TODO_ITEMS,
  ADD_TODO_ITEM,
  UPDATE_TODO_ITEM,
  DELETE_TODO_ITEM,
  GET_SINGLE_TODO_ITEM,
} from '../actions/Actions'
import reject from 'lodash/reject'

export default function todoListReducer(
  state = {
    itemList: [],
    itemToUpdate: {},
  },
  action
) {
  switch (action.type) {
    case GET_SINGLE_TODO_ITEM:
      return Object.assign({}, state, {
        itemToUpdate: action.payload,
      })
    case GET_TODO_ITEMS:
      return Object.assign({}, state, {
        itemList: action.payload,
        itemToUpdate: {},
      })
    case ADD_TODO_ITEM:
      return Object.assign({}, state, {
        itemList: [...state.itemList, action.payload],
        itemToUpdate: {},
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
        itemToUpdate: {},
      })
    case DELETE_TODO_ITEM:
      return Object.assign({}, state, {
        itemList: reject(state.itemList, ['id', action.payload]),
        itemToUpdate: {},
      })
    default:
      return state
  }
}
