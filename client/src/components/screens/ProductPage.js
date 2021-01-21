import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import "../../stylesheet.css";
import mapping from "../layout/HashmapItem";
import {getAllReviews} from "../../redux/actions/reviewActions";
import TubaSidebar from "../layout/TubaDescriptionSidebar";
import ratingLogo from "../Images/Logos/rating.svg";
import keyLogo from "../Images/Logos/musical-note.svg";
import companyLogo from "../Images/Logos/building.svg";
import bellLogo from "../Images/Logos/size.svg";
import  CommentSection from "../layout/commentSection";
import CommentDisplaySection from "../layout/displayCommentSection";
import CommentBox from "../layout/DisplayCommentBox";



var bigData ="";
var comment=[];
var commentedAuthors=[];
var totalRating=0;
var fetchedData =false;
class ProductPage extends Component {
    constructor(props) {
      super(props);
      const x =  mapping.get(props.match.params.name);
      this.state = { 
        type:props.match.params.type,
        params: props.match.params, 
        details: x,
        isPreviousReview:false,
        reviewData: "avs",
        x:'',
        commentStorage:[],
        averageRating:"NA"

      };

    }
    componentDidMount() {
      this.fetchData();
    }
    componentDidUpdate() {
        this.fetchData();
        
    }

    async fetchData(){
      getAllReviews(this.state.params.name).then(data => { 
        this.realSetState(data); fetchedData=true ;return;}).catch(err => {console.log("Error");console.log(err); return err})
      
    };
     realSetState(data){
       if(fetchedData==false){
        console.log(data);
       bigData =data;
       if(bigData!=null){
         for(var i =bigData.length-1;i>-1;i--){
           var x=bigData[i];
           comment.push([x.author,x.comment,x.createdAt,x.rating]);
           commentedAuthors.push(x.author);
           totalRating+=x.rating;
         }
         this.setState({reviewData: comment.length});
         this.setState({averageRating: Math.round((totalRating/ comment.length) * 10) / 10})

       }
      
      }
    }
    
    openNav() {
      document.getElementById("myTubaSidebar").style.width = "13%";
     
    }
    
    
    
  render() {
      const { user } = this.props.auth;
       return (
         
        <div>
          <button className="leftDescriptionButton"  onClick={this.openNav}>></button> 
        {this.state.type=="tuba"?
        <div>
        
        <TubaSidebar>
        <div id="myTubaSidebar" className="tubaSidebar">
        <br></br>
        <a href="#">
        <div><img  src={ratingLogo} className="NewNavDescriptionLogo" style={{verticalAlign: "middle",marginBottom:"1vh"}}/></div>
        <div className = "BoxInsideSideBar">Average Rating: {this.state.averageRating} </div></a>
        <a href="#">
        <div ><img  src={keyLogo} className="NewNavDescriptionLogo" style={{verticalAlign: "middle" ,marginBottom:"1vh"}}/></div>
        <div  className = "BoxInsideSideBar">Key: {this.state.details[4]}</div></a>
        <a href="#">
        <div><img  src={companyLogo} className="NewNavDescriptionLogo" style={{verticalAlign: "middle" ,marginBottom:"1vh"}}/></div>  
        <div  className = "BoxInsideSideBar">Company: {this.state.details[2]}</div></a>
        <a href="#"onClick={this.onLogoutClick}>
        <div><img  src={bellLogo} className="NewNavDescriptionLogo" style={{verticalAlign: "middle" ,marginBottom:"1vh"}}/></div>  

        <div  className = "BoxInsideSideBar">Bell Size: {this.state.details[3]}</div></a>
        </div></TubaSidebar></div>:



        <div>
         <TubaSidebar>
         <div id="myTubaSidebar" className="tubaSidebar">
         <br></br>
         <a href="#">
        <div><img  src={companyLogo} className="NewNavDescriptionLogo" style={{verticalAlign: "middle"}}/></div>  
        <div>Company: {this.state.details[2]}</div></a>
        <a href="#">
        <div><img  src={keyLogo} className="NewNavDescriptionLogo" style={{verticalAlign: "middle"}}/></div>
        <div>Key: {this.state.details[4]}</div></a>


         </div>
         </TubaSidebar>
         </div>
        
        }


        <div className="main-container">
          <div className="left-container">
          <h2 style={{  textDecoration: "underline"}}>{ this.state.details[0]}</h2>
                <div style={{alignItems:"center",marginTop:"8%"}}>
                  {
                    this.state.type=="tuba"?(
                    this.state.details[2]=="Yamaha"?
                   <img src ={this.state.details[1]} className="tubaDisplayImageYamaha"></img>:
                   <img src ={this.state.details[1]} className="tubaDisplayImage"></img>
                   ):
                   <img src ={this.state.details[1]} className="mouthpeiceDisplayImage"></img>
                  }
                </div>

            
            </div>
          <div className="right-container">
              <div className="half-container1">
              <h3 style={{marginBottom:"0.5%",color:"darkgoldenrod"}} >Reviews</h3><hr style={{width:"100%",marginTop:"0%",borderColor:"darkgoldenrod"}}></hr>
              <br/>
                <CommentDisplaySection >
                  {
                    
                    //this.state.commentStorage

                    (comment.length!=0)?
                    comment.map((message) =>  <CommentBox  author={message[0]} rating = {message[3]} comment={message[1]} time={message[2]}/>)
                    :<CommentBox/>
                  }
                 
                </CommentDisplaySection>
              </div>
              <div className="half-container2">
              <h3 style={{marginBottom:"0.5%",color:"darkgoldenrod"}}>Your Review</h3>
              <hr style={{width:"100%",marginBottom:"1.5%",borderColor:"darkgoldenrod"}}></hr>

              <CommentSection user = {user.name} model={this.state.params.name} commentedAuthors={commentedAuthors}/>
         </div>
        
    </div>
</div>
       
        </div>
      );
    }
  }
  ProductPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(ProductPage);

