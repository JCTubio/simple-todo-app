/*Action types*/
export const REQUEST_ADD_TODO_ITEM = 'REQUEST_ADD_TODO_ITEM'
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM'
export const UPDATE_TODO_ITEM = 'UPDATE_TODO_ITEM'
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM'

/*Action creators*/
export function requestAddTodoItem(item) {
  return { type: REQUEST_ADD_TODO_ITEM, payload: item }
}
export function addNewItem(item) {
  return { type: ADD_TODO_ITEM, payload: item }
}
export function updateTodoItem(item) {
  return { type: UPDATE_TODO_ITEM, payload: item }
}
export function deleteTodoItem(id) {
  return { type: DELETE_TODO_ITEM, payload: id }
}
