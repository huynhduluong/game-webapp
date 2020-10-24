import React, { Component } from 'react'

export default class ResultGame extends Component {
    render() {
        return (
            <div className="col-4">
          <div className="result display-4 mt-5">I'm Iron man, I love you!!</div>
          <div className="text-success display-4">Số bàn thắng: <span className="text-warning">1</span></div>
          <div className="text-success display-4">Số bàn chơi: <span className="text-warning">1</span></div>
          <button className="btn btn-success mt-5">Play Game</button>
        </div>
        )
    }
}
