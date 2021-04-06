const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Connect To DB
mongoose
  .connect('mongodb://mongo:27017/myapp',{ useNewUrlParser: true })
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("Error on DB Connect");
});

// connect To Redis
const redisHost = 'redis';
const redisPort = '6379';
const client = redis.createClient('redis://redis:6379');

// check if Redis connected
if (client.connected) {
  console.log('Redis connected!');
  // client.set(key, JSON.stringify(value));
} else {
  console.log('Error! Redis not connected!');
}

//log error to the console if any occurs
client.on("error", (err) => {
  console.log("got error");
  console.log(err);
});

// client.get(this.testKey, (err,res) => {
//   if(err) 
//     throw err;

//   if(res === expectedValue)
//     return startApp();
// });

exports.test = function(req,res) {
  console.log(res)
};

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);