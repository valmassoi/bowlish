import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import Chart from '../components/Chart'
import TickerCard from '../components/TickerCard'
import AddTicker from '../components/AddTicker'
import StockStore from '../stores/StockStore'
import * as StockAction from '../actions/StockAction'
import io from 'socket.io-client'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards:[ ]
    }
  }

  componentWillMount() {
    this.updateCards()
    var socket = io(`http://192.168.1.108:8081/`)//HACK
    StockStore.on("change", this.updateCards.bind(this))
  }

  componentWillUnmount() {
    StockStore.removeAllListeners("change")
  }

  updateCards() {
    let cards = StockStore.getCards()
    this.setState({ cards })
  }

  render() {

    return(
      <div>
        <div class="centered">
          <Chart />
        </div>
        <AddTicker />
        <div class="container-fluid" style={{marginTop: '20px'}}>
          <div class="row">
            {this.state.cards.map( (card, i) => {
              let { symbol, descr } = card
              return (
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={"card-div-"+i}>
                  <TickerCard symbol={symbol} descr={descr} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
