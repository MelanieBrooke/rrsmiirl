const { Counter } = require("@smiirl/smiirl-library-js");
const express = require('express');
const port = 2005;
const dotenv = require('dotenv');
const app = express();
const fetch = require('node-fetch');

dotenv.config();

let youtubeAPIKey = process.env.YOUTUBE_API_KEY;
let channelID = process.env.YOUTUBE_CHANNEL_ID;
let youtubeURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelID}&key=${youtubeAPIKey}`;


app.listen(port, () => {
  console.log(`listening at port ${port}`);
});


app.get('/', (req, res) => {
  fetch(youtubeURL)
  .then(response => {
    return response.json()
  })
  .then(data => {
    return data.items[0].statistics.subscriberCount
  })
  .then(count => {
    res.send({number:count})
  })
  .catch(err => {
    res.send(err)
  })
});