
import React from "react";

let ComponentB=(props)=>{
    return(
        <div>
            <h1>ComponentB</h1>
            <pre>{JSON.stringify(props)}</pre>
                <h1>Hero Name:{props.heroName}</h1>
                <h1>movieName:{props.movie}</h1>
            
                 </div>
    )
}
export default ComponentB;