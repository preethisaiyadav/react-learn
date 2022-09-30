import React from 'react'

function FunctionClick() {
    function ClickHanlder(){
        console.log("sai")
    }
  return (
    <div>
        <button onClick={ClickHanlder}>onClick</button>
    </div>
  )
}

export default FunctionClick