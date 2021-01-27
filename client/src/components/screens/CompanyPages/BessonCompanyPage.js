import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import BessonLogo from'../../Images/Company/tuba/besson.svg';
import PhotoBb994 from '../../Images/Tubas/Besson/BbTuba/be994-1.png';
import PhotoEb980 from '../../Images/Tubas/Besson/EbTuba/be980-1.png';
import PhotoEb983 from '../../Images/Tubas/Besson/EbTuba/be983-1.png';
import navigator from "../../layout/navigateProduct";
import navigateCompany from "../../layout/navigateCompany";



import "../../../stylesheet.css"



class BessonCompanyPage extends Component {
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
        <h2 >Besson</h2>
        <hr></hr>
        <table><tbody>
        <tr>
          <td><img 
           src={ BessonLogo} 
           onClick={() => navigateCompany("Besson")} className="logoImage" /></td>
          <td><p  className="pCompanyDescription">
          In recent years the quality of Besson brass instruments has continued to rise with rigorous testing and quality control. From the raw materials, the skilled techniques of master craftsmen, to the build and finish, each instrument is played and tested by the greatest brass players you will ever hear.
          We do this to provide you with the best instruments money can buy, a quality that endures and retains its value, making it a ‘sound’ investment to help you on your journey as a musician.
          </p></td>
        </tr></tbody>
        </table>
        </div>
        
        <div className="tableSection">
        <h4 >BBb Tuba</h4>
        <hr></hr>
        <table className = "tubaTable"><tbody>
        <tr>
        <td><img src={PhotoBb994}  onClick={() => navigator("tuba","B994",this.props.history)} className="tubaImage" style={{color: "white"}}/></td>
          <td className="NullTdClass"></td>
        </tr></tbody>
        
        </table>
        </div>


       

       


        <div className="tableSection">
        <h4 >EEb Tuba</h4>
        <hr></hr>
        <table className = "tubaTable">
        <tbody>
        <tr>
        <td><img src={PhotoEb980}  onClick={() =>  navigator("tuba","B980",this.props.history)} className="tubaImage"/></td>
        <td><img src={PhotoEb983}  onClick={() => navigator("tuba","B983",this.props.history)} className="tubaImage"/></td>

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