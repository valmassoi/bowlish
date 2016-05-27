'use strict';

const stockRouter = require('express').Router()
const axios = require('axios')
if (process.env.NODE_ENV !== 'production')
  require('dotenv').config()


function getStockData(symbol, callback) {
  console.log("Getting data for", symbol)
  let today = new Date(),
      dd = today.getDate(),
      mm = today.getMonth()+1,
      yyyy = today.getFullYear()
  const apiKey = process.env.QUANDL_KEY,
        quandlUrl = 'https://www.quandl.com/api/v3',
        baseUrl = `${quandlUrl}/datasets/WIKI/${symbol}.json`,
        collapse = 'collapse=daily',
        date = `start_date=${yyyy-1}-${mm}-01&end_date=${yyyy}-${mm}-${dd}`,
        fullUrl = `${baseUrl}?${collapse}&${date}&order=asc&api_key=${apiKey}`
  console.log(fullUrl)
  axios.get(fullUrl).then(res => {
    let { name } = res.data.dataset
    console.log(name)
    callback(name)
  })
  .catch(err => {
    console.log("err")
    callback("Stock Does Not Exist")
  })
}

stockRouter.get('/:symbol', (req, res) => {
  let { symbol } = req.params
  res.writeHead(200, { "Content-Type": "application/json" })
  getStockData(symbol, (name) => {
    res.end(JSON.stringify(name))
  })
  // res.end(symbol)
})

module.exports = stockRouter
