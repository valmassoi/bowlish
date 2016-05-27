import { EventEmitter } from 'events'
// import $ from 'jquery'
import _ from 'lodash'

import dispatcher from '../dispatcher'

class StockStore extends EventEmitter {
  constructor() {
    super()
    this.stocks = [
      {symbol:"AAPL", descr:"Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum"},
      {symbol:"ABC",descr:"Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum"},
      {symbol:"GOOG",descr:"Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum"},
      {symbol:"FB",descr:"Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum"}
    ]
  }

  getCards() {
    return this.stocks
  }

  addCard(symbol, descr) {
    this.stocks.unshift({
      symbol,
      descr
    })
  }

  deleteCard(symbol) {
    console.log("pulling", symbol);
    _.pullAllBy(this.stocks, [{symbol}], 'symbol')
  }

  handleActions(action) {
  console.log(action.type)
  let { symbol, json } = action
    switch(action.type) {
      case "ADD_CARD": {
        this.addCard(symbol, json.descr)
        break
      }
      case "DELETE_CARD": {
        this.deleteCard(symbol);
        break
      }
    }
    this.emit("change")
  }
}
const stockStore = new StockStore
dispatcher.register(stockStore.handleActions.bind(stockStore))
// window.StockStore = StockStore//TODO for testing
// window.dispatcher = dispatcher//TODO for testing
export default stockStore
