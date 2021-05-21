import { initialState } from "../store/index.js";

const playingSongReducer = (state = initialState.playingSong, action) => {
  switch (action.type) {
    case 'SONG_IS_PLAYING':
      return {
        ...state,
        song: [...state.song, action.payload],
      }
    case 'SONG_IS_NOT_PLAYING':
      return {
        ...state,
        song: [...state.song.slice(0, action.payload), ...state.song.slice(action.payload + 1)],
      }
    default:
      return state
  }
};

export default playingSongReducer;
