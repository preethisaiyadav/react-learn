import React from 'react'
import Navbar from './Navbar/Navbar'
import Salary from './FormEx/Eventhandling/Salary'
import Login from './FormEx/Login'
import Employee from './Empolyee/Employee'


 class App extends React.Component  {
  render(){
  return (
    <div>
         <Navbar/>
   <h1>Login Details</h1>
   <hr/> 
     <Login/>
     <Salary/>
      <Employee/>

    </div>
   
  )
  }
}
export default App