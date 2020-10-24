import React, { Component } from "react";
import "./assets/index.css";
import Computer from "./Computer";
import Player from "./Player";
import ResultGame from "./ResultGame";

export default class GameOanTuTi extends Component {
  render() {
    return (
      <div className="game">
        game oẳn tù tì
        <div className="row text-center text-white">
          <Player />
          <ResultGame />
          <Computer />
        </div>
        <div>
          <img
            src="./img/bgOanTuTi.jpg"
            alt="./img/bgOanTuTi.jpg"
            className="bgAvenger"
          />
        </div>
      </div>
    );
  }
}
