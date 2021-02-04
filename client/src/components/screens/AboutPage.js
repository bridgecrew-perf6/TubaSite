import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../stylesheet.css";
import authorImage from "../Images/About/author.png";
import boxLogo from "../Images/About/box.svg";
import listenLogo from "../Images/About/ear.svg";
import readLogo from "../Images/About/reading-book.svg";





class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {height: props.height};
  }


  render() {
      
      
  return (
      <div  style={{textAlign:"center",height:"94%",position:"fixed",background:" rgb(36, 34, 34) ",justifyContent:"center", display:"flex",alignItems:"center"}}>
       <div className = "aboutUpperPart">
       <h2 style={{color:"white"}}>About the Site</h2>
       <hr className="hrForAbout"></hr>

       <table style={{marginTop: "3vh",padding: "4vh", borderCollapse: "separate",
       borderSpacing: "10px 0"}} >
       <tbody style={{padding:"20px"}}>
       <tr style={{borderSpacing: "50px 0"}}>
       <td className="aboutLogoBox"><div><img src={boxLogo} className="aboutLogo"/></div> <b style={{color:"darkgoldenrod"}}>Share</b> your opinion</td>
       <td className="aboutLogoBox"><div><img src={readLogo} className="aboutLogo"/></div><b style={{color:"darkgoldenrod"}}>Learn</b> tuba models</td>
       <td className="aboutLogoBox"><div><img src={listenLogo} className="aboutLogo"/></div><b style={{color:"darkgoldenrod"}}>Listen</b> to others</td>
      
       
       </tr>
       </tbody>
       </table>
       <p style={{fontSize:"10px",color:"white"}}>*All the photos used in this site are extracted from the respective company's official website. </p>
       <p style={{fontSize:"10px",color:"white"}}>**Please contact the website owner if your company does not allow the photos to be used in this website </p>
       <hr className="hrForAbout"></hr>
       </div>
        </div>
   
    );
  }
}
AboutPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(AboutPage);


        // <br/> This website is built to offer a platform for the tuba players community to discuss tuba and mouthpeice models. It is non-profit based and thus, please kindly bear with the simple design and functions provided.
        //  <p style={{textAlign: "left"}}>Author</p>
        /*
       <table style={{marginBottom: "0px",padding: "0px"}}>
       <tbody  >
       <tr style={{padding: "0px"}}>
       <td><p style={{textAlign: "left"}} >Author</p></td>
       </tr>
       </tbody>
       </table>*/
       //borderTop:"5px solid darkgoldenrod"