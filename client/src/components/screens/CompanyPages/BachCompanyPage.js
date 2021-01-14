import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import BachLogo from'../../Images/Company/mouthpeice/bach.png';
import mouthpeice from'../../Images/Mouthpeice/bach.jpg';



import "../../../stylesheet.css"



class BachCompanyPage extends Component {
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
        <h4 >Bach</h4>
        <hr></hr>
        <table>
          <tbody>
        <tr>
          <td><img 
           src={ BachLogo} style={{width:"55%"}}
           onClick={() => this.goCompany("BaS")} className="logoImage"/></td>
          <td><p  className="pCompanyDescription">
          Born Vincent Shrotenbach in Vienna in 1890, he initially received training on violin, but subsequently switched to trumpet when he heard its majestic sound. Although Vincent also displayed a strong aptitude for science and graduated with an engineering degree, he gave up a promising career to pursue his first love and an uncertain future as a musician. Performing under the stage name, Vincent Bach, he established musical success as he toured throughout Europe
            
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
  BachCompanyPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(BachCompanyPage);