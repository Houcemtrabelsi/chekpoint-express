const express = require("express");
const app = express();
const port = 5000;
const validateTime = require("./midlware/timer");
app.use(express.json());
pp.use(validateTime);
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server running on port ${port}`);
});



app.use(express.json())
app.use(express.static('public'))

