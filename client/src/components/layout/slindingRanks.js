import React, { Component } from 'react';
import "../../stylesheet.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import hashmapItem from "./HashmapItem";
import oneLogo from "../Images/Ranking/one.svg";
import twoLogo from "../Images/Ranking/peace.svg";
import threeLogo from "../Images/Ranking/three.svg";

var indicator = 0;
export default class DisplayCommentBox extends Component {
    constructor(props){
        super(props);
        this.state={
            indicator: 0
        }
    }
    switchForPhotoDisplayWidth(company){
        switch(company){
            case "Meinl Weston":
                return "18%";
            case "B & S":
                return "18%";
            case "Miraphone":
                return "19.8%";
            case "Besson":
                return "18%";
            case "yamaha":
                return "30.4%";
            case "Denis Wick":
                return "30.4%";
            case "Bach":
                return "30.4%";
            case "Perantucci":
                return "34.7%";
                
        }
    }

    switch(){
        indicator+=1;
        console.log(indicator);
        switch(indicator){
            case 1:
                return oneLogo;
            case 2:
                return  twoLogo;
            case 3:
                return threeLogo;
        }
    }

    makingBox(modelName,rating){
        const inputDetails = hashmapItem.get(modelName);
        const title= inputDetails[0];
        const imageTuba = inputDetails[1];
        const company = inputDetails[2];
       
        return(
        <div className="each-slide"
         style={{backgroundColor: "rgb(90, 84, 84)", padding:"2vh",justifyContent:"center",textAlign:"center",border:"7px solid rgb(80, 95, 95)",width:"100%"}}>
            <div className="image-container" style={{minHeight:"50%"}}>
              <img src={imageTuba} 
              
              style={{
                  width: this.switchForPhotoDisplayWidth(company)
                  
                  
                  }}/>
              <h3>Model: {company+" "+title} 
             
              <img src= {this.switch()} style={{marginLeft:"22px",width:"7vh"}}/>
              
              
               </h3>
              <div></div>
              </div>
        </div>)

    }
    render() {
        {indicator=this.props.indicator}
    return( 
        
        <div>
           
            { this.props.rankings!=null?
            <Slide style={{backgroundColor: "white"}}>{ this.props.rankings.map((message) =>  this.makingBox(message.modelName,message.rating))}

        </Slide>:null}
        </div>
      );
    }
}


//{this.props.rating?  <p style={{margin:"0px"}}>Rating: {this.props.rating}</p>:null}
//company=="Yamaha"? "30.4%":"18%"