import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../stylesheet.css"
class NotLoggedInBottombar extends Component {
  render() {
    return (
      <div className="notLoggedInBottombar" >
        <br></br>
          <p> @copyright Toto2020</p>
          <br></br>
        
      </div>
    );
  }
}
export default NotLoggedInBottombar;