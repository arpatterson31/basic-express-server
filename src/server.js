'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

app.use(express.json());
app.use(logger);

app.get('/person', validator, (req, res) => {
  res.status(200).send({ name: req.query.name })
})

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Gurl we up on: ${port}`);
    });
  }
}