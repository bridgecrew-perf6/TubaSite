import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import Navbar from "./components/layout/Navbar";
import Bottombar from "./components/layout/Bottombar";
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
import NewLanding from "./components/screens/NewLanding";
import aboutLogo from "./components/Images/Logos/about.svg";
import rankLogo from "./components/Images/Logos/rank.svg";
import homeLogo from "./components/Images/Logos/home.svg";
import logoutLogo from "./components/Images/Logos/logout.svg";
import ProductPage from  "./components/screens/ProductPage";
import AboutPage from "./components/screens/AboutPage";
import RankingPage from "./components/screens/RankingPage";
import HomePage from  "./components/screens/homepage";

import "./stylesheet.css";
import history from "./history";

class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {height: props.height};

  }
  

  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  openNav() {
    console.log("HERE");
    document.getElementById("mySidebar").style.width = "13%";
   
  }
  
  closeNav() {
    console.log("Not quite");
    document.getElementById("mySidebar").style.width = "0";
  }
  


  render() {
    return (
        <div>
        <Router history={history}>
          <div   >

            { this.props.auth.isAuthenticated?
            <div style={{alignContent:"center",alignItems:"center"}}>
            <button className="openbtn" onClick={this.openNav}>☰</button> 
            <Sidebar>
            
            <div id="mySidebar" className="sidebar">
            <br></br>
            <a href="/dashboard">
            <div><img  src={homeLogo} className="NavDescriptionLogo"/></div>
            <div>HomePage</div></a>
            <a href="/ranking">
            <div><img  src={rankLogo} className="NavDescriptionLogo"/></div>
            <div>Ranking</div></a>
            <a href="/about" >
            <div><img  src={aboutLogo} className="NavDescriptionLogo" style={{verticalAlign: "middle"}}/></div>
            <div>About</div></a>
            <a href="#"onClick={this.onLogoutClick}>
            <div><img  src={logoutLogo} className="NavDescriptionLogo"/></div>
            <div>Logout</div></a>
            </div>
            </Sidebar></div>: null }
            



            <Navbar />
            <div style={{backgroundColor:"rgb(36, 34, 34)"}}  >
            <Route exact path="/" component={NewLanding} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={AboutPage} />
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
            <PrivateRoute exact path="/product/:type/:name" component={ProductPage} />
            <PrivateRoute exact path="/ranking" component={RankingPage} />
            </Switch>
            </div>
            { this.props.auth.isAuthenticated? <Bottombar />:null}
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



  //render={({ match }) => <ProductPage key={match.params.product || 'empty'} />}
  /*<PrivateRoute exact path="/product/:type/:name" 
            render={() =>{ return( <DenisWickCompanyPage/>)}}
            <Route  path="/product/:type/:name"  render={( match ) => {return (<ProductPage {...match} />)}} />
            />*/