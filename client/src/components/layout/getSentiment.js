import axios from "axios";

export default  async function getSentiment (comment){
    //const response = await fetch(" https://723ktgwmfa.execute-api.us-east-1.amazonaws.com/test/sentimentAnalysis?review=I love you");
    //var data = await response.json();
    //console.log(data)
    var url = "https://723ktgwmfa.execute-api.us-east-1.amazonaws.com/test/sentimentAnalysis?review="+comment
    console.log(url,"herhe");
    const promise = axios.get(url)
    const dataPromise = promise.then((response) => response.data)
    return dataPromise
    /*
    await axios.get(" https://723ktgwmfa.execute-api.us-east-1.amazonaws.com/test/sentimentAnalysis?review=I love you")
  .then(result => {console.log(result.data);return result.data;})
  .catch(error =>{ console.log('error:', error);return 0;}); */
  /*
  const dataPromise = axios.get(" https://723ktgwmfa.execute-api.us-east-1.amazonaws.com/test/sentimentAnalysis?review=I love you" )
      console.log("IIIIIIIIIIIIIIIIIII",)
    return dataPromise;*/
    /*
    const proxyurl = "https://tubasite.herokuapp.com/";
    const url ="https://723ktgwmfa.execute-api.us-east-1.amazonaws.com/test/sentimentAnalysis?review=I love you"; // site that doesn’t send Access-Control-*
fetch(url, {
    method: 'POST',
})
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    */
 }