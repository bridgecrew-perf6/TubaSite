import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import YamahaLogo from'../../Images/Company/tuba/yamaha.jpg';
import PhotoBb632 from '../../Images/Tubas/Yamaha/BbTuba/ybb632.jpg';
import PhotoBb641 from '../../Images/Tubas/Yamaha/BbTuba/ybb641.jpg';
import PhotoBb841 from '../../Images/Tubas/Yamaha/BbTuba/ybb841.jpg';
import PhotoC822 from '../../Images/Tubas/Yamaha/CTuba/ycb822.jpg';
import PhotoC861 from '../../Images/Tubas/Yamaha/CTuba/ycb861.jpg';
import PhotoEb321 from '../../Images/Tubas/Yamaha/EbTuba/yeb321.jpg';
import PhotoEb632 from '../../Images/Tubas/Yamaha/EbTuba/yeb632.jpg';
import PhotoF621 from '../../Images/Tubas/Yamaha/FTuba/yfb621.jpg';
import PhotoF822 from '../../Images/Tubas/Yamaha/FTuba/yfb822.jpg';

import "../../../stylesheet.css"



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
        <div class="topTableSection">
        <h4 >Yamaha</h4>
        <hr></hr>
        <br></br>
        <tr></tr>
        <table>
        <tr>
          <td><img 
           src={ YamahaLogo} 
           onClick={() => this.goCompany("BaS")} class="logoImage"/></td>
          <td>Heyey</td>
        </tr>
        </table>
        </div>
        
        <div class="tableSection">
        <h4 >BBb Tuba</h4>
        <hr></hr>
        <br></br>
        <tr></tr>
        <table class = "tubaTable">
        <tr>
        <td><img src={PhotoBb632}  onClick={() => this.goCompany("Miraphone")} class="tubaImage"/></td>
          <td><img src={PhotoBb641} onClick={() => this.goCompany("BaS")} class="tubaImage"/></td>
        </tr>
        <tr>
        <td><img src={PhotoBb841} onClick={() => this.goCompany("BaS")} class="tubaImage"/></td>
        <td></td>
        </tr>
        </table>
        </div>


        <div class="tableSection">
        <h4 >CC Tuba</h4>
        <hr></hr>
        <br></br>
        <tr></tr>
        <table class = "tubaTable">
        <tr>
        <td><img src={PhotoC822} onClick={() => this.goCompany("Miraphone")} class="tubaImage"/></td>
        <td><img src={PhotoC861} onClick={() => this.goCompany("BaS")} class="tubaImage"/></td>
        </tr>
        
        </table>
        </div>

        <div class="tableSection">
        <h4 >F Tuba</h4>
        <hr></hr>
        <br></br>
        <tr></tr>
        <table class = "tubaTable">
        <tr>
        <td><img src={PhotoF621} onClick={() => this.goCompany("Miraphone")} class="tubaImage"/></td>
        <td><img src={PhotoF822} onClick={() => this.goCompany("BaS")} class="tubaImage"/></td>
        </tr>
        </table>
        </div>


        <div class="tableSection">
        <h4 >EEb Tuba</h4>
        <hr></hr>
        <br></br>
        <tr></tr>
        <table class = "tubaTable">
        <tr>
        <td><img src={PhotoEb321}  onClick={() => this.goCompany("Miraphone")} class="tubaImage"/></td>
        <td><img src={PhotoEb632}  onClick={() => this.goCompany("Miraphone")} class="tubaImage"/></td>

        </tr>
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