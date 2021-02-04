# TubaSite

Link: https://tubasite.herokuapp.com 
<br/>About: Review and Rating Website with NLP
<br/>Author: Issac To

<hr/>




# 1. Introduction
## A.💡 Inspiration
### 📣 A Platform for Tuba
Getting a tuba is costly. A professional tuba costs at least 9000 USD. 
Therefore, a lot of research is needed before purchasing one.
However, there is no specialized platform nor forum solely for tuba models on the web currently.


###  🔈 NLP for Rating
Have you ever got confused seeing generous comments but with a low rating meanwhile the opposite on a review website? Everyone has their own way for rating and it's hard to get a fair way to standardize the ra. Yet, wouldn't it be fairer if the rating comes from the comments, the experience instead?

## B.❓What it does
Tuba site is a tuba review website.  Aside from review and rating, it also provides analysis results such as highest average rating, highest average comment rating, and top mentioned word identification.



# 2. 📌 Structure

### A. 💎 Full Stack Framework (MERN)
* Mongodb
* Express
* React
* Node

### B. 🚀 NLP Plugin
* Express.ai (Python)
* Amazon Lambda
* Amazon Gateway

# 3.  📝 Implementation

1. Fill in your mongodb database uri inside the config/key.js file
``` javascript
module.exports = {
    mongoURI: YourMongodbLink,
    useUnifiedTopology: true ,
    secretOrKey: "secret"
};
```

2. Fill in your Expert.Ai credentials inside expertAi.py and deploy it on AWS Lambda and Gateway. References are on the bottom

 ``` javascript

os.environ["EAI_USERNAME"] = Your_Experai_Username
os.environ["EAI_PASSWORD"] = Your_Experai_Password
```
3. Install and run the program

``` 
npm install
cd client
npm install
cd ..
npm run dev 
```

4. Go to http://localhost:3000

# 4.💡 Reflection

## A.📈  Accomplishments that we're proud of
Built the whole project from scratch myself.

## B.💾   What we learned
Planning, programming, and problem-solving skills 

## C.➡️ What's next for TubaSite
Improve the UIUX and look forward to deploying it on a more powerful platform if awarded with the prize.


