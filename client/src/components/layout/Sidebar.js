import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import "../../stylesheet.css";



class Navbar extends Component {
    constructor(props) {
      super(props);
      console.log(props);
    }
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
      openNav() {
        console.log("HERE");
        document.getElementById("mySidebar").style.width = "15%";
       
      }
      
      closeNav() {
        console.log("Not quite");
        document.getElementById("mySidebar").style.width = "0";
      }
    
    render() {
       return (
           <div>
        <button class="openbtn" onClick={this.openNav}>☰</button>  
        <div id="mySidebar" className="sidebar">
        <a class="closebtn" style={{padding: 10}} onClick={this.closeNav} ><p style={{color: "white"}}>x</p></a>
        <br></br><br></br><br></br><br></br>
        <a href="/dashboard">HomePage</a>
        <a href="#">Your Profile</a>
        <a href="#"onClick={this.onLogoutClick}>Logout</a>
        </div>
        </div>
        
      );
    }
  }
  Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);