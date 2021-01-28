import { TagCloud } from 'react-tagcloud'
import React, { Component } from 'react';
import "../../stylesheet.css";

var data=  []
var indicator =0;
export default class DisplayCommentBox extends Component {
    constructor(props){
        super(props);
        this.state = { looped:false
        };
        if(indicator==0){
            console.log(this.props.data,"Here")
            var checkArray = []
            data = []
            for (let [key, value] of this.props.data) {
                if(!checkArray.includes(key) &&!this.state.looped) {
                    console.log({ value:key, count: value })
                    data.push({ value:key, count: value })
                    checkArray.push(key)
                } 
            }
            this.setState({looped:true})
            console.log(data)
        }
    }
    render() {
        {indicator+=this.props.indicator}
    return(
        <div style={{height:"70vh",alignContent:"center", paddingTop:"20vh"}}>
            <div  style={{top: "500px"}}>
            <TagCloud
            minSize={30}
            maxSize={60}
            tags={data}
           
            />
            </div>
        </div> 
      );
    }
}

