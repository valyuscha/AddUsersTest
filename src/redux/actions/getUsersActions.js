import axios from 'axios/index'
import {
  GET_ALL_USERS,
  HIDE_BUTTON,
  HIDE_USERS,
  SHOW_BUTTON,
  SHOW_USERS
} from './actionTypes'

const _apiBase = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count='

let size = 0

export function getAllUsers(isNewUser) {
  return async dispatch => {
    if (isNewUser) {
      size = 6
    } else {
      size += 6
    }

    dispatch(hideUsers())
    const res = await axios(`${_apiBase}${size}`)
    const users = await res.data.users
    if (size > users.length) {
      dispatch(hideButton())
    }
    dispatch({type: GET_ALL_USERS, payload: users, size})
    dispatch(showUsers())
  }
}

function showUsers() {
  return {
    type: SHOW_USERS
  }
}

function hideUsers() {
  return {
    type: HIDE_USERS
  }
}

export function showButton() {
  return {
    type: SHOW_BUTTON
  }
}

export function hideButton() {
  return {
    type: HIDE_BUTTON
  }
}