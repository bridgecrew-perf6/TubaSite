import axios from "axios";

//Add a comment to a particular product
export const postReview = (productName,comment) => {
    axios
      .post("/api/reviews/comments/"+productName,comment)
      .then(res => console.log(res)) // print the message out 
      .catch(err =>
        console.log("ERROR: ",err)
      );
  };

//Get all comment to a particular product
  export const getAllReviews = (productName) => {
    //const promise =axios.get("/api/reviews/comments/"+userData );
    const dataPromise = axios.get("/api/reviews/comments/"+productName ).then((response) => {return response.data}).catch(err => {console.log("Error:");return null})
      
    return dataPromise;
  };

  export const getAllReviewsForRanking = () => {
    //const promise =axios.get("/api/reviews/comments/"+userData );
    const dataPromise = axios.get("/api/reviews" ).then((response) => {return response.data}).catch(err => {console.log("Error:");return null})
      
    return dataPromise;
  };
  