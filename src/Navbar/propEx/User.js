import React from 'react'
import Employee from './employee'
function User() {

    let ename = "Rahul Gandhi"
    return (
        <div>
            <h1>hi welocme to my world
                
            </h1>
            <hr />
            <employee msg={"Good Morning"} name={ename} />

        </div>
    )
}

export default User