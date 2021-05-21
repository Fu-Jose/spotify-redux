import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import likedReducer from "../reducers/likesReducer";
import queueReducer from "../reducers/queueReducer";
import playingSongReducer from "../reducers/songPlayingReducer";
import songReducer from "../reducers/songsReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  library: {
    favourites: [],
  },
  songQueue: {
    queue: [],
  },
  playingSong: {
    song: {},
  },
  songs: {
    list: [],
    error: false,
  },
};

const bigReducer = combineReducers({
  likedSongs: likedReducer,
  songQueue: queueReducer,
  playingSong: playingSongReducer,
  songs: songReducer,
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
