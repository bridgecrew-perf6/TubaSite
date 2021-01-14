import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import MiraphoneLogo from'../../Images/Company/tuba/miraphone.jpeg';
import Photo1291 from '../../Images/Tubas/Miraphone/BbTuba/1291.jpg';
import Photo9000 from  '../../Images/Tubas/Miraphone/BbTuba/9000.jpg';
import Photo88 from '../../Images/Tubas/Miraphone/CTuba/88.jpg';
import Photo291 from '../../Images/Tubas/Miraphone/CTuba/291Bruckner.jpg';
import Photo1293 from '../../Images/Tubas/Miraphone/CTuba/1293.jpg';
import Photo7050 from '../../Images/Tubas/Miraphone/EbTuba/7050.jpg';
import Photo181 from '../../Images/Tubas/Miraphone/FTuba/181.jpg';
import Photo281 from '../../Images/Tubas/Miraphone/FTuba/281.jpg';
import Photo481 from '../../Images/Tubas/Miraphone/FTuba/481.jpg';
import Photo1281 from '../../Images/Tubas/Miraphone/FTuba/1281.jpg';
import "../../../stylesheet.css"



class MiraphoneCompanyPage extends Component {
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
        <h4 >Miraphone</h4>
        <hr></hr>
        <table>
          <tbody>
        <tr>
          <td><img 
           src={ MiraphoneLogo} 
           onClick={() => this.goCompany("BaS")} className="logoImage"/></td>
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
        <td><img src={Photo1291}  onClick={() => this.goCompany("Miraphone")} className="tubaImage"/></td>
          <td><img src={Photo9000} onClick={() => this.goCompany("BaS")} className="tubaImage"/></td>
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
        <td><img src={Photo88} onClick={() => this.goCompany("Miraphone")} className="tubaImage"/></td>
        <td><img src={Photo291} onClick={() => this.goCompany("BaS")} className="tubaImage"/></td>
        </tr>
        <tr>
        <td><img src={Photo1293} onClick={() => this.goCompany("BaS")} className="tubaImage"/></td>
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
        <td><img src={Photo181} onClick={() => this.goCompany("Miraphone")} className="tubaImage"/></td>
        <td><img src={Photo281} onClick={() => this.goCompany("BaS")} className="tubaImage"/></td>
        </tr>
        
        <tr>
        <td><img src={Photo481} onClick={() => this.goCompany("BaS")} className="tubaImage"/></td>
        <td><img src={Photo1281} onClick={() => this.goCompany("BaS")} className="tubaImage"/></td>
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
        <td><img src={Photo7050}  onClick={() => this.goCompany("Miraphone")} className="tubaImage"/></td>
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