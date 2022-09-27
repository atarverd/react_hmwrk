import  { Component } from 'react'

export default class CounterSettings extends Component {
    constructor(props){
        super(props)

        this.state={
            maxValue:0,
            minValue:0,
            step:0
        }
    }

    handleMax=(e)=>{
        this.setState({
            maxValue:e.target.value
        })
    }

    handleMin=(e)=>{
        this.setState({
            minValue:e.target.value
        })
    }

    handleStep=(e)=>{
        this.setState({
            step:e.target.value
        })
    }
    
  render() {
      const {state:{maxValue,minValue,step}, props:{handleSettings}}=this
    return (
      <div className='settings'>
          <label>Max Value</label>
          <input type="number" onChange={(e)=>this.handleMax(e)}/>
          <label>Min Value</label>
          <input type="number" onChange={(e)=>this.handleMin(e)}/>
          <label>Step</label>
          <input type="number" onChange={(e)=>this.handleStep(e)}/>
          
          <button onClick={()=>handleSettings(step,maxValue,minValue)}>OK</button>
      </div>
    )
  }
}
