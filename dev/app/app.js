import { render } from "react-dom"
import React from "react";
import Header from "./components/header/header.js"

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
      </div>
    );
  }
}

export default App;
