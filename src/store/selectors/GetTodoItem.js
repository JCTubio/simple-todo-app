import get from 'lodash/get'

export default function getTodoItem(state){
  return get(state, 'todoListReducer.itemToUpdate')
}