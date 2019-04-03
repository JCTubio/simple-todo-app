import get from 'lodash/get'

export default function getTodoList(state){
  return get(state, 'todoListReducer.itemList')
}