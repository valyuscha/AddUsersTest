import axios from 'axios'
import {
  GET_HEADER_USER,
  MENU_CLOSE,
  MENU_OPEN,
  SELECTED_LANGUAGE
} from './actionTypes'

export function getHeaderUser() {
  return async dispatch => {
    const res = await axios(`https://frontend-test-assignment-api.abz.agency/api/v1/users/1`)
    const user = await res.data.user
    dispatch({type: GET_HEADER_USER, payload: user})
  }
}

export function menuOpen() {
  return {
    type: MENU_OPEN
  }
}

export function menuClose() {
  return {
    type: MENU_CLOSE
  }
}

export function getSelectedLanguage(event) {
  const selected = event.target.value
  return {
    type: SELECTED_LANGUAGE,
    payload: selected
  }
}