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
    let { name: descr, data } = res.data.dataset
    let abstraction = [ ]
    data.forEach((array) =>
      abstraction.push(
        array.filter((value) => {
          return (value == array[0] || value == array[4])
        }).map((value)=> {
          if (value == array[0])
            return new Date(value).getTime()
          if (value == array[4])
            return value
        }).slice(0,2)
      )
    )
    console.log(abstraction[0])
    callback(descr, abstraction)
  })
  .catch(err => {
    console.log("err")
    callback("Stock Does Not Exist")
  })
}

stockRouter.get('/:symbol', (req, res) => {
  let { symbol } = req.params
  res.writeHead(200, { "Content-Type": "application/json" })
  getStockData(symbol, (descr, data) => {
    res.end(JSON.stringify({ descr, data }))
  })
})

module.exports = stockRouter
