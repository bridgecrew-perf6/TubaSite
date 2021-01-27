import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import MiraphoneLogo from'../../Images/Company/tuba/miraphone.svg';
import Photo1291 from '../../Images/Tubas/Miraphone/BbTuba/1291-1.png';
import Photo9000 from  '../../Images/Tubas/Miraphone/BbTuba/9000-1.png';
import Photo88 from '../../Images/Tubas/Miraphone/CTuba/88-1.png';
import Photo291 from '../../Images/Tubas/Miraphone/CTuba/291Bruckner-1.png';
import Photo1293 from '../../Images/Tubas/Miraphone/CTuba/1293-1.png';
import Photo7050 from '../../Images/Tubas/Miraphone/EbTuba/7050-1.png';
import Photo181 from '../../Images/Tubas/Miraphone/FTuba/181-1.png';
import Photo281 from '../../Images/Tubas/Miraphone/FTuba/281-1.png';
import Photo481 from '../../Images/Tubas/Miraphone/FTuba/481-1.png';
import Photo1281 from '../../Images/Tubas/Miraphone/FTuba/1281-1.png';
import "../../../stylesheet.css";
import navigator from "../../layout/navigateProduct";
import navigateCompany from "../../layout/navigateCompany";




class MiraphoneCompanyPage extends Component {
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
        <h2 >Miraphone</h2>
        <hr></hr>
        <table>
          <tbody>
        <tr>
          <td style={{backgroundColor:" rgb(102, 95, 95)"}}><img 
           src={ MiraphoneLogo} 
           onClick={() => navigateCompany("Miraphone")} className="logoImage"/></td>
          <td ><p className="pCompanyDescription">Today Miraphone is one of the biggest instrument manufacturer worldwide. All important decisions are made from within the Cooperative which creates strong identification with the company and highest motivation towards success. 
          In 2016, Miraphone is proud to celebrate its 70th anniversary.
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
        <td><img src={Photo1291}  onClick={() =>navigator("tuba","M1291",this.props.history)} className="tubaImage"/></td>
          <td><img src={Photo9000} onClick={() =>navigator("tuba","M9000",this.props.history)}className="tubaImage"/></td>
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
        <td><img src={Photo1293} onClick={() => navigator("tuba","M1293",this.props.history)} className="tubaImage"/></td>
        <td><img src={Photo291} onClick={() => navigator("tuba","M291",this.props.history)}className="tubaImage"/></td>
        </tr>
        <tr>
        <td><img src={Photo88} onClick={() => navigator("tuba","M88",this.props.history)} className="tubaImage"/></td>
        </tr></tbody>
        </table>
        </div>

        <div className="tableSection">
        <h4 >F Tuba</h4>
        <hr></hr>
        <br></br>
        <table className = "tubaTable">
        <tbody>
        <tr>
        <td><img src={Photo481} onClick={() => navigator("tuba","M481",this.props.history)} className="tubaImage"/></td>
        <td><img src={Photo1281} onClick={() => navigator("tuba","M1281",this.props.history)}className="tubaImage"/></td>
          </tr>
        
        <tr>
        <td><img src={Photo281} onClick={() => navigator("tuba","M281",this.props.history)} className="tubaImage"/></td>
        <td><img src={Photo181} onClick={() =>navigator("tuba","M181",this.props.history)}className="tubaImage"/></td>

        </tr></tbody>
        </table>
        </div>


        <div className="tableSection">
        <h4 >EEb Tuba</h4>
        <hr></hr>
        <br></br>
        <table className = "tubaTable">
        <tbody>
        <tr>
        <td><img src={Photo7050}  onClick={() => navigator("tuba","M7050",this.props.history)} className="tubaImage"/></td>
        <td class="NullTdClass"></td>
        </tr></tbody>
        </table>
        </div>

        </div>
        </div>
      );
    }
  }
MiraphoneCompanyPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(MiraphoneCompanyPage);