import {
  GET_HEADER_USER,
  MENU_CLOSE,
  MENU_OPEN,
  SELECTED_LANGUAGE,
  OPEN_LANGUAGE_LIST,
  CLOSE_LANGUAGE_LIST
} from '../actions/actionTypes'

const initialState = {
  user: {},
  menuOpen: false,
  selectedLanguage: 'EN',
  isSelected: false
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
      return {...state, selectedLanguage: action.payload, isSelected: false}
    case OPEN_LANGUAGE_LIST:
      return {...state, isSelected: !state.isSelected}
    case CLOSE_LANGUAGE_LIST:
      return {...state, isSelected: false}
    default:
      return state
  }
}