import React, { Component } from 'react';
import "../../stylesheet.css";

export default class DisplayCommentBox extends Component {
    render() {
      return( 
          <div>
              <div className="boxed">
                Author:{this.props.author} <br/>
                Rating: {this.props.rating}<br/>
                Comment: {this.props.comment}<br/>
                
              </div>

          </div>
      
      );
    }
}