import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../stylesheet.css"
import logo from "../Images/Logos/tuba.png"
class BottomBar extends Component {
  render() {
    return (
      <div className="bottombar" >
         <img src={logo} alt="Logo" style={{width:"60px",marginTop:"5px"}} />
        <hr style={{border:"1px solid black",width:"10%",marginTop:"5px",marginBottom:"3px"}}></hr>
          <p style={{color:"black", fontSize: "12px",fontWeight: "bold",marginTop:"3px"}}> @Copyright TOTO2021</p>
        
      </div>
    );
  }
}
export default BottomBar;