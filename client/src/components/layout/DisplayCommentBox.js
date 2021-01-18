import React, { Component } from 'react';
import "../../stylesheet.css";
import ReactStars from "react-rating-stars-component";

export default class DisplayCommentBox extends Component {
    processTime(input){
        const date = new Date(input)
        return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();//prints expected format.

    }
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

                 {this.props.comment?  <p style={{margin:"0px"}}>Comment: {this.props.comment}</p>:<p style={{textAlign:"center"}}>No comment at this moment</p>}
                 {this.props.rating?  <p style={{margin:"0px"}}>Rating: {this.props.rating}</p>:null}

                 {this.props.author?  <p style={{margin:"0px"}}>Author: {this.props.author}</p>:null}
                 {this.props.time?  <p style={{margin:"0px"}}>Date: 
                 {
                 " "+this.processTime(this.props.time)
                 }
                 </p>:null}
                
              </div>

          </div>
      
      );
    }
}