import React from "react";
import "./Game.css";

const Game = props => {

  return (
  	<div>
	    <div className="nav">
	    	<div id="score">Score: {props.score} | High Score: {props.highScore}</div>
	    </div>
    <div id="title-container">
    	<br />
    	<div id="title-content">
    		<h1>Click React Game</h1>
        <p>Test your memory. Match the image.</p>
    	</div>
    </div>
    </div>
  )
};
export default Game;