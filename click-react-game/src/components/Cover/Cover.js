import React from "react";
import "./Cover.css";

const Cover = props => {

  return (
  	<div className="cover">{props.children}</div>
  )
};

export default Cover;