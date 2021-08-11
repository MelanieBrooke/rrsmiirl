const { Counter } = require("@smiirl/smiirl-library-js");
const express = require('express');
const port = 2005;
const app = express();

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});


app.get('/', (req, res) => {
  res.send({number:42})
});