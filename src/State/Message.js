import React, { Component } from 'react'

export class Message extends Component {
    state={
     qty:1
    }
    incrHanlder=()=>{
      this.setState({qty:this.state.qty+1})
    }

    decrHandler=()=>{
      this.setState({qty:this.state.qty-1})
    }
  render() {
    return (
      <div>
        <h4>Quantity:{this.state.qty}</h4>
        <button onClick={this.incrHanlder}>Incr</button>
        <button onClick={this.decrHandler}>Decr</button>
      </div>
    )
  }
}

export default Message;