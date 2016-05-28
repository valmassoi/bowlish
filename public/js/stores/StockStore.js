import { EventEmitter } from 'events'
// import $ from 'jquery'
import _ from 'lodash'

import dispatcher from '../dispatcher'

class StockStore extends EventEmitter {
  constructor() {
    super()
    this.stocks = [ ]
    this.data = [ ]
    this.deleteSymbol = ""
  }

  getData() {
    return this.data
  }

  getCards() {
    return this.stocks
  }

  getDeleteSymbol() {
    return this.deleteSymbol
  }

  addData(symbol, data) {
    this.data.unshift({
      symbol,
      data
    })
  }

  addCard(symbol, descr) {
    this.stocks.unshift({
      symbol,
      descr
    })
  }

  deleteCard(symbol) {
    console.log("pulling", symbol)
    this.deleteSymbol = symbol
    _.pullAllBy(this.stocks, [{symbol}], 'symbol')
    _.pullAllBy(this.data, [{symbol}], 'symbol')
  }

  handleActions(action) {
  console.log(action.type)
  let { symbol, json } = action
    switch(action.type) {
      case "ADD_CARD": {
        this.addCard(symbol, json.descr)
        this.addData(symbol, json.data)
        this.emit("change")
        break
      }
      case "GOT_DATA": {
        this.emit("data_add")
        break
      }
      case "DELETE_CARD": {
        this.deleteCard(symbol)
        this.emit("change")
        this.emit("data_remove")
        break
      }
    }
  }
}
const stockStore = new StockStore
dispatcher.register(stockStore.handleActions.bind(stockStore))
// window.StockStore = StockStore//TODO for testing
// window.dispatcher = dispatcher//TODO for testing
export default stockStore
