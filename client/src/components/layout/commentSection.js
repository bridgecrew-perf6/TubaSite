import React, { Component } from "react";
import "../../stylesheet.css"
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
    console.log(newRating);
  };

class CommentSection extends Component {
    render() {
      return (
          
        <div>
            
            <div style={{marginBottom:"2%"}}><ReactStars
                count={5}
                onChange={ratingChanged}
                color={ "black"}
                size={20}
                activeColor="#ffd700"
                
            /></div>
            <textarea
            id="exampleFormControlTextarea1"
            placeholder="//Type your review here!!"
            rows="10"
            />

            <input
                type='submit' 
                style={{right:"2%", bottom:"2.5%",   position:"absolute"
            }}
            />
    </div>
      );
    }
  }
export default CommentSection;