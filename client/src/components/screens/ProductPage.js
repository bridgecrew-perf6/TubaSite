import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import "../../stylesheet.css";
import mapping from "../layout/HashmapItem";
import {postReview,getAllReviews} from "../../redux/actions/reviewActions";
import TubaSidebar from "../layout/TubaDescriptionSidebar";

var bigData ="";
var comment=[];
class ProductPage extends Component {
    constructor(props) {
      super(props);
      console.log(props.match.params.name);
      const x =  mapping.get(props.match.params.name);
      this.state = { 
        params: props.match.params, 
        details: x,
        isPreviousReview:false,
        reviewData: "avs",
        x:''

      };
      this.getSomething();

    }
    async getSomething(){
      getAllReviews(this.state.params.name).then(data => { 
        this.realSetState(data); return}).catch(err => {console.log("Halloworld");console.log(err); return err})
      
    };
     realSetState(data){
      console.log("afenb");
       console.log(data);
      bigData =data;
      console.log(bigData);
      if(bigData!=null){
        for(var i =0;i<bigData.length/2;i++){
          console.log("Here");
          console.log(bigData.length);
          var x=bigData[i];
          console.log(x);
          comment.push([x.author,x.comment,x.createdAt]);
        }
        console.log("hihi");
        console.log(comment);
        console.log(comment.length);
      }
      //this.setState({reviewData:"afd"})
    }
    openNav() {
      console.log("HERE");
      document.getElementById("myTubaSidebar").style.width = "13%";
     
    }
    /*
     something = async ()=> {
      //const x = await getAllReviews("B&SGR55");
      var x = "";
      x =  await getAllReviews("B&SGR55",this.state);
      setTimeout(function() {
        console.log('hello');
        console.log(this.state.data);
        
      }, 1000);
      this.setState({reveiewData:x})
      

      console.log(this.state.data);

    }*/
    
    /*
     fetch =  function (productReview){return new Promise((resolve, reject) => {
      // ... make request
      const x = await getAllReviews(productReview);
      if(x!=null){
        resolve(x);
      }else{
        reject("Error");
      }
    })};*/

    
    
    
  render() {
      const { user } = this.props.auth;
       return (
         
         <div>
        <div style={{alignContent:"center",alignItems:"center"}}>
        <button className="openbtn" style={{left:"1%"}} onClick={this.openNav}>></button> 
        <TubaSidebar>
        <div id="myTubaSidebar" className="tubaSidebar">
        <br></br>
        <a href="#">
        <div>Rating: 0</div></a>
        <a href="#">
        <div>Key: {this.state.details[4]}</div></a>
        <a href="/dashboard">
        <div>Company: {this.state.details[2]}</div></a>
        <a href="#"onClick={this.onLogoutClick}>
        <div>Bell Size: {this.state.details[3]}</div></a>
        </div>
        </TubaSidebar></div>
        <div  style={{textAlign: "center"}}>
        <div className="split left">
        <h2 style={{  textDecoration: "underline"}}>{ this.state.details[0]}</h2>
          <div style={{alignItems:"center",marginTop:"8%"}}>
          <img src ={this.state.details[1]} className="tubaDisplayImage"></img>
            
        
          </div>
          
          

        </div>

        <div className="split right">
        <h2 >Review</h2>
        {this.state.isPreviousReview? null:
          <div className="centered">
            
            <h3>No Previous Review {this.state.reviewData}</h3>
            <h2></h2>
            
          </div>
    }
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


/*  <table className="newTable" style={{position:"fixed",bottom:"0px",border:"black"}}>
          <tbody style={{border:"black"}}>
          <tr style={{textAlign:"left"}}>
          <td>Rating: 0</td>
          <td>Key: {this.state.details[4]}</td>
          </tr>
          <tr style={{textAlign:"left"}}>
          <td>Company: {this.state.details[2]}</td>
          <td>Bell Size: {this.state.details[3]} </td>
          
          </tr>
          </tbody>
          </table>*/