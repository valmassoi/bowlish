'use strict';

const stockRouter = require('express').Router();

stockRouter.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('test')
})

module.exports = stockRouter;
