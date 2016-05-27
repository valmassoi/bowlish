import { EventEmitter } from 'events'
// import $ from 'jquery'
import _ from 'lodash'

import dispatcher from '../dispatcher'

class StockStore extends EventEmitter {
  constructor() {
    super()
    this.stocks = [
      {symbol:"AAPL", descr:"Apple Inc (AAPL) Prices, Dividends, Splits and Trading Volume"},
      {symbol:"ABC",descr:"Lorem ispum"},
      {symbol:"GOOG",descr:"Alphabet Inc (GOOG) Prices, Dividends, Splits and Trading Volume"},
      {symbol:"FB",descr:"Facebook Inc. (FB) Prices, Dividends, Splits and Trading Volume"}
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
        console.log(action.symbol);
        this.addCard(action.symbol)
        // this.emit("change")
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
