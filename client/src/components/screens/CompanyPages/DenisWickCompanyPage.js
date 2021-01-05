import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import DenisWickLogo from'../../Images/Company/mouthpeice/dw.png';
import mouthpeice from'../../Images/Mouthpeice/dw.jpg';



import "../../../stylesheet.css"



class DenisWickCompanyPage extends Component {
    constructor(props) {
      super(props);
      console.log(props);
    }
    goCompany(name){
      this.props.history.push({pathname: "BaScompanyPage", state: {companyName: name} });
  }
    
  render() {
      const { user } = this.props.auth;
       return (
        <div >
        <div  style={{textAlign: "center"}}>
        <br></br>
        <div className="topTableSection">
        <h4 >BaS</h4>
        <hr></hr>
        <br></br>
        <table>
          <tbody>
        <tr>
          <td><img 
           src={ DenisWickLogo} 
           onClick={() => this.goCompany("BaS")} className="logoImage"/></td>
          <td>Heyey</td>
        </tr>
        </tbody>
        </table>
        </div>

        <div className="tableSection">
        <h4 >Denis Wick</h4>
        <hr></hr>
        <br></br>
        <table>
        <tr>
          <td><img 
           src={ mouthpeice} 
           onClick={() => this.goCompany("BaS")} className="logoImage"/></td>
          <td><img 
           src={ mouthpeice} 
           onClick={() => this.goCompany("BaS")} className="logoImage"/></td>
        </tr>
        </table>
        </div>
        
        



        </div>
        </div>
      );
    }
  }
  DenisWickCompanyPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(DenisWickCompanyPage);