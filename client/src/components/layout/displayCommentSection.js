import React, { Component } from "react";
import "../../stylesheet.css"
import ReactStars from "react-rating-stars-component";

class CommentSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div className="center-col">
        {this.props.children}
        </div>
            
      );
    }
  }
export default CommentSection;