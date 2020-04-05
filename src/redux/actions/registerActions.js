import axios from 'axios/index'
import {getAllUsers} from './getUsersActions'
import {
  ENTER_FIELDS_MESSAGE,
  ERROR_MESSAGE,
  GET_SELECT_VALUE,
  GET_TOKEN,
  MODAL_CLOSE,
  MODAL_OPEN,
  SUCCESS_MESSAGE
} from './actionTypes'

export function getToken() {
  return async dispatch => {
    const res = await axios('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    const token = res.data.token
    localStorage.setItem('token', token)
    dispatch({type: GET_TOKEN, payload: 'token'})
  }
}

export function getPositions(selectValue) {
  return async dispatch => {
    const res = await axios('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    const select = res.data.positions
    let stateSelect = selectValue

    let selectLocal = []
    select.forEach(item => {
      switch (item.name) {
        case 'Lawyer':
          return selectLocal.push({id: 1, name: 'lawyer_position'})
        case 'Content manager':
          return selectLocal.push({id: 2, name: 'content_manager_position'})
        case 'Security':
          return selectLocal.push({id: 3, name: 'security_position'})
        case 'Designer':
          return selectLocal.push({id: 4, name: 'designer_position'})
        default:
          return ''
      }
    })
    stateSelect.value.push(selectLocal)
    dispatch({type: GET_SELECT_VALUE, payload: stateSelect})
  }
}

export function sendForm(item, successMessage, errorMessage) {
  return async dispatch => {
    const token = localStorage.getItem('token')

    try {
      await axios.post('https://frontend-test-assignment-api.abz.agency/api/v1/users', item, {
        method: 'POST',
        headers: {
          'Token': token
        }
      })
      dispatch(getAllUsers(true))
      dispatch({type: SUCCESS_MESSAGE, payload: successMessage})
      dispatch({type: MODAL_OPEN})
    } catch (e) {
      dispatch({type: ERROR_MESSAGE, payload: errorMessage})
      dispatch({type: MODAL_OPEN})
    }
  }
}

export function enterFields(enterFieldsMessage) {
  return {
    type: ENTER_FIELDS_MESSAGE,
    payload: enterFieldsMessage
  }
}

export function modalOpen() {
  return {
    type: MODAL_OPEN
  }
}

export function modalClose() {
  return {
    type: MODAL_CLOSE
  }
}