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

  addCard(symbol) {
    this.stocks.unshift({
      symbol,
      descr: Date.now()//HACK
    })
  }

  deleteCard(symbol) {
    console.log("pulling", symbol);
    _.pullAllBy(this.stocks, [{symbol}], 'symbol')
  }

  handleActions(action) {
  console.log(action.type);
    switch(action.type) {
      case "ADD_CARD": {
        this.addCard(action.symbol)
        break
      }
      case "DELETE_CARD": {
        this.deleteCard(action.symbol);
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
