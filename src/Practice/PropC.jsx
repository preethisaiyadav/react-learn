// we are using  array and Object in react experssion 

import React,{Component} from 'react'

class PropC extends  Component{
    name="preethi"
    details={name:"sai",age:23}
    colors=["red","green","yellow"]
    render(){
        return(
            <div>
                <h1>class component</h1>
                <h2>{this.name}</h2> 
                <h2>{this.details.name}&nbsp; {this.details.age}</h2>
                {JSON.stringify(this.colors)}
                {JSON.stringify(this.details)} 
            </div>
        )
    }

}
export default PropC