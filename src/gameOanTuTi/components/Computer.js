import React, { Component } from "react";

export default class Computer extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="playerGame">
          <div className="theThink">
            <img
              src="./img/rock.png"
              alt="./img/rock.png"
              className="iconThink"
            />
          </div>
          <div className="speech-bubble"></div>
          <img src="./img/thanos.png" alt="thanos" className="icon" />
        </div>
      </div>
    );
  }
}
