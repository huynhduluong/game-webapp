import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderDice = () => {
    const { dice } = this.props;
    return dice.map((item) => {
      let linkImg = "./img/" + item + ".png";
      return <img src={linkImg} className="xucXac" alt={item} />;
    });
  };
  render() {
    return <div>{this.renderDice()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    dice: state.xucXacReducer.dice,
  };
};

export default connect(mapStateToProps, null)(XucXac);
