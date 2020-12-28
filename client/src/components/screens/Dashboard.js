import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import HomePage from  "./homepage";
import CompanyPage from  "./Tuba/companyPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
  <div className="container" style={{justifyContent:"center"}}>
      <div>
            <Router>
             <div style ={{position:"fixed"}}>
            <Route exact path="/dashboard" component={HomePage} />
            <Route exact path="/companyPage" component={CompanyPage} />
            </div> 
            <button class="openbtn" onClick={this.openNav}>☰</button>  
            <div id="mySidebar" className="sidebar">
            <a class="closebtn" style={{padding: 10}} onClick={this.closeNav} ><p style={{color: "white"}}>x</p></a>
            <br></br><br></br><br></br><br></br>
            <a href="#">About</a>
            <a href="#"onClick={this.onLogoutClick}>Logout</a>
            </div>
            </Router>
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