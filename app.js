const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors')

require('dotenv').config();


// added by Kap
// we'll need to change this origin back to netlify's url when we go live which I'll set it up in ENV file

app.use(
  cors({
    origin: process.env.CORS_ORIGIN
  })
)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
// app.get('/', async (req, res, next) => {
//   res.send({message: "Hello World"});
// })





app.use('/', require('./routes/watches'));
app.use('/', require('./routes/carts'));
app.use('/', require('./routes/customers'));
app.use('/', require('./routes/admins'));
app.use('/', require('./routes/cart-watch'));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});