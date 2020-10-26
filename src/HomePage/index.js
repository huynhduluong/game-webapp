import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="container-fluid text-center">
          <div className="title__home">Web Game</div>
          <div className="row text-center">
            <div className="col-6">
              <Link className="text-white" to="/game-xuc-xac">
                <img
                  className="choose__Game"
                  src="./img/XucXacBgHome.jpg"
                  alt="xucxac"
                />
                <br />

                <div className="btn btnChooseGame">Game Xúc Xắc</div>
              </Link>
            </div>
            <div className="col-6">
              <Link className="text-white" to="/game-oan-tu-ti">
                <img
                  className="choose__Game"
                  src="./img/OanTuTiBgHome.png"
                  alt="oantuti"
                />
                <br />
                <div className="btn btnChooseGame">Game Oẳn Tù Tì</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
