import { Component } from "react";

class HomeComponent extends Component {

  
  render() {
    return (
      <div className="home">
        <div>
          <h1 className="Quiz">Quiz App</h1>
        </div>

        <div>
          <button className="play" >Play</button>
        </div>
      </div>
    );
  }
}

export default HomeComponent