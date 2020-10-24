import React, { Component } from "react";
import { connect } from "react-redux";
import { actPlayGame, actRandom } from "../modules/constant";

class ResultGame extends Component {
  render() {
    const { countGame, countWin, resultText, handlePlayGame } = this.props;
    return (
      <div className="col-4">
        <div className="result display-4 mt-5">{resultText}</div>
        <div className="text-success display-4">
          Số bàn thắng: <span className="text-warning">{countWin}</span>
        </div>
        <div className="text-success display-4">
          Số bàn chơi: <span className="text-warning">{countGame}</span>
        </div>
        <button
          className="btn btn-success mt-5"
          onClick={() => {
            handlePlayGame();
          }}
        >
          Play Game
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countWin: state.oanTuTiReducer.countWin,
    countGame: state.oanTuTiReducer.countGame,
    resultText: state.oanTuTiReducer.resultText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlayGame: () => {
      let count = 0;
      let randomInterval = setInterval(() => {
        dispatch(actRandom());
        count++;
        if (count > 20) {
          clearInterval(randomInterval);
          dispatch(actPlayGame());
        }
      }, 100);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultGame);
