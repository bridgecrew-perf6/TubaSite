import axios from "axios";

//Add a comment to a particular product
export const postReview = (userData) => {
    axios
      .post("/api/reviews/product/comments", userData)
      .then(res => console.log(res)) // print the message out 
      .catch(err =>
        console.log("ERROR: ",err)
      );
  };

//Get all comment to a particular product
  export const getAllReviews = (userData) => {
    //const promise =axios.get("/api/reviews/comments/"+userData );
    const dataPromise = axios.get("/api/reviews/comments/"+userData ).then((response) => {return response.data}).catch(err => {console.log("Halloworld");return null})
      
    return dataPromise;
  };