import React from 'react'

const Footer = () => {
  const footer = {
    margin: '50px auto',
    textAlign: 'center',
  }

  return (
    <div style={footer}>
      <h5>
        Try out the real-time feature:
        Open on two browsers/devices and add/remove a stock to see it update on both
      </h5><br />
      <a href="https://github.com/valmassoi/bowlish" target="_blank"><i class="fa fa-github" aria-hidden="true"></i> github repo</a> by <a style={{ marginTop: '10px' }} href="https://twitter.com/valmassoi" target="_blank">@valmassoi</a>
    </div>
  )
}

export default Footer
