import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import "../../stylesheet.css";
import {getAllReviewsForRanking} from "../../redux/actions/reviewActions";
import SlidingRank from "../layout/slindingRanks";



var fetchedData =false;
var ratingMap = [];
var sentimentMap = [];


class RankingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      category : "Rating"
    };
  }

  switch(){
    switch(this.state.category){
      case  "Rating":
        return <SlidingRank rankings={this.state.rankings} indicator={0}/>
      case  "Sentiment":
        return <SlidingRank rankings={this.state.sentimentRatings} indicator={0}/>
    }

  }

  componentDidMount() {
   this.fetchData();
   //this.fetchSentimentData();
  }

  async fetchData(){
    getAllReviewsForRanking().then(data => { 
       this.setData(data)}).catch(err => {console.log("Error");console.log(err); return err})
    
  };
  changeCategory=(category)=>{
    this.setState({category:category})
  }
  
  setData(data){
     for(var i of data){
       const modelName = i.model;
       var x =0;
       var sentimentX =0;
       var commentLength = i.comments.length;
       for (var j of i.comments){
         if(j.rating!="NaN") x+=j.rating;
         if(j.sentiment!="NaN") sentimentX+=j.sentiment;
       }
       ratingMap.push({modelName : modelName,rating: x==0?x:x/commentLength});
       sentimentMap.push({modelName : modelName,rating: sentimentX==0?sentimentX:sentimentX/commentLength});
     }

     
    ratingMap.sort(function (vote1, vote2) {
      if (vote1.rating > vote2.rating) return -1;
      if (vote1.rating < vote2.rating) return 1;
    });
    sentimentMap.sort(function (vote1, vote2) {
      if (vote1.rating > vote2.rating) return -1;
      if (vote1.rating < vote2.rating) return 1;
    });
     this.setState({rankings: ratingMap.slice(0,3)});
     this.setState({sentimentRatings: sentimentMap.slice(0,3)});
  }


  render() {
      
      
  return (
    <div style={{backgroundColor:"rgb(36, 34, 34)", height:"100%"}} >
    <div style={{textAlign:"center", justifyContent:"center",alignItems:"center", height:"100%"}}>
        <br/>
        <h4> 
        <a style={{display: "inline"}} onClick={()=>this.changeCategory("Rating")}> {this.state.category=="Rating"?<p style={{color:"darkgoldenrod",display: "inline"}}>Rating</p>:<p  style={{color:"black",display: "inline"}}>Rating</p>} | </a>
        <a style={{display: "inline"}} onClick={()=>this.changeCategory("Sentiment")}> {this.state.category=="Sentiment"?<p style={{color:"darkgoldenrod",display: "inline"}}>Sentiment Rating</p>:<p  style={{color:"black",display: "inline"}}>Sentiment Rating</p>} </a>
        </h4>
       </div>
       <div style={{textAlign:"center",justifyContent:"center",alignItems:"center" }}  >
        {this.switch()}
       
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