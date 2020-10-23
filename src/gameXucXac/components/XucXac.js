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
    return <div className="text-center">{this.renderDice()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    dice: state.xucXacReducer.dice,
  };
};

export default connect(mapStateToProps, null)(XucXac);
