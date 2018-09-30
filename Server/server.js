const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/router.js");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(routes);


app.listen(PORT, () => console.log(`Server listening on ${PORT}`));