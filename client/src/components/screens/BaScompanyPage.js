import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import BaSLogo from'../Images/Company/tuba/bas.png';
import GR55Photo from'../Images/Tubas/BaS/BbTuba/bsgr55_full.png';
import GR51Photo from'../Images/Tubas/BaS/BbTuba/bsgr51_full.png';
import BS3198Photo from '../Images/Tubas/BaS/CTuba/bs3198_full.png';
import GR41Photo from '../Images/Tubas/BaS/CTuba/bsgr41_full.png';
import MRPCPhoto from '../Images/Tubas/BaS/CTuba/bsmrpc_full.png';
import BS3099Photo from '../Images/Tubas/BaS/FTuba/3099_full.jpg';
import BS3100Photo from '../Images/Tubas/BaS/FTuba/3100wgj-l.jpg';
import BS5100Photo from '../Images/Tubas/BaS/FTuba/bs5100w_full-1.jpg';
import MRPFPhoto from '../Images/Tubas/BaS/FTuba/bsmrpf_full.png';
import "../../stylesheet.css"



class BaSCompanyPage extends Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = {isGR55: true};
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
        <h4 >BaS</h4>
        <hr></hr>
        <br></br>
        <tr></tr>
        <table>
        <tr>
          <td><img 
           src={ BaSLogo} 
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
        <td><img onMouseEnter={(e) =>this.setState({isGR55:false})}  onMouseOut={(e) =>this.setState({isGR55:true})} 
           src={this.state.isGR55? GR55Photo: null} 
           
           
           onClick={() => this.goCompany("Miraphone")} class="tubaImage"/></td>
          <td><img src={GR51Photo} onClick={() => this.goCompany("BaS")} class="tubaImage"/></td>
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
        <td><img src={BS3198Photo} onClick={() => this.goCompany("Miraphone")} class="tubaImage"/></td>
        <td><img src={GR41Photo} onClick={() => this.goCompany("BaS")} class="tubaImage"/></td>
        </tr>
        <tr>
        <td><img src={MRPCPhoto} onClick={() => this.goCompany("BaS")} class="tubaImage"/></td>
        <td></td>
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
        <td><img src={BS3099Photo} onClick={() => this.goCompany("Miraphone")} class="tubaImage"/></td>
        <td><img src={BS3100Photo} onClick={() => this.goCompany("BaS")} class="tubaImage"/></td>
        </tr>
        <tr><td></td></tr>
        <tr>
        <td><img src={BS5100Photo} onClick={() => this.goCompany("BaS")} class="tubaImage"/></td>
        <td><img src={MRPFPhoto} onClick={() => this.goCompany("BaS")} class="tubaImage"/></td>
        </tr>
        </table>
        </div>

        

        

        </div>
        </div>
      );
    }
  }
BaSCompanyPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(BaSCompanyPage);