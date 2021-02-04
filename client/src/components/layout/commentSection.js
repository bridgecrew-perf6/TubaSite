import React, { Component } from "react";
import "../../stylesheet.css";
import ReactStars from "react-rating-stars-component";
import {postReview} from "../../redux/actions/reviewActions"
import getSentiment from "./getSentiment"

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state={
      showButton :false,
      model: props.model,
      user: props.user,
      commented:false,
      commentedAuthors: props.commentedAuthors
    };
  }
  ratingChanged = (newRating) => {
    this.setState({rating:newRating});
  };
  handleChange= (event) => {
    this.setState({comment :event.target.value});
  }
  async postNewReview(model,data){
    postReview(model,data);
    
  };
  submit = (event) =>{
    if(!this.state.commentedAuthors.includes(this.state.user)){
      if(this.state.rating && this.state.comment){
        this.postData(this.state.comment)
      }else{
        this.setState({showButton:true})
        setTimeout(() => {
          this.setState({showButton:false})
        }, 2500)
  
      }

    }else{
      alert("You have commented already! You are allowed to comment once only for each item!")
    }
    
  }
  async postData(comment){
     await getSentiment(comment).then(SentimentScore=>{
      console.log(SentimentScore,"Here");
      if(!this.state.commented){
        this.postNewReview(this.state.model,
        
        {
          "comment": this.state.comment,
          "author": this.state.user,
          "rating":this.state.rating,
          "sentiment":SentimentScore[0],
          "keywords":SentimentScore[1],
        }
        );
        this.setState({commented:true});
      }else{
        return;
      }
        
        
        console.log("Successfully sent");
        setTimeout(() => {
          window.location.reload();
        }, 5)
        
      }
      )
    
  }
    render() {
      
      return (


          
        <div style={{backgroundColor:"rgb(32, 31, 31)",borderRadius:"6px",padding:"5px",border:"3px solid darkgoldenrod"}}>
            <div >
              <ReactStars
                count={5}
                onChange={this.ratingChanged}
                border="3px solid white"
                size={20}
                activeColor="#ffd700"
                
            />
            </div>
            <textarea
            id="exampleFormControlTextarea1"
            placeholder="//Type your review here!! !!Please note that you could only submit your review once only for each item"
            rows="10"
            style={{backgroundColor:" rgb(90, 84, 84)",border:"3px solid white", color:"white"}}
            onChange={this.handleChange}
            />
            <p style={{left:"3%", bottom:"7%",visibility: this.state.showButton? "visible":"hidden", color:"darkred", 
             position:"absolute",fontSize:"14px"}}>**Please {" "}fill in BOTH the <br/>Rating and  Review section</p>
            
            
            <button
                onClick={this.submit}
                style={{ right:"10px",marginTop:"0.5%",marginBottom:"0.5%",
                fontSize:"20px", borderRadius:"6px",backgroundColor:" rgb(90, 84, 84)",
                color:"white", border:"2px solid white"
            }} >Submit</button>
    </div>
      );
    }
  }
export default CommentSection;