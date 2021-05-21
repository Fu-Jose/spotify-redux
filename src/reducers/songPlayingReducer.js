import { initialState } from "../store/index.js";

const playingSongReducer = (state = initialState.playingSong, action) => {
  switch (action.type) {
    case "SONG_IS_PLAYING":
      return {
        ...state,
        song: action.payload,
      };

    default:
      return state;
  }
};

export default playingSongReducer;
