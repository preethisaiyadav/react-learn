import React from "react";
import ComponentB from "./ComponentB";
let ComponentA=()=>{
    let name="ranjinikanth"
    let movieName="Chandramukhi"
    return(
        <div>
    <h1>componentA</h1>
    <hr/>
    <ComponentB  heroName={name} movie={movieName}/>
        </div>
    )
}
 export default ComponentA;
