import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import PTLogo from'../../Images/Company/mouthpeice/pt.jpg';
import mouthpeice from'../../Images/Mouthpeice/pt.jpg';
import navigator from "../../layout/navigateProduct";



import "../../../stylesheet.css"



class PTCompanyPage extends Component {
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
        <h2 >Perantucci</h2>
        <hr></hr>
        <table>
          <tbody>
        <tr>
          <td><img 
           src={ PTLogo} style={{width:"40%"}}
           className="logoImage"/></td>
          <td><p  className="pCompanyDescription">
          Mr. Perantoni, Mr. Tucci and their manufacturing staff have spared no effort to provide modern and progressive Euphonium and tuba players suitable tools with which their musical objectives can be readily attained. Perantucci tuba mouthpieces offer the greatest selection of mature, proven designs ever provided.            
          </p></td>
        </tr>
        </tbody>
        </table>
        </div>

        <div className="tableSection">
        <hr></hr>
        <br></br>
        <table  className = "tubaTable">
          <td>
          <div className ="alignMouthpeiceNameAndImage" onClick={() => navigator("mouthpeice","PTCBBb",this.props.history)} >
          <div><img 
           src={ mouthpeice} 
            className="logoImage"/></div>
           C / BBb 
           </div>
           </td>
        <td>
          <div className ="alignMouthpeiceNameAndImage" onClick={() => navigator("mouthpeice","PTFEEb",this.props.history)} >
          <div><img 
           src={ mouthpeice} 
            className="logoImage"/></div>
           F / EEb 
           </div>
           </td>
        
        </table>
        </div>
        
        



        </div>
        </div>
      );
    }
  }
  PTCompanyPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(PTCompanyPage);