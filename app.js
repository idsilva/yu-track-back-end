const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);






const server = app.listen(80, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
