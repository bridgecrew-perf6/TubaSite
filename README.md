# TubaSite
<br/>
<p align="center">
<img src="Images/logo.png" width="400px" />
</p>
<br/>
<hr/>

| Login+Comment        | Review + Ranking           | 
| ------------- |:-------------:| 
| <img src="Images/Demonstration1.gif" backgroundColor= white width=100%/>   | <img src="Images/Demonstration2.gif" width=100%/> |


Link: https://tubasite.herokuapp.com 
<br/>About: Multi-Rating
<br/>Author: Issac To

## 1. 🎉 Introduction

Tubasite is a rating and reviewing website solely for tuba's models.  The website is unique in that natural language processing technologies are used, which includes sentiment analysis and key elements identification. As such, not only could users look at the highest rated tuba model, but also they could look at the highest ranked tuba models based on sentiment analysis. A huge shout-out to expert.ai for providing such awesome technology.

### High Level Graph

<p align="center">
<img src="Images/Graph.png" width="700px">
</p>



## 2.  📝 Implementation

1. Fill in your mongodb database uri inside the config/key.js file
``` javascript
module.exports = {
    mongoURI: YourMongodbLink,
    useUnifiedTopology: true ,
    secretOrKey: "secret"
};
```
2. Fill in your own Expert.Ai credentials inside expertAi.py and deploy it on AWS Lambda and Gateway. References are on the bottom

``` javascript

os.environ["EAI_USERNAME"] = Your_Experai_Username
os.environ["EAI_PASSWORD"] = Your_Experai_Password

```

3. Install and run the program
```javascript 
npm install
cd client
npm install
cd ..
npm run dev  
```

4. Go to http://localhost:3000

## 3. 📌 Structure



### A. 💎 Full Stack Framework (MERN)
* Mongodb
* Express
* React
* Node

### B. 🚀 NLP Plugin
* Express.ai (Python)
* Amazon Lambda
* Amazon Gateway




## 4.  ⚠️ Problem
1. Due to the limitations of Mongodb free tier scheme, tubasite doesn't allow clients to edit, comment and like their comments. 
2. Due to the limitations of Heroku free tier deployment scheme, it may take several seconds to load the heroku website

## 5.  ↗️ Reference
1. https://github.com/therealexpertai/nlapi-python
2. https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
3. https://manivannan-ai.medium.com/import-custom-python-packages-on-aws-lambda-function-5fbac36b40f8


