import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "../../stylesheet.css"
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  openNav() {
    console.log("HERE");
    document.getElementById("mySidebar").style.width = "250px";
    
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  closeNav() {
    console.log("Not quite");
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
render() {
    const { user } = this.props.auth;
return (
  
  <div id="main">
      <div className="container valign-wrapper">
        
        <div className="row">
        
          <div className="col s12 center-align">
          <div class="upperContent">
            <h3 style={{  textAlign: "center"}}>
              <b>Welcome Back!</b> {user.name.split(" ")[0]}
            </h3>




            </div>

            <button class="openbtn" onClick={this.openNav}>☰</button>  
            <div id="mySidebar" className="sidebar">
            <a href="#"class="closebtn" style={{padding: 10}} onClick={this.closeNav} ><p style={{color: "white"}}>x</p></a>
            <br></br><br></br><br></br><br></br>
            <a href="#">About</a>
            <a href="#"onClick={this.onLogoutClick}>Logout</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);