import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import YamahaLogo from'../../Images/Company/tuba/yamaha.svg';
import PhotoBb632 from '../../Images/Tubas/Yamaha/BbTuba/ybb632.jpg';
import PhotoBb641 from '../../Images/Tubas/Yamaha/BbTuba/ybb641.jpg';
import PhotoBb841 from '../../Images/Tubas/Yamaha/BbTuba/ybb841.jpg';
import PhotoC822 from '../../Images/Tubas/Yamaha/CTuba/ycb822.jpg';
import PhotoC861 from '../../Images/Tubas/Yamaha/CTuba/ycb861.jpg';
import PhotoEb321 from '../../Images/Tubas/Yamaha/EbTuba/yeb321.jpg';
import PhotoEb632 from '../../Images/Tubas/Yamaha/EbTuba/yeb632.jpg';
import PhotoF621 from '../../Images/Tubas/Yamaha/FTuba/yfb621.jpg';
import PhotoF822 from '../../Images/Tubas/Yamaha/FTuba/yfb822.jpg';

import "../../../stylesheet.css";
import navigator from "../../layout/navigateProduct";
import navigateCompany from "../../layout/navigateCompany";




class YamahaCompanyPage extends Component {
    constructor(props) {
      super(props);
      console.log(props);
    }
    goCompany(name){
      this.props.history.push({pathname: "BaScompanyPage", state: {companyName: name} });
  }
    
  render() {
      const { user } = this.props.auth;
       return (
        <div >
        <div  style={{textAlign: "center"}}>
        <br></br>
        <div className="topTableSection">
        <h2>Yamaha</h2>
        <hr></hr>
        <table>
        <tbody>
        <tr>
          <td><img 
           src={ YamahaLogo}  style={{width:"40%"}}
           onClick={() => navigateCompany("Yamaha")} className="logoImage"/></td>
          <td> <p className="pCompanyDescription">
          Yamaha's history began when its founder, Torakusu Yamaha, repaired a broken reed organ in 1887. Shortly thereafter, he successfully completed the first reed organ to be built in Japan.
          Since then, Yamaha has continued to produce high-quality products by blending traditional craftsmanship with advanced digital technology. 
          </p>
          </td>
        </tr>
        </tbody>
        </table>
        </div>
        
        <div className="tableSection">
        <h4 >BBb Tuba</h4>
        <hr></hr>
        <br></br>
        <table className = "tubaTable">
        <tbody>
        <tr>
        <td><img src={PhotoBb632}  onClick={() => navigator("tuba","Y632B",this.props.history)} className="tubaImageYamaha"/></td>
          <td><img src={PhotoBb641} onClick={() => navigator("tuba","Y641",this.props.history)} className="tubaImageYamaha"/></td>
        </tr>
        <tr>
        <td><img src={PhotoBb841} onClick={() => navigator("tuba","Y841",this.props.history)} className="tubaImageYamaha"/></td>
        </tr>
        </tbody>
        </table>
        </div>


        <div className="tableSection">
        <h4 >CC Tuba</h4>
        <hr></hr>
        <br></br>
        <table className = "tubaTable">
        <tbody>
        <tr>
        <td><img src={PhotoC822} onClick={() => navigator("tuba","Y822C",this.props.history)} className="tubaImageYamaha"/></td>
        <td><img src={PhotoC861} onClick={() => navigator("tuba","Y861",this.props.history)} className="tubaImageYamaha"/></td>
        </tr>
        </tbody>
        
        </table>
        </div>

        <div className="tableSection">
        <h4 >F Tuba</h4>
        <hr></hr>
        <br></br>
        <table className = "tubaTable">
        <tbody>
        <tr>
        <td><img src={PhotoF822} onClick={() => navigator("tuba","Y822F",this.props.history)}className="tubaImageYamaha"/></td>

        <td><img src={PhotoF621} onClick={() => navigator("tuba","Y621",this.props.history)} className="tubaImageYamaha"/></td>
        </tr>
        </tbody>
        </table>
        </div>


        <div className="tableSection">
        <h4 >EEb Tuba</h4>
        <hr></hr>
        <br></br>
        <table className = "tubaTable">
        <tbody>
        <tr>
        <td><img src={PhotoEb632}  onClick={() => navigator("tuba","Y632E",this.props.history)} className="tubaImageYamaha"/></td>

        <td><img src={PhotoEb321}  onClick={() =>navigator("tuba","Y321",this.props.history)} className="tubaImageYamaha"/></td>

        </tr>
        </tbody>
        </table>
        </div>

        </div>
        </div>
      );
    }
  }
  YamahaCompanyPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(YamahaCompanyPage);