import React from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  song: state.playingSong.song,
});
const Player = () => (
  <div className="container-fluid fixed-bottom bg-container pt-1">
    <Row>
      <div className="col-lg-10 offset-lg-2 d-flex">
        <div className="col-2 d-flex">
          <img
            className="align-self-center"
            src="https://image-placeholder.com/images/actual-size/57x57.png"
            style={{ height: "58px" }}
          ></img>
          <div className="d-flex flex-column">
            <span className="text-nowrap text-white ml-4">
              {state.playingSong.song.name}
            </span>
            <span className="text-nowrap text-white ml-4">SONG ARTIST</span>
            <span className="text-nowrap text-white ml-4">SONG ALBUM</span>
          </div>
        </div>
        <div className="col">
          <Row>
            <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <Row>
                <a href="/">
                  <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
                </a>
                <a href="/">
                  <img src="/playerbuttons/Previous.png" alt="shuffle" />
                </a>
                <a href="/">
                  <img src="/playerbuttons/Play.png" alt="shuffle" />
                </a>
                <a href="/">
                  <img src="/playerbuttons/Next.png" alt="shuffle" />
                </a>
                <a href="/">
                  <img src="/playerbuttons/Repeat.png" alt="shuffle" />
                </a>
              </Row>
            </div>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div id="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </Row>
  </div>
);

export default connect(mapStateToProps)(Player);
