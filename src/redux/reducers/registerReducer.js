import {
  ENTER_FIELDS_MESSAGE,
  ERROR_MESSAGE,
  GET_SELECT_VALUE,
  MODAL_CLOSE,
  MODAL_OPEN,
  SUCCESS_MESSAGE
} from '../actions/actionTypes'

const initialState = {
  isModalOpen: false,
  successMessage: '',
  errorMessage: '',
  enterFieldsMessage: '',
  selectValue: ''
}

export function registerReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_MESSAGE:
      return {...state, successMessage: action.payload, errorMessage: '', enterFieldsMessage: ''}
    case ERROR_MESSAGE:
      return {...state, errorMessage: action.payload, successMessage: '', enterFieldsMessage: ''}
    case ENTER_FIELDS_MESSAGE:
      return {...state, enterFieldsMessage: action.payload, successMessage: '', errorMessage: ''}
    case MODAL_OPEN:
      return {...state, isModalOpen: true}
    case MODAL_CLOSE:
      return {...state, isModalOpen: false}
    case GET_SELECT_VALUE:
      return {...state, selectValue: action.payload}
    default: return state
  }
}