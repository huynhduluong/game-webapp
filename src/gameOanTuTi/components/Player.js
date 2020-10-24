import React, { Component } from "react";

export default class Player extends Component {
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
          <img src="./img/ironman.png" alt="ironman" className="icon" />
          <div className="row">
            <div className="col-4">
              <button className="btnItem">
                <img
                  src="./img/rock.png"
                  alt="./img/rock.png"
                  className="iconChoose"
                />
              </button>
            </div>
            <div className="col-4">
              <button className="btnItem">
                <img
                  src="./img/paper.png"
                  alt="./img/paper.png"
                  className="iconChoose"
                />
              </button>
            </div>
            <div className="col-4">
              <button className="btnItem">
                <img
                  src="./img/scissors.png"
                  alt="./img/scissors.png"
                  className="iconChoose"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
