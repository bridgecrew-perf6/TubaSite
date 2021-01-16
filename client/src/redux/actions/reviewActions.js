import axios from "axios";


export const postReview = (userData) => dispatch => {
    axios
      .post("/api/review/post", userData)
      .then(res => console.log("Posted Message")) // re-direct to login on successful register
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };