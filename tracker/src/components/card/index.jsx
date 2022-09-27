import { Component } from "react";
import Cardinner from "./cardinner";
import './card.css'
export default class Card extends Component {
  constructor(props){
    super(props)

    this.state={
      isClosed:false
    }
  }
  handleToggle=()=>{
    this.setState({
      isClosed:!this.state.isClosed
    })
  }
  
  
  render() {

    return (<div className="card">
      {this.state.isClosed ?<button onClick={this.handleToggle}>Show</button>:<button onClick={this.handleToggle}>X</button>}
      <div >
        {!this.state.isClosed && 
          <>
            <Cardinner handleClose={this.props.handleClose} item={this.props.item}/>
            
          </>
        }
      </div>
    </div>);
  }
}
