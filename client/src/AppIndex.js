import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import Navbar from "./components/layout/Navbar";
import Bottombar from "./components/layout/Bottombar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import BaSCompanyPage from  "./components/screens/CompanyPages/BaScompanyPage";
import MiraphoneCompanyPage from  "./components/screens/CompanyPages/MiraphoneCompanyPage";
import YamahaCompanyPage from  "./components/screens/CompanyPages/YamahaCompanyPage";
import MeinlWestonCompanyPage from  "./components/screens/CompanyPages/MeinlWestonCompanyPage";
import BessonCompanyPage from  "./components/screens/CompanyPages/BessonCompanyPage";
import PerantucciCompanyPage from  "./components/screens/CompanyPages/PTCompanyPage";
import BachCompanyPage from  "./components/screens/CompanyPages/BachCompanyPage";
import DenisWickCompanyPage from  "./components/screens/CompanyPages/DenisWickCompanyPage";
import Sidebar from "./components/layout/Sidebar";



import HomePage from  "./components/screens/homepage";
import "./stylesheet.css";

class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {height: props.height};

  }
  

  componentWillMount(){
    this.setState({height: window.innerHeight + 'px'});
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
        <Router>
          <div   >

            { this.props.auth.isAuthenticated?
            <div>
            <button className="openbtn" onClick={this.openNav}>☰</button> 
            <Sidebar>
            <div id="mySidebar" className="sidebar">
            <a className="closebtn" style={{padding: 10}} onClick={this.closeNav} ><p style={{color: "white"}}>x</p></a>
            <br></br><br></br><br></br><br></br>
            <a href="#">About</a>
            <a href="#">Ranking</a>
            <a href="/dashboard">Home Page</a>
            <a href="#">Company Pages</a>
            <a href="#"onClick={this.onLogoutClick}>Logout</a>
            </div>
            </Sidebar></div>: null }



            <Navbar />
            <div style={{marginBottom:"10%"}} >
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
            <PrivateRoute exact path="/dashboard" component={HomePage} />
            <PrivateRoute exact path="/BaSPage" component={BaSCompanyPage} />
            <PrivateRoute exact path="/MiraphonePage" component={MiraphoneCompanyPage} />
            <PrivateRoute exact path="/YamahaPage" component={YamahaCompanyPage} />
            <PrivateRoute exact path="/MeinlWestonPage" component={MeinlWestonCompanyPage} />
            <PrivateRoute exact path="/BessonPage" component={BessonCompanyPage} />
            <PrivateRoute exact path="/PerantucciPage" component={PerantucciCompanyPage} />
            <PrivateRoute exact path="/BachPage" component={BachCompanyPage} />
            <PrivateRoute exact path="/DenisWickPage" component={DenisWickCompanyPage} />
            </Switch>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <Bottombar />
          </div>
        
        </Router>
        </div>
    );
  }
}
AppIndex.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(AppIndex);