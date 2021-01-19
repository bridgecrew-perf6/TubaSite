import React, { Component } from 'react';
import "../../stylesheet.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import hashmapItem from "../layout/HashmapItem";



export default class DisplayCommentBox extends Component {

    makingBox(modelName,rating){
        const inputDetails = hashmapItem.get(modelName);
        const title= inputDetails[0];
        const imageTuba = inputDetails[1];
        const company = inputDetails[2];
       
        return(
        <div className="each-slide" style={{backgroundColor: "white",justifyContent:"center"}}>
            <div className="image-container">
              <img src={imageTuba} style={{width:"17%"}}/>
              <p>{company+" "+title}</p>
              <br></br>
              </div>
        </div>)

    }
    render() {
    return( 
        
        <div>
            {console.log("hehe",this.props.rankings)}
            { this.props.rankings!=null?
            <Slide style={{backgroundColor: "white"}}>{ this.props.rankings.map((message) =>  this.makingBox(message.modelName,message.rating))}

        </Slide>:null}
        </div>
      );
    }
}


//{this.props.rating?  <p style={{margin:"0px"}}>Rating: {this.props.rating}</p>:null}
//