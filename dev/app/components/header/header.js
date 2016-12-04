import ReactDOM from "react-dom";
import React from "react";
require("./header.scss");

class Header extends React.Component{
  render(){
    return(
      <div className = "header">
        <p>This is the headers</p>
      </div>
    );
  }
}

export default Header;
