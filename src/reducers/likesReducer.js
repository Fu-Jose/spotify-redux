import { initialState } from '../store'

const likedReducer = (state = initialState.library, action) => {
  switch (action.type) {
    case 'ADD_SONG_TO_LIKED':
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      }
    case 'REMOVE_SONG_FROM_LIKED':
      return {
        ...state,
        favourites: [...state.favourites.slice(0, action.payload), ...state.favourites.slice(action.payload + 1)],
      }
    default:
      return state
  }
}

export default likedReducer