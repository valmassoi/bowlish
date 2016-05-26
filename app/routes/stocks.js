'use strict';

const stockRouter = require('express').Router();
if (process.env.NODE_ENV !== 'production')
  require('dotenv').config()

const apiKey = process.env.QUANDL_KEY
const quandlUrl = 'https://www.quandl.com/api/v3'
const symbol = "FB"
const baseUrl = `${quandlUrl}/datasets/WIKI/${symbol}.json`
const collapse = 'collapse=monthly'
const date = 'start_date=2015-01-01&end_date=2016-01-01'
const fullUrl = `${baseUrl}?${collapse}&${date}&order=asc&api_key=${apiKey}`


stockRouter.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('test')
})

module.exports = stockRouter;
