import React, { Component } from 'react'

 class ClasseventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hi gud mrg"
      }
    }
      ClickHanlder() {
        this.setState({
            message:"gud bye!"
        })
        console.log(this)
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.ClickHanlder.bind(this)}>click</button> */}
        <button onClick={()=>this.ClickHanlder()

        }>click</button>
      </div>
    )
  }
}

export default ClasseventBind