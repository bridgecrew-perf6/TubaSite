import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import BessonLogo from'../../Images/Company/tuba/besson.jpg';
import PhotoBb994 from '../../Images/Tubas/Besson/BbTuba/be994.jpg';
import PhotoEb980 from '../../Images/Tubas/Besson/EbTuba/be980.jpg';
import PhotoEb983 from '../../Images/Tubas/Besson/EbTuba/be983.jpg';


import "../../../stylesheet.css"



class BessonCompanyPage extends Component {
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
        <h4 >Besson</h4>
        <hr></hr>
        <br></br>
        <table><tbody>
        <tr>
          <td><img 
           src={ BessonLogo} 
           onClick={() => this.goCompany("BaS")} className="logoImage"/></td>
          <td>Heyey</td>
        </tr></tbody>
        </table>
        </div>
        
        <div className="tableSection">
        <h4 >BBb Tuba</h4>
        <hr></hr>
        <br></br>
        <table className = "tubaTable"><tbody>
        <tr>
        <td><img src={PhotoBb994}  onClick={() => this.goCompany("Miraphone")} className="tubaImage"/></td>
          <td className="NullTdClass"></td>
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
        <td><img src={PhotoEb980}  onClick={() => this.goCompany("Miraphone")} className="tubaImage"/></td>
        <td><img src={PhotoEb983}  onClick={() => this.goCompany("Miraphone")} className="tubaImage"/></td>

        </tr></tbody>
        </table>
        </div>

        </div>
        </div>
      );
    }
  }
  BessonCompanyPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(BessonCompanyPage);