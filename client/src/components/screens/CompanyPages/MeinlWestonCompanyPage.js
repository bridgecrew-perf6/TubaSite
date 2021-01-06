import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import MeinlWestonLogo from'../../Images/Company/tuba/mw.png';
import PhotoBb195 from '../../Images/Tubas/MW/BbTuba/195p_full.jpg';
import PhotoBb196 from '../../Images/Tubas/MW/BbTuba/mw196_full.png';
import PhotoBb197 from '../../Images/Tubas/MW/BbTuba/mw197-1_full-1592x945.png';
import PhotoBb2011 from '../../Images/Tubas/MW/BbTuba/mw2011ra-1_full.jpg';
import PhotoC3225 from '../../Images/Tubas/MW/CTuba/3225_ursus_fullcopy-1.jpg';
import PhotoC6450 from '../../Images/Tubas/MW/CTuba/6450-1_full-1.jpg';
import PhotoC3450 from '../../Images/Tubas/MW/CTuba/mw3450_full.png';
import PhotoC5450P from '../../Images/Tubas/MW/CTuba/mw5450_full.png';
import PhotoC5450R from '../../Images/Tubas/MW/CTuba/mw5450ra_full-1592x945.png';
import PhotoF4250 from '../../Images/Tubas/MW/FTuba/meltonmeinlweston_tuba_4250_full.jpg';
import PhotoF45 from '../../Images/Tubas/MW/FTuba/mw45seni.jpg';
import PhotoF182 from '../../Images/Tubas/MW/FTuba/mw182_full.png';
import PhotoF2250 from '../../Images/Tubas/MW/FTuba/mw2250_full.png';
import PhotoF6460 from '../../Images/Tubas/MW/FTuba/mw6460_full.png';

import "../../../stylesheet.css"



class MeinlWestonCompanyPage extends Component {
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
        <h4 >Meinl Weston</h4>
        <hr></hr>
        <br></br>
        <table>
          <tbody>
        <tr>
          <td><img 
           src={ MeinlWestonLogo} 
           onClick={() => this.goCompany("BaS")} className="logoImage"/></td>
          <td>Heyey</td>
        </tr>
        </tbody>
        </table>
        </div>
        
        <div className="tableSection">
        <h4 >BBb Tuba</h4>
        <hr></hr>
        <br></br>
        <table className = "tubaTable">
        <tbody>
        <tr>
        <td><img src={PhotoBb195}  onClick={() => this.goCompany("Miraphone")} className="tubaImage"/></td>
          <td><img src={PhotoBb196} onClick={() => this.goCompany("BaS")} className="tubaImage"/></td>
        </tr>
        <tr>
        <td><img src={PhotoBb197} onClick={() => this.goCompany("BaS")} className="tubaImage"/></td>
        
        <td><img src={PhotoBb2011} onClick={() => this.goCompany("BaS")} className="tubaImage"/></td>
        </tr>
        </tbody>
        </table>
        </div>


        <div className="tableSection">
        <h4 >CC Tuba</h4>
        <hr></hr>
        <br></br>
        <table className = "tubaTable">
        <tbody>
        <tr>
        <td><img src={PhotoC3225} onClick={() => this.goCompany("Miraphone")} className="tubaImage"/></td>
        <td><img src={PhotoC6450} onClick={() => this.goCompany("BaS")} className="tubaImage"/></td>
        </tr>
        <tr>
        <td><img src={PhotoC3450} onClick={() => this.goCompany("Miraphone")} className="tubaImage"/></td>
        <td><img src={PhotoC5450P} onClick={() => this.goCompany("BaS")} className="tubaImage"/></td>
        </tr>
        <tr>
        
        <td><img src={PhotoC5450R} onClick={() => this.goCompany("Miraphone")} className="tubaImage"/></td>
        <td></td>
        </tr>
        </tbody>
        </table>
        </div>

        <div className="tableSection">
        <h4 >F Tuba</h4>
        <hr></hr>
        <br></br>
        <table className = "tubaTable">
        <tbody>
        <tr>
        <td><img src={PhotoF4250} onClick={() => this.goCompany("Miraphone")} className="tubaImage"/></td>
        <td><img src={PhotoF45} onClick={() => this.goCompany("BaS")} className="tubaImage"/></td>
        </tr>
        <tr>
        <td><img src={PhotoF182} onClick={() => this.goCompany("Miraphone")} className="tubaImage"/></td>
        <td><img src={PhotoF2250} onClick={() => this.goCompany("BaS")} className="tubaImage"/></td>
        </tr>
        <tr>
        <td><img src={PhotoF6460} onClick={() => this.goCompany("Miraphone")} className="tubaImage"/></td>
        <td></td>
        </tr>
        </tbody>
        </table>
        </div>


       

        </div>
        </div>
      );
    }
  }
  MeinlWestonCompanyPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(MeinlWestonCompanyPage);