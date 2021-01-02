import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../stylesheet.css";
import BaSLogo from'../Images/Company/tuba/bas.png';
import MiraphoneLogo from'../Images/Company/tuba/miraphone.png';
import MWLogo from'../Images/Company/tuba/mw.png';
import DWLogo from'../Images/Company/mouthpeice/dw.png';
import BachLogo from'../Images/Company/mouthpeice/bach.png';
import PTLogo from'../Images/Company/mouthpeice/pt.jpg';


class HomePage extends Component {
    constructor() {
        super();
      }
    goCompany(name){
        this.props.history.push({pathname: "BaScompanyPage", state: {companyName: name} });
    }
  render() {
      const { user } = this.props.auth;
      
  return (
  
 
      <div >
        <div  style={{textAlign: "center"}}>
        <h3 >
            <b>Welcome Back!</b> {user.name.split(" ")[0]}
        </h3>
        <br></br>
        <div class="topTableSection">
        <h4 >Tuba</h4>
        <hr></hr>
        <br></br>
        <tr></tr>
        <table>
        <tr>
          <td><img src={BaSLogo} onClick={() => this.goCompany("BaS")} class="logoImage"/></td>
          <td><img src={MiraphoneLogo} onClick={() => this.goCompany("Miraphone")} class="logoImage"/></td>
          <td><img src={MWLogo} onClick={() => this.goCompany("Meinl Weston")} style={{width: "40%"}}/></td>
        </tr>
        
        </table>
        </div>
        
        <div class="tableSection">
        <h4 >Mouthpeice</h4>
        <hr></hr>
        <br></br>
        <tr></tr>
        <table>
        <tr>
          <td><img src={DWLogo} onClick={() => this.goCompany("BaS")} class="logoImage"/></td>
          <td><img src={BachLogo} onClick={() => this.goCompany("Miraphone")} style={{width: "40%"}}/></td>
          <td><img src={PTLogo} onClick={() => this.goCompany("Meinl Weston")} style={{width: "40%"}}/></td>
        </tr>
        
        </table>
        </div>

        </div>
        </div>
   
    );
  }
}
HomePage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(HomePage);