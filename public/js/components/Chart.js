import React from "react"
import Highcharts from 'highcharts/highstock'
import ChartTheme from '../utilities/ChartTheme'
import StockStore from '../stores/StockStore'
import $ from 'jquery'

export default class Chart extends React.Component {
  constructor() {
    super()
    this.state = {
      chart: null,
      data: [[0,0]]
    }
  }

  componentWillMount() {
    let data = StockStore.getData()
    this.setState({ data })
    StockStore.on("data_change", this.updateChart.bind(this))
  }

  componentWillUnmount() {
    StockStore.removeAllListeners("data_change")
  }

  updateChart() {
    let data = StockStore.getData()
    // this.setState({ data })
    // console.log(data[0].data);
    let chart = this.state.chart
    let series = {
      name: [data[0].symbol],
      data: data[0].data
    }
    chart.addSeries(series,true)
    this.setState({chart})
  }

  componentDidMount() {
    let config = this.setConfig()
    let chart = Highcharts.StockChart('chart', Object.assign(ChartTheme.main(), config))
    this.setState({ chart })
  }

  setConfig() {
    let data = this.state.data
    let rangeTheme = ChartTheme.rangeSelectorTheme()
    let config = {
      rangeSelector: Object.assign(rangeTheme, {
        selected: 4
      }),
      title: {
        text: 'Closing Stock Prices',
        style: {
           color: '#E0E0E3',
           fontSize: '20px'
        }
      },
      series: [
        // {name: ['AAPL'],
        // data: data[0]},
        // {name: ['GOOG'],
        // data: data[1]},
        {tooltip: {
          valueDecimals: 2
        }}
      ]
    }
    return config
  }

  render() {

    return(
      <div>
        <div id="chart"></div>
      </div>
    )
  }
}
