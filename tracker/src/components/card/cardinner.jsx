import React, { Component } from 'react'

export default class Cardinner extends Component {
    componentWillUnmount() {
        this.props.handleClose(this.props.item)
      }
  render() {
    return (
      <h1>{this.props.item}</h1>
    )
  }
}
