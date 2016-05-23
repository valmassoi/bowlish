import React from "react"
import { Link } from "react-router"

import Footer from "../components/Footer"
import Nav from "../components/Nav"

export default class Layout extends React.Component {

  render() {
    const { location } = this.props
    return(
      <div>
        <Nav location={location} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
