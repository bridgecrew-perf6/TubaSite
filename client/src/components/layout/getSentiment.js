import axios from "axios";

export default  async function getSentiment (abc){
    //const response = await fetch(" https://723ktgwmfa.execute-api.us-east-1.amazonaws.com/test/sentimentAnalysis?review=I love you");
    //var data = await response.json();
    //console.log(data)
    axios.get(" https://723ktgwmfa.execute-api.us-east-1.amazonaws.com/test/sentimentAnalysis?review=I love you")
  .then(result => console.log('success:', result.data))
  .catch(error => console.log('error:', error));
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