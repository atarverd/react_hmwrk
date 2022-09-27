import  { Component } from 'react'

export default class Counter extends Component {

  render() {
      const {counter:{count,maxVal,minVal},handleAdd,handleSub,handleReset}=this.props
    return (
      <div className='counter'>
          <button onClick={handleAdd} disabled={count+ 1>maxVal}>Add</button>
          <p>Count {count}</p>
          <button onClick={handleSub} disabled={count-1<minVal}>Sub</button>
          <button onClick={handleReset}>Reset</button>
      </div>
    )
  }
}
