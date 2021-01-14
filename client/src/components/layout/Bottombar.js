import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../stylesheet.css"
import logo from "../Images/Logos/tuba.png"
class BottomBar extends Component {
  render() {
    return (
      <div className="bottombar" >
         <img src={logo} alt="Logo" style={{width:"60px"}} />
        <hr style={{border:"1px solid black",width:"10%"}}></hr>
          <p> @copyright Toto2020</p>
        
      </div>
    );
  }
}
export default BottomBar;