import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import "../../stylesheet.css";
import backgroundImage1 from "../Images/HomeBackgroundImages/brian-matangelo-KV8BNwpj6B8-unsplash.jpg";
import backgroundImage2 from "../Images/HomeBackgroundImages/jessica-pamp-uuKE4DnGcfY-unsplash.jpg";
import backgroundImage3 from "../Images/HomeBackgroundImages/samuel-ramos-Md8c-amE5ms-unsplash.jpg";
import BackgroundSlideshow from 'react-background-slideshow';



class NewLanding extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      visibility: "hidden",
    };
    this.hallo();
  }
  hallo(){
  setTimeout(() => {
    this.setState({visibility: "visible"})
  }, 2200);}
   navigate= e =>{
    this.props.history.push("/about");
  }

  render() {
    return (
      
      <div>
        
        <body className="welcome" >
          <span id="splash-overlay"style={{  zIndex: 6}} class="splash"></span>
          <span id="welcome"style={{  zIndex: 6}} ></span>
         
        
        <div className="row" style={{  zIndex: 7,position:"absolute",right:"10rem",top:"25rem",padding:"20px",borderRadius: "10px",textAlign:"center",backgroundColor:"silver",opacity: 0.9, visibility: this.state.visibility}}>
            <h4>
              <a href="#" style={{color:"black"}}onClick={this.navigate}><u>Rate and Review</u></a> 
            </h4>
            <p className="flow-text grey-text text-darken-1">
               tuba and mouthpeice
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  zIndex: 5
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  zIndex: 5
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
             </div>
      </div>
      <BackgroundSlideshow images={[ backgroundImage1, backgroundImage2, backgroundImage3 ]} style={{zIndex: 5}}/>

      </body>
      </div>
    );
  }
}
NewLanding.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(NewLanding);