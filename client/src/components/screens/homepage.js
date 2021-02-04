import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../stylesheet.css";
import BaSLogo from'../Images/Company/tuba/bas.svg';
import MiraphoneLogo from'../Images/Company/tuba/miraphone.svg';
import MWLogo from'../Images/Company/tuba/mw.svg';
import DWLogo from'../Images/Company/mouthpeice/dw.svg';
import BachLogo from'../Images/Company/mouthpeice/bach.svg';
import PTLogo from'../Images/Company/mouthpeice/perantucci.svg';
import YamahaLogo from'../Images/Company/tuba/yamaha.svg';
import BessonLogo from'../Images/Company/tuba/besson.svg';


const TubaLogos = [BaSLogo,MiraphoneLogo,MWLogo,YamahaLogo,BessonLogo];
const MouthpeiceLogos = [PTLogo,DWLogo,BachLogo];

const TubaCompanyPagesString = ["BaSPage","MiraphonePage","MeinlWestonPage","YamahaPage","BessonPage"];
const MouthpeiceCompanyPagesString = ["PerantucciPage","DenisWickPage","BachPage"];

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {TubaCompaniesPhotosList: [],MouthpeiceCompaniesPhotosList: [], isTuba:true};
        let TubaPosition = Math.floor(Math.random()* TubaLogos.length);
        let MouthpeicePosition = Math.floor(Math.random()* MouthpeiceLogos.length);
        for(var i =0; i< TubaLogos.length;i++){
          this.state.TubaCompaniesPhotosList[i] = (i+TubaPosition)%5;
          if(i<3){
            this.state.MouthpeiceCompaniesPhotosList[i] = (i+MouthpeicePosition)%3;
          }
        }
      }
    goTubaCompany(name){
      switch (name) {
        case 0:
        this.props.history.push({pathname: TubaCompanyPagesString[0], state: {companyName: name} });
        break;
        case 1:
          console.log("YOYO");
        this.props.history.push({pathname: TubaCompanyPagesString[1], state: {companyName: name} });
        break;
        case 2:
        this.props.history.push({pathname: TubaCompanyPagesString[2], state: {companyName: name} });
        break;
        case 3:
        this.props.history.push({pathname: TubaCompanyPagesString[3], state: {companyName: name} });
        break;
        case 4:
        this.props.history.push({pathname:  TubaCompanyPagesString[4], state: {companyName: name} });
        break;

      }
    }
    goMouthpeiceCompany(name){
      switch (name) {
        case 0:
        this.props.history.push({pathname: MouthpeiceCompanyPagesString[0], state: {companyName: name} });
        break;
        case 1:
          console.log("YOYO");
        this.props.history.push({pathname: MouthpeiceCompanyPagesString[1], state: {companyName: name} });
        break;
        case 2:
        this.props.history.push({pathname: MouthpeiceCompanyPagesString[2], state: {companyName: name} });
        break;
      }
    }
    tubaDisplay= () => {
      this.setState({isTuba:true});
    }
    mouthpeiceDisplay= () => {
      this.setState({isTuba:false});
    }

  render() {
      const { user } = this.props.auth;
      
  return (
      <div style={{backgroundColor:"rgb(36, 34, 34)", height:"80%"}} >
        <div  style={{textAlign: "center",padding: "10px"}}>
        <h3 style={{color:"white"}}>
            <b >Welcome Back!</b> {user.name.split(" ")[0]}
        </h3>
        <div className="firstPageSection" style={{marginTop:"3vh"}} >
        <h4> <a style={{display: "inline"}} onClick={this.tubaDisplay}> {this.state.isTuba?<p style={{color:"darkgoldenrod",display: "inline"}}>Tuba</p>:<p  style={{color:" rgb(102, 95, 95)",display: "inline"}}>Tuba</p>}  </a>
        <p style={{display: "inline",color:"rgb(102, 95, 95)"}} >|</p>

        <a style={{display: "inline"}} onClick={this.mouthpeiceDisplay}> {this.state.isTuba?<p style={{color:" rgb(102, 95, 95)",display: "inline"}}>Mouthpeice</p>:<p  style={{color:"darkgoldenrod",display: "inline"}}>Mouthpeice</p>} </a>
        </h4>
        <hr></hr>


        {this.state.isTuba?
        <table className="tubaTable">
        <tbody>
        <tr>
          <td className="TubaLogoDes" ><img src={TubaLogos[this.state.TubaCompaniesPhotosList[0]]} onClick={() => this.goTubaCompany(this.state.TubaCompaniesPhotosList[0])} className="logoImage"/></td>
          <td className="TubaLogoDes"><img src={TubaLogos[this.state.TubaCompaniesPhotosList[1]]} onClick={() => this.goTubaCompany(this.state.TubaCompaniesPhotosList[1])} className="logoImage"/></td>
          <td className="TubaLogoDes"><img src={TubaLogos[this.state.TubaCompaniesPhotosList[2]]}onClick={() => this.goTubaCompany(this.state.TubaCompaniesPhotosList[2])} className="logoImage"/></td>
        </tr>
        <tr >
          <td className="TubaLogoDes"><img src={TubaLogos[this.state.TubaCompaniesPhotosList[3]]} onClick={() => this.goTubaCompany(this.state.TubaCompaniesPhotosList[3])} className="logoImage"/></td>
          <td className="TubaLogoDes"><img src={TubaLogos[this.state.TubaCompaniesPhotosList[4]]} onClick={() => this.goTubaCompany(this.state.TubaCompaniesPhotosList[4])} className="logoImage"/></td>
          
        </tr>
        </tbody>
        </table>
        
        :
        
        <table className="tubaTable" style={{marginBottom:"18%", backgroundColor:"rgb(36, 34, 34)"}}>
        <tbody >
        <tr>
          <td><img src={MouthpeiceLogos[this.state.MouthpeiceCompaniesPhotosList[0]]} onClick={() => this.goMouthpeiceCompany(this.state.MouthpeiceCompaniesPhotosList[0])} className="mouthpeiceLogoImage"/></td>
          <td><img src={MouthpeiceLogos[this.state.MouthpeiceCompaniesPhotosList[1]]} onClick={() => this.goMouthpeiceCompany(this.state.MouthpeiceCompaniesPhotosList[1])}className="mouthpeiceLogoImage"/></td>
          <td><img src={MouthpeiceLogos[this.state.MouthpeiceCompaniesPhotosList[2]]} onClick={() => this.goMouthpeiceCompany(this.state.MouthpeiceCompaniesPhotosList[2])} className="mouthpeiceLogoImage"/></td>
        </tr>
        </tbody>
        </table>
        
        }
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