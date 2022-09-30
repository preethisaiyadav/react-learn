import React, { Component } from 'react'

export class Employeelist extends Component {
  render() {
    return (
      <div>
        {/* <>{JSON.stringify(this.props)}</> */}
        <div className="container mt-4">
          <div className='row'>
            <div className='col-md-8'>
           <table border="1" className='table table-dark'>
          
          <thead>
            <tr>
              <th>ID</th>
              
              <th>name</th>
              <th>email</th>
              <th>gender</th>
            </tr>
            </thead>
            <tbody>{this.props.emp.map((Employee)=>{
            return(
              <tr>
                <td>{Employee.Id}</td>
                <td>{Employee.first_name}</td>
                <td>{Employee.email}</td>
                <td>{Employee.gender}</td>
                
              </tr>
            )
            })}</tbody>
         
      </table>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Employeelist