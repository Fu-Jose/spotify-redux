import { initialState } from "../store";

const playingSongReducer = (state = initialState.playingSong, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default playingSongReducer;
