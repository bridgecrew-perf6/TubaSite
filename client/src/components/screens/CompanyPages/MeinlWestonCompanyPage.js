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
import navigator from "../../layout/navigateProduct";
import navigateCompany from "../../layout/navigateCompany";


import "../../../stylesheet.css"



class MeinlWestonCompanyPage extends Component {
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
        <h4 >Meinl Weston</h4>
        <hr></hr>
        <table>
          <tbody>
        <tr>
          <td><img 
           src={ MeinlWestonLogo} 
           onClick={() => navigateCompany("MeinlWeston")} className="logoImage"/></td>
          <td><p className="pCompanyDescription">
          Meinl-Weston Tubas have been the benchmark of German craftsmanship for decades.
          For 7 generations, the Meinl-Langhammer family devoted their work to gain the best manufacturing experience, meticulous workmanship, continuous research and development as well as personal dedication to quality.
          </p></td>
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
        <td><img src={PhotoBb195}  onClick={() => navigator("tuba","MW195",this.props.history)} className="tubaImage"/></td>
          <td><img src={PhotoBb196} onClick={() => navigator("tuba","MW196",this.props.history)}  className="tubaImage"/></td>
        </tr>
        <tr>
        <td><img src={PhotoBb197} onClick={() => navigator("tuba","MW197",this.props.history)} className="tubaImage"/></td>
        
        <td><img src={PhotoBb2011} onClick={() => navigator("tuba","MW2011",this.props.history)} className="tubaImage"/></td>
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
        <td><img src={PhotoC3225} onClick={() => navigator("tuba","MW3225",this.props.history)} className="tubaImage"/></td>
        <td><img src={PhotoC6450} onClick={() => navigator("tuba","MW6450",this.props.history)} className="tubaImage"/></td>
        </tr>
        <tr>
        <td><img src={PhotoC3450} onClick={() => navigator("tuba","MW3450",this.props.history)} className="tubaImage"/></td>
        <td><img src={PhotoC5450P} onClick={() => navigator("tuba","MW5450P",this.props.history)} className="tubaImage"/></td>
        </tr>
        <tr>
        
        <td><img src={PhotoC5450R} onClick={() => navigator("tuba","MW5450R",this.props.history)} className="tubaImage"/></td>
        
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
        <td><img src={PhotoF4250} onClick={() => navigator("tuba","MW4250",this.props.history)}  className="tubaImage"/></td>
        <td><img src={PhotoF45} onClick={() => navigator("tuba","MW45",this.props.history)}  className="tubaImage"/></td>
        </tr>
        <tr>
        <td><img src={PhotoF182} onClick={() => navigator("tuba","MW182",this.props.history)}  className="tubaImage"/></td>
        <td><img src={PhotoF2250} onClick={() => navigator("tuba","MW2250",this.props.history)}  className="tubaImage"/></td>
        </tr>
        <tr>
        <td><img src={PhotoF6460} onClick={() =>navigator("tuba","MW6460",this.props.history)}  className="tubaImage"/></td>
        
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