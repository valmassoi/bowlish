import React from "react"

export default class TickerCard extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  remove(title) {
    console.log("remove ", title);
  }

  render() {
  let { title, descr } = this.props
    return(
        <div class="tickercard" style={{position: 'relative'}}>
          <h3 class="">{title}</h3>
          <div style={{position: 'absolute', right: '15px', top:'15px'}} class="remove-btn" onClick={()=>this.remove({title})}>
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </div>
          {descr}
      </div>
    )
  }
}
