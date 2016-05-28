import React from "react"
import * as StockAction from '../actions/StockAction'
import io from 'socket.io-client'
const socket = io()//HACK FIX -> creates 3x

export default class AddTicker extends React.Component {
  constructor() {
    super()
    this.state = {
      ticker: ""
    }
  }

  handleSearchInput(e) {
    e.target.value = e.target.value.toUpperCase()
    let ticker = e.target.value
    this.setState({ ticker })
  }
  search(e) {//TODO CHECK FOR VALID FIRST
    e.preventDefault(e)
    let { ticker } = this.state
    console.log("searching for", this.state.ticker)
    socket.emit('add stock', ticker)
    // StockAction.addCard(ticker) //HACK
    e.target.reset()
  }

  render() {
  let { title, descr } = this.props
    return(
      <div style={{marginTop: '20px'}}>
        <form class="" role="search" onSubmit={this.search.bind(this)}>
          <div class="form-group" style={{float: 'left', minWidth: '165px'}}>
            <input id="location" class="form-control" placeholder="AAPL" type="text" onChange={this.handleSearchInput.bind(this)} maxLength="5" />
          </div>
          <button type="submit" class="btn btn-default" style={{marginLeft: '7px', width: '100px'}}>ADD</button>
        </form>
      </div>
    )
  }
}
