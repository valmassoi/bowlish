import React from "react"
import $ from 'jquery'

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
  search(e) {
    e.preventDefault(e)
    console.log("searching for", this.state.ticker);

    const apiKey = ''
    const quandlUrl = 'https://www.quandl.com/api/v3';
    const symbol = this.state.ticker
    const baseUrl = `${quandlUrl}/datasets/WIKI/${symbol}.json`;
    const collapse = 'collapse=monthly';
    const date = 'start_date=2015-01-01&end_date=2016-01-01';
    const fullUrl = `${baseUrl}?${collapse}&${date}&order=asc&api_key=${apiKey}`;
    console.log(fullUrl);


    $.getJSON(fullUrl, (data) => {
        console.log(data);
    })

  }

  render() {
  let { title, descr } = this.props
    return(
      <div style={{marginTop: '20px'}}>
        <form class="" role="search" onSubmit={this.search.bind(this)}>
          <div class="form-group" style={{float: 'left', minWidth: '270px'}}>
            <input id="location" class="form-control" placeholder="AAPL" type="text" onChange={this.handleSearchInput.bind(this)} />
          </div>
          <button type="submit" class="btn btn-default" style={{marginLeft: '7px', width: '100px'}}>ADD</button>
        </form>
      </div>
    )
  }
}
