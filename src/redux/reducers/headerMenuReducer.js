import {
  GET_HEADER_USER,
  MENU_CLOSE,
  MENU_OPEN,
  SELECTED_LANGUAGE
} from '../actions/actionTypes'

const initialState = {
  user: {},
  menuOpen: false,
  selectedLanguage: ''
}

export function headerMenuReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HEADER_USER:
      return {...state, user: action.payload}
    case MENU_OPEN:
      return {...state, menuOpen: true}
    case MENU_CLOSE:
      return {...state, menuOpen: false}
    case SELECTED_LANGUAGE:
      return {...state, selectedLanguage: action.payload}
    default:
      return state
  }
}