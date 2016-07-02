import React, { Component } from 'react'
import io from 'socket.io-client'
const socket = io('http://192.168.1.108:8081/')// HACK FIX -> creates 3x

export default class AddTicker extends Component {
  constructor() {
    super()
    this.state = {
      ticker: '',
    }
  }

  handleSearchInput(e) {
    const ticker = e.target.value.toUpperCase()
    this.setState({ ticker })
  }
  search(e) { // TODO CHECK FOR VALID FIRST
    e.preventDefault(e)
    const { ticker } = this.state
    socket.emit('add stock', ticker)
    e.target.reset()
  }

  render() {
    let { title, descr } = this.props
    return (
      <div style={{ marginTop: '20px' }}>
        <form role="search" onSubmit={this.search.bind(this)}>
          <div class="form-group" style={{ float: 'left', minWidth: '165px' }}>
            <input id="location" class="form-control" placeholder="AAPL" type="text" onChange={this.handleSearchInput.bind(this)} maxLength="5" />
          </div>
          <button
            type="submit"
            class="btn btn-default"
            style={{ marginLeft: '7px', width: '100px' }}
          >
            ADD
          </button>
        </form>
      </div>
    )
  }
}
