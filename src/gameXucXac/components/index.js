import React, { Component } from "react";
import "./index.css";
import InfoGame from "./InfoGame";
import XucXac from "./XucXac";

export default class Home extends Component {
  render() {
    return (
      <div className="game">
        <div className="container">
          <div className="title-name text-center mt-5 display-4">
            GAME ĐỔ XÚC XẮC
          </div>
          <div className="row text-center">
            <div className="col-4">
              <button className="btnGame">TÀI</button>
            </div>
            <div className="col-4">
              <XucXac />
            </div>
            <div className="col-4">
              <button className="btnGame">XỈU</button>
            </div>
          </div>
          <div className="text-center">
            <InfoGame />

            <button className="btn btn-success mt-3 p-2">Play game</button>
          </div>
        </div>
      </div>
    );
  }
}


