import { initialState } from '../store'

const songsReducer = (state = initialState.songs, action) => {
  switch (action.type) {
    case 'GET_SONGS':
      return {
        ...state,
        list: action.payload,
        error: false,
      }
    case 'GET_SONGS_TOGGLE_ERROR':
      return {
        ...state,
        error: !state.error,
      }
    default:
      return state
  }
}

export default songsReducer