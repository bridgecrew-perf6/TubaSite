import React, { Component } from 'react';
import "../../stylesheet.css";
import ReactStars from "react-rating-stars-component";

export default class DisplayCommentBox extends Component {
    render() {
      return( 
          <div>
              <div className="boxed">
                Author:{this.props.author} <br/>
                Rating: <div style={{marginBottom:"2%"}}><ReactStars
                count={5}
                edit={ false}
                value=  {this.props.rating}
                color={ "black"}
                size={20}
                activeColor="#ffd700"
                
            /></div><br/>
                Comment: {this.props.comment}<br/>
                
              </div>

          </div>
      
      );
    }
}