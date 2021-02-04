import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import "../../stylesheet.css";
import BackgroundImage from "../Images/HomeBackgroundImages/brian-matangelo-KV8BNwpj6B8-unsplash.jpg";




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
  }, 0);}
   navigate= e =>{
    this.props.history.push("/about");
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      
      <div style={{backgroundImage: `url(${BackgroundImage})`,backgroundSize: "cover", height: "94vh", color: "#f5f5f5"}}>
        
        <body  >

         
        
        <div className="row" style={{ 
           zIndex: 7,position:"absolute",right:"10rem",top:"25rem",padding:"3vh",borderRadius: "1vh",
           textAlign:"center",backgroundColor:" rgb(36, 34, 34)", border:"2px solid darkgoldenrod",
           visibility: this.state.visibility}}>
            <h4>
              <a href="#" style={{color:"darkgoldenrod"}}onClick={this.navigate}><u>Rate and Review</u></a> 
            </h4>
            <p className="flow-text grey-text text-darken-1">
               Tuba and Mouthpeice
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

