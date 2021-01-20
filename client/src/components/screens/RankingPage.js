import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import "../../stylesheet.css";
import {getAllReviewsForRanking} from "../../redux/actions/reviewActions";
import SlidingRank from "../layout/slindingRanks";



var fetchedData =false;
var ratingMap = [];


class RankingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {height: props.height};
  }

  componentDidMount() {
   this.fetchData();
  }
  async fetchData(){
    getAllReviewsForRanking().then(data => { 
       this.setData(data)}).catch(err => {console.log("Halloworld");console.log(err); return err})
    
  };
  setData(data){
    console.log("huhih");
    console.log(data);
     for(var i of data){
       const modelName = i.model;
       var x =0;
       var commentLength = i.comments.length;
       for (var j of i.comments){
         if(j.rating!="NaN") x+=j.rating;
       }
       ratingMap.push({modelName : modelName,rating: x==0?x:x/commentLength});
     }

     console.log(ratingMap);
     
    ratingMap.sort(function (vote1, vote2) {

      // Sort by votes
      // If the first item has a higher number, move it down
      // If the first item has a lower number, move it up
      if (vote1.rating > vote2.rating) return -1;
      if (vote1.rating < vote2.rating) return 1;
    
    });
    console.log(ratingMap)


     console.log("aekjf")
     this.setState({rankings: ratingMap.slice(0,3)});
    
  }


  render() {
      
      
  return (
    <div style={{textAlign:"center", justifyContent:"center",alignItems:"center"}}>
      <div style={{ marginBottom: "4vh"}}>
       <h2>Top 3 Rated</h2>
       </div>
       <div style={{textAlign:"center",justifyContent:"center",alignItems:"center" ,marginTop:"4vh"}}  >
       <SlidingRank rankings={this.state.rankings}/>
       
       </div>
    </div>
    );
  }
}
RankingPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(RankingPage);


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