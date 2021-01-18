import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import BaSLogo from'../../Images/Company/tuba/bas.png';
import GR55Photo from'../../Images/Tubas/BaS/BbTuba/bsgr55_full.png';
import GR51Photo from'../../Images/Tubas/BaS/BbTuba/bsgr51_full.png';
import BS3198Photo from '../../Images/Tubas/BaS/CTuba/bs3198_full.png';
import GR41Photo from '../../Images/Tubas/BaS/CTuba/bsgr41_full.png';
import MRPCPhoto from '../../Images/Tubas/BaS/CTuba/bsmrpc_full.png';
import BS3099Photo from '../../Images/Tubas/BaS/FTuba/3099_full.jpeg';
import BS3100Photo from '../../Images/Tubas/BaS/FTuba/3100wgj-l.jpg';
import BS5100Photo from '../../Images/Tubas/BaS/FTuba/bs5100w_full-1.jpg';
import MRPFPhoto from '../../Images/Tubas/BaS/FTuba/bsmrpf_full.png';
import "../../../stylesheet.css";
import navigator from "../../layout/navigateProduct";
import navigateCompany from "../../layout/navigateCompany";


class BaSCompanyPage extends Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = {isGR55: true};
    }
    
  render() {
      const { user } = this.props.auth;
       return (
        <div >
        <div  style={{textAlign: "center"}}>
        <br></br>
        <div className="topTableSection">
        <h2 >B&S</h2>
        <hr></hr>
        <table>
          <tbody>
        <tr>
          <td><img 
           src={ BaSLogo} 
           onClick={() =>navigateCompany("B&S")} className="logoImage"/></td>
          <td> <p className="pCompanyDescription">
          Today the company trades as Buffet Crampon Deutschland GmbH and is a world leader in multi-instrument groups. Especially in the two home markets of Germany and France, we are the leader for step-up and professional brass instruments. By fulfilling the highest artistic demands, our instruments have found their way into the famous orchestras in the world. 
            
            
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
          <td><img src={GR55Photo}  onClick={() => navigator("tuba","B&SGR55",this.props.history)} className="tubaImage"/></td>
          <td><img src={GR51Photo} onClick={() => navigator("tuba","B&SGR51",this.props.history)} className="tubaImage"/></td>
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
        <td><img src={BS3198Photo} onClick={() => navigator("tuba","B&S3198",this.props.history)} className="tubaImage"/></td>
        <td><img src={GR41Photo} onClick={() => navigator("tuba","B&SGR41",this.props.history)} className="tubaImage"/></td>
        </tr>
        <tr>
        <td><img src={MRPCPhoto} onClick={() => navigator("tuba","B&SMRPC",this.props.history)} className="tubaImage"/></td>
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
        <td><img src={BS3099Photo} onClick={() =>  navigator("tuba","B&S3099",this.props.history)} className="tubaImage"/></td>
        <td><img src={BS3100Photo} onClick={() =>  navigator("tuba","B&S3100",this.props.history)} className="tubaImage"/></td>
        </tr>
        <tr>
        <td><img src={BS5100Photo} onClick={() => navigator("tuba","B&S5100",this.props.history)} className="tubaImage"/></td>
        <td><img src={MRPFPhoto} onClick={() =>  navigator("tuba","B&SMRPF",this.props.history)} className="tubaImage"/></td>
        </tr>
        </tbody>
        </table>
        </div>

        

        

        </div>
        </div>
      );
    }
  }
BaSCompanyPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(BaSCompanyPage);