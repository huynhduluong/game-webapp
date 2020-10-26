import React, { Component } from "react";
import { connect } from "react-redux";
import { actChooseItem } from "../modules/constant";

class Player extends Component {
  renderChoose = () => {
    const { chooseArr, handleChooseItem } = this.props;
    return chooseArr.map((item, index) => {
      let border = {};
      if (item.datCuoc) {
        border = { border: "3px solid orange" };
      }
      return (
        <div className="col-4" key={index}>
          <button
            className="btnItem"
            style={border}
            onClick={() => {
              handleChooseItem(item.ma);
            }}
          >
            <img src={item.img} alt={item.img} className="img-fluid iconChoose" />
          </button>
        </div>
      );
    });
  };

  render() {
    const { chooseArr } = this.props;

    return (
      <div className="col-4">
        <div className="playerGame">
          <div className="theThink">
            <img
              src={chooseArr.find((item) => {
                return item.datCuoc === true;
              }).img}
              alt="./img/rock.png"
              className="img-fluid iconThink"
            />
          </div>
          <div className="speech-bubble"></div>
          <img src="./img/ironman.png" alt="ironman" className="img-fluid icon" />
          <div className="row">{this.renderChoose()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chooseArr: state.oanTuTiReducer.chooseArr,
    playerChoose: state.oanTuTiReducer.playerChoose,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChooseItem: (choose) => {
      dispatch(actChooseItem(choose));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
