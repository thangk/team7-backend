const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.get('/', async (req, res, next) => {
  res.send({message: "Hello World"});
})
app.use('/api', require('./routes/route'));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});