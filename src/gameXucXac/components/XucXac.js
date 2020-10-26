import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderDice = () => {
    const { dice } = this.props;
    return dice.map((item, index) => {
      let linkImg = "./img/" + item + ".png";
      return <img src={linkImg} className="xucXac" alt={item} key={index} />;
    });
  };
  render() {
    return (
      <div className="text-center">
        {this.renderDice()}
        <h3 style={{ fontSize: "20px" }}>
          Kết quả:
          <span className="text-secondary" >
            {" "}
            {this.props.resultGame ? "tài" : "xỉu"}{" "}
          </span>
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dice: state.xucXacReducer.dice,
    resultGame: state.xucXacReducer.resultGame,
  };
};

export default connect(mapStateToProps, null)(XucXac);
