import { combineReducers, createStore, applyMiddleware } from "redux";
import likesReducer from "redux/reducers/likesReducer";
import queueReducer from "redux/reducers/queueReducer";
import songReducer from "redux/reducers/songReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  likedSongs: {
    favourites: [],
  },
  songQueue: {
    queue: [],
  },
  playingSong: {
    song: {},
  },
};

const bigReducer = combineReducers({
  likedSongs: likesReducer,
  songQueue: queueReducer,
  playingSong: songReducer,
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
