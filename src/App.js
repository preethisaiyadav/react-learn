import React from 'react';
import Test from'./Test';
class  App extends React.Component{
    state={
        name:'sai',
        age:25,
        date:[]
    }
    render(){
        return(
     <div>
        <centre>
            <Test name={this.state.name} age={this.state.age}/>
        </centre>
     </div>
        )
    }
}
  


export default App
