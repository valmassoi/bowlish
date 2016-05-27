import React from "react"
import * as StockAction from '../actions/StockAction'

export default class TickerCard extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  delete(symbol) {
    console.log("delete ", symbol);
    StockAction.deleteCard(symbol)
  }

  render() {
  let { symbol, descr } = this.props
    return(
        <div class="tickercard" style={{position: 'relative'}}>
          <h3 class="">{symbol}</h3>
          <div style={{position: 'absolute', right: '15px', top:'15px'}} class="remove-btn" onClick={()=>this.delete(symbol)}>
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </div>
          {descr}
      </div>
    )
  }
}
