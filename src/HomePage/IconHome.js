import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class IconHome extends Component {
  render() {
    return (
      <Link to="/game-webapp/">
        <div>
          <i
            className="fa fa-home"
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              fontSize: "40px",
              color: "rgb(255 111 0)",
              padding: "10px",
              lineHeight: "40px",
            }}
          />
        </div>
      </Link>
    );
  }
}
