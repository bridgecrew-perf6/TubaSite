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
  submit= (event) =>{
    console.log(getSentiment("abc"))
    if(!this.state.commentedAuthors.includes(this.state.user)){
      if(this.state.rating && this.state.comment){
     
        this.postNewReview(this.state.model,
        {
          "comment": this.state.comment,
          "author": this.state.user,
          "rating":this.state.rating
        }
        );
        console.log("Successfully sent");
        window.location.reload();
      }else{
        this.setState({showButton:true})
        setTimeout(() => {
          this.setState({showButton:false})
          console.log('This will run after 1 second!')
        }, 3000)
  
      }

    }else{
      alert("You have commented already! You are allowed to comment once only for each item!")
    }
    
  }
    render() {
      
      return (


          
        <div style={{backgroundColor:"rgb(32, 31, 31)",borderRadius:"6px",padding:"5px",border:"3px solid darkgoldenrod"}}>
            <div style={{marginBottom:"2%",left:"50%"}}>
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