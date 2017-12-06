import React from "react";
import "./Tiles.css";

const Tiles = props => {

  return (

      <img className="img" onClick={()=>props.onClick(props.id)} alt="img" src={props.src} id={props.id}/>
  )
};

export default Tiles;