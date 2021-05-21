import React from "react";
import LikeButton from "./LikeButton";
import { AiOutlineHeart } from "react-icons/ai";
import { addToLikedSongsActionWithThunk } from "../actions/index";

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

export default Song;
