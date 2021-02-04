# TubaSite

link: https://tubasite.herokuapp.com (Apologies : Heroku free tier deployment may take several seconds to run.)
<br/>author: Issac To

## 1. 🎉 Introduction

Tubasite is a rating and reviewing website solely for the brass instrument tuba. 


1. Add a file inside the config folder to link your mongodb database
``` javascript
module.exports = {
    mongoURI: YourMongodbLink,
    useUnifiedTopology: true ,
    secretOrKey: "secret"
};
```
2. Set up the Expert.Ai file and put it on AWS Lambda and Gateway. References are on the bottom

3. Install and run the program
```javascript 
npm install
npm run dev  
```

## 2. 📌 Structure


### A. 💎 Full Stack Framework (MERN)
* Mongodb
* Express
* React
* Node

### B. 🚀 NLP Plugin
* Express.ai (Python)
* Amazon Lambda
* Amazon Gateway


## 3. 📝 Implementation


## 4. ⚠️ Problem
1. Due to the 

## 5. ↗️ Reference
1. https://github.com/therealexpertai/nlapi-python
2. https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
3. https://manivannan-ai.medium.com/import-custom-python-packages-on-aws-lambda-function-5fbac36b40f8


