import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  yelp() {
    let places = YelpStore.getPlaces()
    this.setState({ places })
  }

  render() {

    return(
      <div>
        Graph
      </div>
    )
  }
}
