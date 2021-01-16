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
      console.log(props.match.params.name);
      const x =  mapping.get(props.match.params.name);
      this.state = { 
        params: props.match.params, 
        details: x,
        isPreviousReview:false

      };
      
    }
    
    
  render() {
      const { user } = this.props.auth;
       return (
        <div  style={{textAlign: "center"}}>
        <div class="split left">
        <h2 style={{  textDecoration: "underline"}}>{ this.state.details[0]}</h2>
          <div style={{alignItems:"center"}}>
         
          </div>
          <div style={{alignItems:"center",textAlign:"center"}}>
          <img src ={this.state.details[1]} className="tubaDisplayImage"></img>
          </div>
          <div style={{alignItems:"center"}}>
          <table >
          <tbody>
          <td style={{textAlign:"left"}}>
          <tr>Rating: 0</tr>
          <tr>Key: {this.state.details[4]}</tr>
          </td>
          <td style={{textAlign:"left"}}>
          <tr>Company: {this.state.details[2]}</tr>
          <tr>Bell Size: {this.state.details[3]} </tr>
          
          </td>
          </tbody>
          </table>
          </div>
          
          

        </div>

        <div class="split right">
        <h2 >Review</h2>
        {this.state.isPreviousReview? null:
          <div className="centered">
            
            <h3>No Previous Review</h3>
            
          </div>
    }
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