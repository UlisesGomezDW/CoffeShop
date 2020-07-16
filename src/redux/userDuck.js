import {loginWithGoogle, logOutwithGoogle} from './../firebase'

let initialData = {
  loggedIn: false,
  fetching: false
}
let LOGIN = "LOGIN"
let LOGIN_SUCCESS = "LOGIN_SUCCESS"
let LOGIN_ERROR = "LOGIN_ERROR"
let SIGN_OUT = "SIGN_OUT"

export default function reducer(state = initialData, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, fetching: true }
    case SIGN_OUT:
      return { ...initialData }
    case LOGIN_SUCCESS:
      return { ...state, fetching: false, ...action.payload, loggedIn: true }
    case LOGIN_ERROR:
      return { ...state, fetching: false, error: action.payload }
    default:
      return state
  }
}

//Auxiliar function's
function saveStorage(storage) {
  localStorage.storage = JSON.stringify(storage)
}

// Resolve
export let restoreLoginAcction = () => dispatch => {
  let storage = localStorage.getItem("storage")
  storage = JSON.parse(storage)
  if (storage && storage.user) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: storage.user
    })
  }
}
//LogOuT
export let logOut = () => dispatch => {
  logOutwithGoogle()
  dispatch({
    type: SIGN_OUT
  })
  localStorage.removeItem("storage")
}

//Action
export let doGoogleLoginAction = () => (dispatch, getState) => {
  dispatch({
    type: LOGIN
  })
  return loginWithGoogle()
    .then(user => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }
      })
      saveStorage(getState())
    })
    .catch(e => {
      console.log(e.message)
      dispatch({
        type: LOGIN_ERROR,
        payload: e.message
      })
    })
}
