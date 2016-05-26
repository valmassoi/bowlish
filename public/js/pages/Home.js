import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import Chart from '../components/Chart'
import TickerCard from '../components/TickerCard'
import AddTicker from '../components/AddTicker'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards:[
        {title:"AAPL", descr:"Apple Inc (AAPL) Prices, Dividends, Splits and Trading Volume"},
        {title:"ABC",descr:"Lorem ispum"},
        {title:"GOOG",descr:"Alphabet Inc (GOOG) Prices, Dividends, Splits and Trading Volume"},
        {title:"FB",descr:"Facebook Inc. (FB) Prices, Dividends, Splits and Trading Volume"}
      ]
    }
  }

  componentWillMount() {

  }

  componentWillUnmount() {

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
              let { title, descr } = card
              return (
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={"card-div-"+i}>
                  <TickerCard title={title} descr={descr} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
