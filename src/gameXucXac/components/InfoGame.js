import React, { Component } from "react";
import { connect } from "react-redux";

class InfoGame extends Component {
  render() {
    const { countGame, countWin, clientChoose } = this.props;
    return (
      <div>
        <div className="display-4 ">
          BẠN CHỌN:{" "}
          <span className="text-danger">{clientChoose ? "tài" : "xỉu"}</span>
        </div>
        <div className="display-4 ">
          BÀN THẮNG: <span className="text-success">{countWin}</span>
        </div>
        <div className="display-4 ">
          TỔNG SỐ BÀN CHƠI: <span className="text-primary">{countGame}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countWin: state.xucXacReducer.countWin,
    countGame: state.xucXacReducer.countGame,
    clientChoose: state.xucXacReducer.clientChoose,
  };
};

export default connect(mapStateToProps, null)(InfoGame);
