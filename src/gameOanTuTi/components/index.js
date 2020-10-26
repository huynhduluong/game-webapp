import React, { Component } from "react";
import IconHome from "../../HomePage/IconHome";
import "./assets/index.css";
import Computer from "./Computer";
import Player from "./Player";
import ResultGame from "./ResultGame";

export default class GameOanTuTi extends Component {
  render() {
    return (
      <div className="game__OanTuTi text-center">
          <div className="text-center mt-3 display-4 title_ott" style={{color: "#b786ce"}}>GAME OẲN TÙ TÌ AVENGER</div>
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
        <IconHome />
      </div>
    );
  }
}
