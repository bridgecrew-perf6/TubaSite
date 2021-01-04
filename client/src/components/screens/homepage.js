import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../stylesheet.css";
import BaSLogo from'../Images/Company/tuba/bas.png';
import MiraphoneLogo from'../Images/Company/tuba/miraphone.png';
import MWLogo from'../Images/Company/tuba/mw.png';
import DWLogo from'../Images/Company/mouthpeice/dw.png';
import BachLogo from'../Images/Company/mouthpeice/bach.png';
import PTLogo from'../Images/Company/mouthpeice/pt.jpg';
import YamahaLogo from'../Images/Company/tuba/yamaha.jpg';
import BessonLogo from'../Images/Company/tuba/besson.jpg';


const TubaLogos = [BaSLogo,MiraphoneLogo,MWLogo,YamahaLogo,BessonLogo];
const MouthpeiceLogos = [PTLogo,DWLogo,BachLogo];

const CompanyPagesString = ["BaScompanyPage","MiraphonePage","MeinlWestonPage","YamahaPage","BessonPage"];

class HomePage extends Component {
    constructor() {
        super();
        
        this.state = {TubaCompaniesPhotosList: [],MouthpeiceCompaniesPhotosList: [] };
        let TubaPosition = Math.floor(Math.random()* TubaLogos.length);
        let MouthpeicePosition = Math.floor(Math.random()* MouthpeiceLogos.length);
        for(var i =0; i< TubaLogos.length;i++){
          this.state.TubaCompaniesPhotosList[i] = (i+TubaPosition)%5;
          if(i<3){
            this.state.MouthpeiceCompaniesPhotosList[i] = (i+MouthpeicePosition)%3;
          }
        }
      }
    goCompany(name){
      switch (name) {
        case 0:
        this.props.history.push({pathname: CompanyPagesString[0], state: {companyName: name} });
        break;
        case 1:
          console.log("YOYO");
        this.props.history.push({pathname: CompanyPagesString[1], state: {companyName: name} });
        break;
        case 2:
        this.props.history.push({pathname: CompanyPagesString[2], state: {companyName: name} });
        break;
        case 3:
        this.props.history.push({pathname: CompanyPagesString[3], state: {companyName: name} });
        break;
        case 4:
        this.props.history.push({pathname:  CompanyPagesString[4], state: {companyName: name} });
        break;

      }
    }
    componentWillMount() {
      
  }
  render() {
      const { user } = this.props.auth;
      
  return (
      <div >
        <div  style={{textAlign: "center"}}>
        <h3 >
            <b>Welcome Back!</b> {user.name.split(" ")[0]}
        </h3>
        <br></br>
        <div class="topTableSection">
        <h4 >Tuba</h4>
        <hr></hr>
        <br></br>
        <tr></tr>
        <table>
        <tr>
          <td><img src={TubaLogos[this.state.TubaCompaniesPhotosList[0]]} onClick={() => this.goCompany(this.state.TubaCompaniesPhotosList[0])} class="logoImage"/></td>
          <td><img src={TubaLogos[this.state.TubaCompaniesPhotosList[1]]} onClick={() => this.goCompany(this.state.TubaCompaniesPhotosList[1])} class="logoImage"/></td>
          <td><img src={TubaLogos[this.state.TubaCompaniesPhotosList[2]]}onClick={() => this.goCompany(this.state.TubaCompaniesPhotosList[2])} class="logoImage"/></td>
        </tr>
        <tr>
          <td><img src={TubaLogos[this.state.TubaCompaniesPhotosList[3]]} onClick={() => this.goCompany(this.state.TubaCompaniesPhotosList[3])} class="logoImage"/></td>
          <td><img src={TubaLogos[this.state.TubaCompaniesPhotosList[4]]} onClick={() => this.goCompany(this.state.TubaCompaniesPhotosList[4])} class="logoImage"/></td>
        </tr>
        
        </table>
        </div>
        
        <div class="tableSection">
        <h4 >Mouthpeice</h4>
        <hr></hr>
        <br></br>
        <tr></tr>
        <table>
        <tr>
          <td><img src={MouthpeiceLogos[this.state.MouthpeiceCompaniesPhotosList[0]]} onClick={() => this.goCompany("BaS")} class="logoImage"/></td>
          <td><img src={MouthpeiceLogos[this.state.MouthpeiceCompaniesPhotosList[1]]} onClick={() => this.goCompany("Miraphone")} class="logoImage"/></td>
          <td><img src={MouthpeiceLogos[this.state.MouthpeiceCompaniesPhotosList[2]]} onClick={() => this.goCompany("Meinl Weston")} class="logoImage"/></td>
        </tr>
        
        </table>
        </div>

        </div>
        </div>
   
    );
  }
}
HomePage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(HomePage);