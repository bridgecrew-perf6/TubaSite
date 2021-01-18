import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import "../../stylesheet.css";
import mapping from "../layout/HashmapItem";
import {postReview,getAllReviews} from "../../redux/actions/reviewActions";
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
        commentStorage:[]

      };

    }
    componentDidMount() {
      this.fetchData();
    }
    componentDidUpdate() {
    console.log("WHYO")
        this.fetchData();
      
        
    }
    async fetchData(){
      getAllReviews(this.state.params.name).then(data => { 
        this.realSetState(data); fetchedData=true ;return;}).catch(err => {console.log("Halloworld");console.log(err); return err})
      
    };
     realSetState(data){
       if(fetchedData==false){
        console.log("afenb");
        console.log(data);
       bigData =data;
       if(bigData!=null){
         for(var i =bigData.length-1;i>-1;i--){
           var x=bigData[i];
           comment.push([x.author,x.comment,x.createdAt]);
         }
         this.setState({reviewData: comment.length})

       }
      
      }
    }
    
    openNav() {
      console.log("HERE");
      document.getElementById("myTubaSidebar").style.width = "13%";
     
    }
    
    
    
  render() {
      const { user } = this.props.auth;
      {console.log("bafeibibf",this.state.params.name," faef ",user.name)}
       return (
         
        <div>
          <button className="openbtn" style={{left:"1%"}} onClick={this.openNav}>></button> 
        {this.state.type=="tuba"?
        <div>
        
        <TubaSidebar>
        <div id="myTubaSidebar" className="tubaSidebar">
        <br></br>
        <a href="#">
        <div><img  src={ratingLogo} className="NewNavDescriptionLogo" style={{verticalAlign: "middle"}}/></div>
        <div>Rating: 0</div></a>
        <a href="#">
        <div><img  src={keyLogo} className="NewNavDescriptionLogo" style={{verticalAlign: "middle"}}/></div>
        <div>Key: {this.state.details[4]}</div></a>
        <a href="#">
        <div><img  src={companyLogo} className="NewNavDescriptionLogo" style={{verticalAlign: "middle"}}/></div>  
        <div>Company: {this.state.details[2]}</div></a>
        <a href="#"onClick={this.onLogoutClick}>
        <div><img  src={bellLogo} className="NewNavDescriptionLogo" style={{verticalAlign: "middle"}}/></div>  

        <div>Bell Size: {this.state.details[3]}</div></a>
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
              <h2 style={{marginBottom:"0.5%"}} >Reviews</h2><hr style={{width:"100%",marginTop:"0%",borderColor:"black"}}></hr>
                <CommentDisplaySection >
                  {
                    
                    console.log("ehere"),
                    console.log(comment),
                    //this.state.commentStorage

                    (comment.length!=0)?
                    comment.map((message) =>  <CommentBox  author={message[0]} rating = {1} comment={message[1]} time={message[2]}/>)
                    :<CommentBox/>
                  }
                 
                </CommentDisplaySection>
              </div>
              <div className="half-container2">
              <h3 style={{marginBottom:"0.5%"}}>Your Review</h3><hr style={{width:"100%",marginTop:"0%",borderColor:"black"}}></hr>

              <CommentSection user = {user.name} model={this.state.params.name}/>
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

