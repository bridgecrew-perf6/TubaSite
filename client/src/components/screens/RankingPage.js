import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import "../../stylesheet.css";
import {getAllReviewsForRanking} from "../../redux/actions/reviewActions";
import SlidingRank from "../layout/slindingRanks";
import newLogo from "../Images/Logos/new.svg";
import commentLogo from "../Images/Logos/message.svg";
import TubaSidebar from "../layout/TubaDescriptionSidebar";
import expertAiLogo from "../Images/Company/expertAI.png";
import TagCloud from "../layout/tagCloud";
var fetchedData =false;
var ratingMap = [];
var sentimentMap = [];
var keywordsMap =new Map();


class RankingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      category : "Rating",
      looped:false
    };
  }

  switch(){
    switch(this.state.category){
      case  "Rating":
        return <SlidingRank rankings={this.state.rankings} indicator={0}/>
      case  "Sentiment":
        return <SlidingRank rankings={this.state.sentimentRatings} indicator={0}/>
      case  "Cloud":
        return <TagCloud data={keywordsMap} indicator={1}/>

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
         //keywordsMap
         if(j.rating!="NaN") x+=j.rating;
         if(j.sentiment!="NaN") sentimentX+=j.sentiment;
         if(j.keywords!=null){
           for( var i =0;i<j.keywords.length;i++ ){
              if(keywordsMap.has(j.keywords[i])){
                keywordsMap.set(j.keywords[i],keywordsMap.get(j.keywords[i])+1)
              }else{
                keywordsMap.set(j.keywords[i],1)
              }
           }
         };
         console.log("UUUU")
         console.log(keywordsMap)
         this.setState({looped:true})

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
  openNav() {
    document.getElementById("myTubaSidebar").style.width = "13%";
   
  }


  render() {
      
      
  return (
    
    <div style={{backgroundColor:"rgb(36, 34, 34)", height:"100%"}} >
      <TubaSidebar >
        <div id="myTubaSidebar" className="tubaSidebar">
          <div style={{paddingTop:"10vh",paddingRight:"2vh",paddingLeft:"1vh",alignContent:"center"}}>
            <div style={{marginBottom:"7vh"}}>
            <img src = {commentLogo} style={{width:"19vh",backgroundColor:"white", opacity:"90%", borderRadius:"1vh", padding:"1vh"}}/>
            <p style={{color:"white"}}>Tubasite uses the comment submitted in each review to {" "}
            {this.state.category=="Sentiment"? <p style={{display: "inline"}}>calculate the average score based on the sentiment detected in the section</p>:<p style={{display: "inline"}}>calculate the most frequently used keywords</p>}
            </p>
            </div>
            <img src={expertAiLogo} style={{width:"19vh",backgroundColor:"white", opacity:"90%", borderRadius:"1vh"}}/>
          <p style={{color:"white"}}>A huge shout-out to expert.ai who provides the NLP API. This could not be done without their machine learning models</p>
          </div>
        </div>
        </TubaSidebar>
     {this.state.category=="Sentiment"||this.state.category=="Cloud"?<button className="leftDescriptionButton" style={{backgroundColor:"black"}}  onClick={this.openNav}>?</button>: null}

    <div style={{textAlign:"center", justifyContent:"center",alignItems:"center", height:"100%"}}>
        <br/>
        <h4 style={{marginBottom:"1.2%"}}> 
        <a style={{display: "inline"}} onClick={()=>this.changeCategory("Rating")}> {this.state.category=="Rating"?<p style={{color:"darkgoldenrod",display: "inline"}}>Rating</p>:<p  style={{color:"rgb(102, 95, 95)",display: "inline"}}>Rating</p>} 
        </a>

        <p style={{display: "inline",color:"rgb(102, 95, 95)"}} >|</p>

        <a style={{display: "inline"}} onClick={()=>this.changeCategory("Sentiment")}> {this.state.category=="Sentiment"?<div style={{display:"inline"}}><p style={{color:"darkgoldenrod",display: "inline"}}>Sentiment Rating</p><img src={newLogo} fill="yellow" style={{width:"4vh"}}/></div>:
        <div style={{display:"inline"}}><p style={{color:"rgb(102, 95, 95)",display: "inline"}}>Sentiment Rating</p><img src={newLogo} style={{width:"4vh"}}/></div>
         } </a>

        <p style={{display: "inline",color:"rgb(102, 95, 95)"}} >|</p>

        <a style={{display: "inline"}} onClick={()=>this.changeCategory("Cloud")}> {this.state.category=="Cloud"?<div style={{display:"inline"}}><p style={{color:"darkgoldenrod",display: "inline"}}>Keywords Cloud</p><img src={newLogo} fill="yellow" style={{width:"4vh"}}/></div>:
        <div style={{display:"inline"}}><p style={{color:"rgb(102, 95, 95)",display: "inline"}}>Keywords Cloud</p><img src={newLogo} style={{width:"4vh"}}/></div>
         } </a>
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