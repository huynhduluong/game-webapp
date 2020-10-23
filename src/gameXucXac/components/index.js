import React, { Component } from "react";
import { connect } from "react-redux";
import { actChooseGame, actPlayGame } from "../modules/actions";
import "./index.css";
import InfoGame from "./InfoGame";
import XucXac from "./XucXac";

class Home extends Component {
  render() {
    const { handleChoose, handlePlayGame } = this.props;
    return (
      <div className="game">
          <div className="title-name text-center mt-5 display-4">
            GAME ĐỔ XÚC XẮC
          </div>
          <div className="row text-center">
            <div className="col-4">
              <button
                className="btnGame"
                onClick={() => {
                  handleChoose(true);
                }}
              >
                TÀI
              </button>
            </div>
            <div className="col-4">
              <XucXac />
            </div>
            <div className="col-4">
              <button
                className="btnGame"
                onClick={() => {
                  handleChoose(false);
                }}
              >
                XỈU
              </button>
            </div>
          </div>
          <div className="text-center">
            <InfoGame />

            <button
              className="btn btn-success mt-3 p-2"
              onClick={() => {
                handlePlayGame();
              }}
            >
              Play game
            </button>
          </div>
        </div>
    );
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    handleChoose: (choose) => {
      dispatch(actChooseGame(choose));
    },
    handlePlayGame: () => {
      dispatch(actPlayGame());
    },
  };
};

export default connect(null, mapDispatchToProp)(Home);
