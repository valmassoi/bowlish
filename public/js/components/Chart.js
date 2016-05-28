import React from "react"
import Highcharts from 'highcharts/highstock'
import ChartTheme from '../utilities/ChartTheme'
import TempData from '../utilities/TempData'//HACK
import StockStore from '../stores/StockStore'
import $ from 'jquery'

export default class Chart extends React.Component {
  constructor() {
    super()
    this.state = {
      chart: null,
      data: [ ]//HACK? DELETE?
    }
  }

  componentWillMount() {
    let data = StockStore.getData()
    this.setState({ data })
    StockStore.on("data_add", this.updateChart.bind(this))
    StockStore.on("data_remove", this.removeSeries.bind(this))
  }

  componentWillUnmount() {
    StockStore.removeAllListeners()
  }

  removeSeries() {
    let symbol = StockStore.getDeleteSymbol(),
        chart = this.state.chart
    chart.series.forEach((series) => {
      if(series.name==symbol)
        series.remove(true)
      }
    )
  }

  updateChart() {
    let data = StockStore.getData()
    // this.setState({ data })
    console.log(data);
    let chart = this.state.chart
    let siri = {
      name: [data[0].symbol],
      data: data[0].data
    }
    chart.addSeries(siri,true)
    let nav = chart.get('navigator')
    nav.setData(siri.data)
    chart.xAxis[0].setExtremes()
    this.setState({chart})
  }

  componentDidMount() {
    let config = this.setConfig()
    let chart = Highcharts.StockChart('chart', Object.assign(ChartTheme.main(), config))
    this.setState({ chart })
  }

  setConfig() {
    let data = this.state.data
    // let data = TempData.main()//HACK
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
        // {name: ['AAPL'],//HACK
        // data: data[0]},
        // {name: ['GOOG'],
        // data: data[1]},
        {tooltip: {
          valueDecimals: 2
        }}
      ],
      navigator: {
                enabled: true,
                series: {
                    id: 'navigator'
                }
      },
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
