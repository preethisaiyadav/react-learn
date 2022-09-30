import React, { Component } from 'react'

export class Order extends React.Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props)}</pre>
        <h1>Product_Name:{this.props.name}</h1>
        <h2>color:{this.props.color[0]}</h2>
      </div>
    )
  }
}

export default Order