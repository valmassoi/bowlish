import React, { Component } from 'react'
import * as StockAction from '../actions/StockAction'
import io from 'socket.io-client'
const socket = io('http://192.168.1.108:8081/')// HACK FIX -> creates 3x

export default class TickerCard extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  delete(symbol) {
    socket.emit('rm stock', symbol)
    StockAction.deleteCard(symbol)
  }

  render() {
    let { symbol, descr } = this.props
    return (
      <div class="tickercard" style={{ position: 'relative' }}>
        <h3 class="">{symbol}</h3>
        <div
          style={{ position: 'absolute', right: '15px', top: '15px' }}
          class="remove-btn"
          onClick={() => this.delete(symbol)}
        >
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </div>
        {descr}
      </div>
    )
  }
}
