import React, { Component } from 'react';
import "../../stylesheet.css";
import ReactStars from "react-rating-stars-component";

export default class DisplayCommentBox extends Component {
    render() {
      return( 
          <div>
              
              <div className="boxed">
              {this.props.comment ?
               <div style={{marginBottom:"2px"}}>
                <ReactStars
                count={5}
                edit={ false}
                value=  {this.props.rating}
                color={ "black"}
                size={20}
                activeColor="#ffd700"/></div> : null }

                 {this.props.comment?  <p style={{margin:"0px"}}>Comment: {this.props.comment}</p>:<p>No comment at this moment</p>}
                 {this.props.author?  <p style={{margin:"0px"}}>Author: {this.props.author}</p>:null}

                
              </div>

          </div>
      
      );
    }
}