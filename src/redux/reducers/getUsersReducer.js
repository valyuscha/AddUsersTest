import {
  GET_ALL_USERS,
  HIDE_USERS,
  HIDE_BUTTON,
  SHOW_USERS,
  SHOW_BUTTON
} from '../actions/actionTypes'

const initialState = {
  users: [],
  isShowUsers: true,
  isShowButton: true
}

export function getUsersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {...state, users: action.payload}
    case SHOW_USERS:
      return {...state, isShowUsers: true}
    case HIDE_USERS:
      return {...state, isShowUsers: false}
    case SHOW_BUTTON:
      return {...state, isShowButton: true}
    case HIDE_BUTTON:
      return {...state, isShowButton: false}
    default:
      return state
  }
}