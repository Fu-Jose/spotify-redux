// these are ACTION CREATORS
// they are just arrow functions that return actions (JS objects)

// redux-thunk is capable of ENRICHING your actions creators
// it will allow you to create ACTION CREATORS that not only return objects
// now they can return FUNCTIONS
// and the function that you will return out of an action creator
// will receive from redux TWO PARAMETERS: dispatch and getState

export const addToLikedSongs = (track) => ({
    type: 'ADD_SONG_TO_LIKED', // mandatory property
    payload: track, // not mandatory property, for additional information
  })
  
  export const addToLikedSongsActionWithThunk = (track) => {
    return (dispatch, getState) => {
      // put here your logic!!
      console.log("I'm dispatching this out of a function!", getState())
      // fetches, api calls, etc.
      if (true) {
        dispatch({
          type: 'ADD_SONG_TO_LIKED', // mandatory property
          payload: track, // not mandatory property, for additional information
        })
      }
    }
  }