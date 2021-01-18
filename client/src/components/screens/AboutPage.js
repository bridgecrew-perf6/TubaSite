import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../stylesheet.css";
import authorImage from "../Images/About/author.png";


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
       <table style={{marginTop: "0px"}} >
       <col style={{width: "30%"}} /> 
  
      <col style={{width: "70%"}}  />
       <tbody style={{paddingTop:"0px"}}>
       <tr>
       <td><img src={authorImage} style = {{borderRadius:"50%",width: "200px",height:"200px",opacity:"90%"}}/></td>
       <td  >
         <p style={{fontSize:"22.8px",textAlign:"left"}}>
         Toto (author) is a programmer in London. He realized his passion for playing the tuba during high school, where he served as the principal tuba player in the symphonic and wind orchestra. His favorite tuba and mouthpiece are B&SGR41 and PT50.
        
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