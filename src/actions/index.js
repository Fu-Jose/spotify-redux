// these are ACTION CREATORS
// they are just arrow functions that return actions (JS objects)

// redux-thunk is capable of ENRICHING your actions creators
// it will allow you to create ACTION CREATORS that not only return objects
// now they can return FUNCTIONS
// and the function that you will return out of an action creator
// will receive from redux TWO PARAMETERS: dispatch and getState

export const addToLikedSongs = (song) => ({
  type: "ADD_SONG_TO_LIKED", // mandatory property
  payload: song, // not mandatory property, for additional information
});

export const addToLikedSongsActionWithThunk = (song) => {
  return (dispatch, getState) => {
    // put here your logic!!
    console.log("I'm dispatching this out of a function!", getState());
    // fetches, api calls, etc.
    if (song) {
      dispatch({
        type: "ADD_SONG_TO_LIKED", // mandatory property
        payload: song, // not mandatory property, for additional information
      });
    }
  };
};

export const removeFromLikedSongsAction = (index) => ({
  type: "REMOVE_SONG_FROM_LIKED",
  payload: index,
});

export const getSongsAction = (value) => {
  return async (dispatch, getState) => {
    if (value) {
      console.log("fetching the songs...");
      try {
        let resp = await fetch(
          "https://striveschool-api.herokuapp.com/food-bosoks"
        );
        if (resp.ok) {
          let songs = await resp.json();
          dispatch({
            type: "GET_SONGS",
            payload: songs,
          });
        } else {
          console.log("error");
          setTimeout(() => {
            dispatch({
              type: "GET_SONGS_TOGGLE_ERROR",
            });
            setTimeout(() => {
              dispatch({
                type: "GET_SONGS_TOGGLE_ERROR",
              });
            }, 5000);
          }, 1000);
        }
      } catch (error) {
        console.log(error);
        setTimeout(() => {
          dispatch({
            type: "GET_SONGS_TOGGLE_ERROR",
          });
        }, 1000);
      }
    }
  };
};

export const playSong = (track) => ({
  type: "SONG_IS_PLAYING",
  payload: track,
});
