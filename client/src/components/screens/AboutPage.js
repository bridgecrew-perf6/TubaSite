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
      <div className = "split"style={{textAlign:"center",height:"100%",position:"fixed",zIndex:4,backgroundColor:"white"}}>
       <h1>About the Site</h1>
       <hr className="hrForAbout"></hr>

       <table style={{marginTop: "6vh",marginBottom: "6vh",padding: "10px", borderCollapse: "separate",
  borderSpacing: "10px 0"}} >
       <tbody style={{padding:"20px"}}>
       <tr style={{borderSpacing: "50px 0"}}>
       <td className="aboutLogoBox"><div><img src={boxLogo} className="aboutLogo"/></div> <b>Share</b> your opinion</td>
       <td className="aboutLogoBox"><div><img src={readLogo} className="aboutLogo"/></div><b>Learn</b> tuba models</td>
       <td className="aboutLogoBox"><div><img src={listenLogo} className="aboutLogo"/></div><b>Listen</b> to others</td>

       
       </tr>
       </tbody>
       </table>



      <hr className="hrForAbout"></hr>
       <table style={{marginTop: "3vh"}} >
       <col style={{width: "30%"}} /> 
  
      <col style={{width: "70%"}}  />
       <tbody style={{paddingTop:"3px"}}>
       <tr>
       <td><img src={authorImage} className="authorImage"/></td>
       <td  >
         <p style={{fontSize:"22.8px",textAlign:"left"}}>
         Toto (author) is a programmer in London. He realized his passion for playing the tuba during high school, where he served as the principal tuba player in the symphonic and wind orchestra. His favorite tuba and mouthpiece are B&S GR41 and PT 50.
        
       </p></td>
       </tr>
       </tbody>
       </table>
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