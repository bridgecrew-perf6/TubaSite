import React, { Component } from "react";
import "../../stylesheet.css"

class CommentSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div className="containerForComments">
        <div className="center-col" >
        {this.props.children}
        </div>
        </div>
            
      );
    }
  }
export default CommentSection;