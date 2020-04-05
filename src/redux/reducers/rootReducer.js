import {combineReducers} from 'redux'
import {headerMenuReducer} from './headerMenuReducer'
import {getUsersReducer} from './getUsersReducer'
import {registerReducer} from './registerReducer'

export const rootReducer = combineReducers({
  headerMenu: headerMenuReducer,
  getUsers: getUsersReducer,
  registerReducer: registerReducer
})