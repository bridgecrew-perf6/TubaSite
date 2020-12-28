import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../stylesheet.css";
import BaSLogo from'../Images/Company/bas.png';
import MiraphoneLogo from'../Images/Company/miraphone.png';
import MWLogo from'../Images/Company/mw.png';


class HomePage extends Component {
    constructor() {
        super();
      }
    goCompany(name){
        this.props.history.push({pathname: "companyPage", state: {companyName: name} });
    }
render() {
    const { user } = this.props.auth;
    
return (
  
 
    <div >
        <div class="upperContent" style={{justifyContent: "center"}}>
        <h3 >
            <b>Welcome Back!</b> {user.name.split(" ")[0]}
        </h3>
        <br></br>
        <h4>Tuba</h4>
        <hr></hr>
        <br></br>
        <tr></tr>
        <table>
        <tr>
          <td><img src={BaSLogo}/></td>
          <td><img src={MiraphoneLogo}/></td>
          <td><img src={MWLogo}/></td>
        </tr>
        <tr>
        <td><button class= "buttonCompany"onClick={() => this.goCompany("BaS")}
          type="submit"
          className="btn btn-large waves-effect waves-light hoverable blue accent-3">B&S
          </button></td>
        <td><button class= "buttonCompany"onClick={() => this.goCompany("Miraphone")}
          type="submit"
          className="btn btn-large waves-effect waves-light hoverable blue accent-3">Miraphone
          </button>
            </td> 
        <td><button class= "buttonCompany"onClick={() => this.goCompany("Meinl Weston")}
          type="submit"
          className="btn btn-large waves-effect waves-light hoverable blue accent-3">Meinl Weston
          </button></td>
        </tr>
        </table>
        
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