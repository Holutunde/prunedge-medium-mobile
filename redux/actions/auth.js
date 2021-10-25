import { SAVE_TOKEN, SAVE_USER } from '../types'

export const saveUser = (token, user) => (dispatch) => {
  dispatch({
    type: SAVE_TOKEN,
    payload: token,
  })

  dispatch({
    type: SAVE_USER,
    payload: user,
  })

  dispatch(getUserData(true))
}
