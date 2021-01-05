//
//
//
// This file is not used will delte later
//
//
//
//
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import HomePage from  "./homepage";
import BaScompanyPage from  "./CompanyPages/BaScompanyPage";
import MiraphoneCompanyPage from  "./CompanyPages/MiraphoneCompanyPage";
import YamahaCompanyPage from  "./CompanyPages/YamahaCompanyPage";
import MeinlWestonCompanyPage from  "./CompanyPages/MeinlWestonCompanyPage";
import BessonCompanyPage from  "./CompanyPages/BessonCompanyPage";


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
    document.getElementById("mySidebar").style.width = "15%";
   
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
             <div class= "main" style={{marginBottom:"5%"}}>
            <Route exact path="/BaScompanyPage" component={BaScompanyPage} />
            <Route exact path="/MiraphonePage" component={MiraphoneCompanyPage} />
            <Route exact path="/YamahaPage" component={YamahaCompanyPage} />
            <Route exact path="/MeinlWestonPage" component={MeinlWestonCompanyPage} />
            <Route exact path="/BessonPage" component={BessonCompanyPage} />
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