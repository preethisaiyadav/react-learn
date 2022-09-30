import React, { Component } from 'react'
import Order from './Order'
export class Product extends  React.Component {
    Product_Name="redmi note9 pro"
    colors=["red","green","yellow"]
    more_detailas={
        price:45000,
        usage:"performance is very good"

    };
  render() {
    return (
      <div>
        <Order Product_Name={this.Product_Name}
        color={this.color}
       details={this.more_detailas} />

      </div>
      
    )
  }
}

export default Product;
  