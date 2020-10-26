import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    const { computerChoose } = this.props;
    return (
      <div className="col-4">
        <div className="playerGame">
          <div className="theThink">
            <img
              src={computerChoose.img}
              alt={computerChoose.img}
              className="img-fluid iconThink"
            />
          </div>
          <div className="speech-bubble"></div>
          <img src="./img/thanos.png" alt="thanos" className="img-fluid icon" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computerChoose: state.oanTuTiReducer.computerChoose,
  };
};

export default connect(mapStateToProps, null)(Computer);
