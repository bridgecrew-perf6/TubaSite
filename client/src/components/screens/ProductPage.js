import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import "../../stylesheet.css";
import mapping from "../layout/HashmapItem";

import x from '../Images/Tubas/BaS/BbTuba/bsgr55_full.png';

class ProductPage extends Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = { params: props.match.params};
    }
    
    
  render() {
      const { user } = this.props.auth;
       return (
        <div  style={{textAlign: "center"}}>
        <br></br>
        <div className="topTableSection">
        <h4 >BaS</h4>
        <hr></hr>
        </div>
        <p>
           {this.state.params.name}
           {this.state.params.type} 
        </p>
        <div class="split left">
        <h2 >{this.state.params.name}</h2>
          <div class="centered">
            <img src ={mapping.get(this.state.params.name)} className="tubaDisplayImage"></img>
            <p>Some text.</p>
          </div>
        </div>

        <div class="split right">
        <h2 >Review</h2>
          <div class="centered">
            
            <p>Some text here too.</p>
          </div>
        </div>
        </div>
      );
    }
  }
  ProductPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(ProductPage);