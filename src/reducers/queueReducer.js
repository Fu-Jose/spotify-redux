import { initialState } from "../store";

const queueReducer = (state = initialState.songQueue, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default queueReducer;
