import React from "react";
import LikeButton from "./LikeButton";
import { AiOutlineHeart } from "react-icons/ai";
<<<<<<< HEAD
import { addToLikedSongsActionWithThunk } from "../actions/index";
import { connect } from "react-redux";
import { playSong } from "../actions/index";

const mapStateToProps = (state) => ({
  songsToPlay: state.songQueue.songsToPlay,
});
=======
import { addToLikedSongsAction, addToLikedSongsActionWithThunk } from "../actions/index.js";
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToLibrary: (favourites) =>
    dispatch(addToLikedSongsActionWithThunk(favourites)),
});

class Song extends React.Component {
  state = {
    favourites: null,
  };
}
const Song = ({ track }) => (
  <div className="py-3 trackHover">
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <AiOutlineHeart
      className="heart-icon"
      onClickHandler={() => addToLikedSongsActionWithThunk(track)}
    ></AiOutlineHeart>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>
);
>>>>>>> 0cf72357c4b15ff1016f9bca183a6aa38a7c62e4

const Song = ({ track, playSong }) => {
  const handlePlaySong = (track) => {
    playSong(track);
  };
  return (
    <div className="py-3 trackHover" onClick={() => handlePlaySong(track)}>
      <span className="card-title trackHover px-3" style={{ color: "white" }}>
        {track.title}
      </span>
      <AiOutlineHeart
        className="heart-icon"
        onClickHandler={() => addToLikedSongsActionWithThunk(track)}
      ></AiOutlineHeart>
      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
    </div>
  );
};
export default connect(mapStateToProps, { playSong })(Song);
