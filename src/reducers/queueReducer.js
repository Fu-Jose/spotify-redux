import { initialState } from "../store";

const queueReducer = (state = initialState.songQueue, action) => {
  switch (action.type) {
    case 'ADD_SONG_TO_QUEUE':
      return {
        ...state,
        queue: [...state.queue, action.payload],
      }
    case 'REMOVE_SONG_FROM_QUEUE':
      return {
        ...state,
        queue: [...state.queue.slice(0, action.payload), ...state.queue.slice(action.payload + 1)],
      }
    default:
      return state
  }
};

export default queueReducer;
