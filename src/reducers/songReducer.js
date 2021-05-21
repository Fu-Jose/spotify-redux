import { initialState } from "../store/index.js";

const playingSongReducer = (state = initialState.playingSong, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default playingSongReducer;
