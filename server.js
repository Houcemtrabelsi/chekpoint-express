const express = require("express");
const app = express();
const port = 5000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server running on port ${port}`);
});



app.use(express.json())
app.use(express.static('public'))

