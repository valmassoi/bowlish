import React, { Component } from 'react'
import Highcharts from 'highcharts/highstock'
import ChartTheme from '../utilities/ChartTheme'
import StockStore from '../stores/StockStore'

export default class Chart extends Component {
  constructor() {
    super()
    this.state = {
      chart: null,
    }
  }

  componentWillMount() {
    const data = StockStore.getData()
    this.setState({ data })
    StockStore.on('data_add', this.updateChart.bind(this))
    StockStore.on('data_remove', this.removeSeries.bind(this))
  }

  componentDidMount() {
    const config = this.setConfig()
    const chart = Highcharts.StockChart('chart', Object.assign(ChartTheme.main(), config))
    this.setState({ chart })
  }

  componentWillUnmount() {
    StockStore.removeAllListeners()
  }

  setConfig() {
    const rangeTheme = ChartTheme.rangeSelectorTheme()
    const config = {
      rangeSelector: Object.assign(rangeTheme, {
        selected: 4,
      }),
      title: {
        text: 'Closing Stock Prices',
        style: {
          color: '#E0E0E3',
          fontSize: '20px',
        },
      },
      series: [
        { tooltip: {
          valueDecimals: 2,
        } },
      ],
      navigator: {
        enabled: true,
        series: {
          id: 'navigator',
        },
      },
    }
    return config
  }

  updateChart() {
    const data = StockStore.getData()
    const chart = this.state.chart
    const siri = {
      name: [data[0].symbol],
      data: data[0].data,
    }
    chart.addSeries(siri, true)
    const nav = chart.get('navigator')
    nav.setData(siri.data)
    chart.xAxis[0].setExtremes()
    this.setState({ chart })
  }

  removeSeries() {
    const symbol = StockStore.getDeleteSymbol()
    const chart = this.state.chart
    chart.series.forEach((series) => {
      if (series.name === symbol)
        series.remove(true)
    }
    )
  }

  render() {
    return (
      <div>
        <div id="chart"></div>
      </div>
    )
  }
}
