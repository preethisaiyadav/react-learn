//how to read property, object,array using react expression

import React from 'react'

const func=()=>{

    const name="sai"                 //property
    const details={name:"sai",age:25}  //object
    const colors=["red","green"]       //array
    return(
        <div>
            <center>
            <h1>functional component</h1>
            {/* <h2>{name}</h2> */}
            <h3>{details.name}</h3>
            <h4>{colors[0]}</h4>
            </center>
        </div>
    )
}
export default func