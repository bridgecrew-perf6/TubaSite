import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import HomePage from  "./homepage";
import BaScompanyPage from  "./BaScompanyPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../../stylesheet.css"
class Dashboard extends Component {
  constructor() {
    super();

  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  openNav() {
    console.log("HERE");
    document.getElementById("mySidebar").style.width = "250px";
   
  }
  
  closeNav() {
    console.log("Not quite");
    document.getElementById("mySidebar").style.width = "0";
  }
render() {
    const { user } = this.props.auth;
return (
  //<div className="container" style={{justifyContent:"center"}}>
      <div>
            <Router>
             <div class= "main">
             <Route exact path="/BaScompanyPage" component={BaScompanyPage} />
            <Route exact path="/dashboard" component={HomePage} />
            </div> 
            <button class="openbtn" onClick={this.openNav}>☰</button>  
            <div id="mySidebar" className="sidebar">
            <a class="closebtn" style={{padding: 10}} onClick={this.closeNav} ><p style={{color: "white"}}>x</p></a>
            
            <br></br><br></br><br></br><br></br>
            <a href="/dashboard">HomePage</a>
            <a href="#">Your Profile</a>
            <a href="#"onClick={this.onLogoutClick}>Logout</a>
            </div>
            </Router>
      </div>
      //</div>
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