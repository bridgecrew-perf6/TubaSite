import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import DenisWickLogo from'../../Images/Company/mouthpeice/dw.svg';
import mouthpeice from'../../Images/Mouthpeice/dw-1.png';
import navigator from "../../layout/navigateProduct";

import navigateCompany from "../../layout/navigateCompany";


import "../../../stylesheet.css"



class DenisWickCompanyPage extends Component {
    constructor(props) {
      super(props);
      console.log(props);
    }
  render() {
      const { user } = this.props.auth;
       return (
        <div >
        <div  style={{textAlign: "center"}}>
        <br></br>
        <div className="topTableSection">
        <h2 >Denis Wick</h2>
        <hr></hr>
        <table>
          <tbody>
        <tr>
          <td><img 
           src={ DenisWickLogo} 
           onClick={() => navigateCompany("DenisWick")} className="logoImage"/></td>
          <td><p  className="pCompanyDescription">
          Denis Wick Products is a British success story and continues to export and innovate, flourishing in the highly competitive world of the music trade.
          The Denis Wick factory in Hamworthy, Dorset employs skilled technicians and craftsmen to create these carefully designed accessories.
          </p></td>
        </tr>
        </tbody>
        </table>
        </div>

        <div className="tableSection">
        <hr></hr>
        <table  className = "tubaTable">
        <tr>
          <td>
          <div className ="alignMouthpeiceNameAndImage" onClick={() => navigator("mouthpeice","DWCBBb",this.props.history)}>
          <div><img 
           src={ mouthpeice} 
            className="mouthpeiceLogoImage"/></div>
           C / BBb 
           </div>
           </td>
           <td>
          <div className ="alignMouthpeiceNameAndImage" onClick={() => navigator("mouthpeice","DWFEEb",this.props.history)}>
          <div><img 
           src={ mouthpeice} 
            className="mouthpeiceLogoImage"/></div>
           F / EEb 
           </div>
           </td>


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