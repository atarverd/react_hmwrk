import  { Component } from 'react'

export default class Report extends Component {
  render() {
      const {item}=this.props
    return (
      <div>
          <p>Card number {item[0]} unmounted {item[1]} times</p>
      </div>
    )
  }
}
