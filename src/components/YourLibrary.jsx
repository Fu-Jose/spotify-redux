import React from "react";
import Song from "./Song";
import { FaTrash } from "react-icons/fa";
import { Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromLikedSongsAction } from "../actions";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  removeFromLikedSongs: (index) => dispatch(removeFromLikedSongsAction(index)),
});
const LibraryPage = ({ library, removeFromLikedSongsAction }) => (
  <>
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <Row className="mb-3">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <div>TRENDING</div>
          <div>PODCAST</div>
          <div>MOODS AND GENRES</div>
          <div>NEW RELEASES</div>
          <div>DISCOVER</div>
        </div>
      </Row>
      <Row>
        <div className="col-md-3 pt-5 text-center" id="img-container">
          <div className="mt-4 text-center">
            <p className="album-title">Your Library</p>
          </div>
          <div className="mt-4 text-center">
            <button id="btnPlay" className="btn btn-success" type="button">
              Play
            </button>
          </div>
        </div>

        <div className="col-md-8 p-5">
          <Row>
            <div className="col-md-10 mb-5" id="trackList">
              {library.favourites.map((song, i) => (
                <Song track={song} key={i}>
                  <Button variant="danger" onClick={() => removeFromLikedSongsAction(i)}>
                    <FaTrash />
                  </Button>
                </Song>
              ))}
            </div>
          </Row>
        </div>
      </Row>
    </div>
  </>
);

export default connect(mapStateToProps, mapDispatchToProps)(LibraryPage);
