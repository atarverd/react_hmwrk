import React, { Component } from 'react'

export default class Recomendation extends Component {
  render() {
    return (<>
      <h4 className='rec'>{this.props.country}</h4>
      </>
    )
  }
}
