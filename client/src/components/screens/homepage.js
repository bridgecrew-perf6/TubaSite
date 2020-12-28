import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../stylesheet.css";

class HomePage extends Component {
    constructor() {
        super();
      }
    goCompany(){
        this.props.history.push("companyPage");
    }
render() {
    const { user } = this.props.auth;
    
return (
      
    <div >
        <div class="upperContent" style={{alignItems: "center"}}>
        <h3 >
            <b>Welcome Back!</b> {user.name.split(" ")[0]}
        </h3>
        <button onClick={() => this.goCompany()}
        style={{
        width: "150px",
        borderRadius: "3px",
        letterSpacing: "1.5px",
        marginTop: "1rem"
        }}
        type="submit"
        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
    >
        B&S
    </button>
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