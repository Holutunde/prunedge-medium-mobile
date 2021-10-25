import { AsyncStorage } from 'react-native'
import { SAVE_TOKEN, SAVE_USER } from '../types'

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_TOKEN:
      AsyncStorage.setItem('token', JSON.stringify(payload))

      return {
        ...state,
        token: payload,
        isLoggedIn: true,
      }
    case SAVE_USER:
      AsyncStorage.setItem('user', JSON.stringify(payload))

      return {
        ...state,
        user: payload,
      }
    default:
      return state
  }
}

export default authReducer
