const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(express.json());
// app.use(helmet());

app.use('/', express.static(__dirname + '/public'));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});