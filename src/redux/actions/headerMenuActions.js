import axios from 'axios'
import {
  GET_HEADER_USER,
  MENU_CLOSE,
  SELECTED_LANGUAGE,
  MENU_OPEN,
  OPEN_LANGUAGE_LIST,
  CLOSE_LANGUAGE_LIST
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

export function getSelectedLanguage(name) {
  return {
    type: SELECTED_LANGUAGE,
    payload: name
  }
}

export function showLanguagesList() {
  return {
    type: OPEN_LANGUAGE_LIST
  }
}

export function closeLanguagesList() {
  return {
    type: CLOSE_LANGUAGE_LIST
  }
}