import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import PTLogo from'../../Images/Company/mouthpeice/pt.jpg';
import mouthpeice from'../../Images/Mouthpeice/pt.jpg';



import "../../../stylesheet.css"



class PTCompanyPage extends Component {
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
        <h4 >Perantucci</h4>
        <hr></hr>
        <table>
          <tbody>
        <tr>
          <td><img 
           src={ PTLogo} style={{width:"40%"}}
           onClick={() => this.goCompany("BaS")} className="logoImage"/></td>
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