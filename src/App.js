import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import GameXucXac from "./gameXucXac/components";
import GameOanTuTi from "./gameOanTuTi/components";
import HomePage from "./HomePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/game-webapp/" component={HomePage} />
        <Route path="/game-webapp/game-xuc-xac" component={GameXucXac} />
        <Route path="/game-webapp/game-oan-tu-ti" component={GameOanTuTi} />
      </div>
    </BrowserRouter>
  );
}

export default App;
