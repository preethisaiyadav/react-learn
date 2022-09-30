import React, { Component } from 'react'

 class ClassFrom extends Component {

    
    state = {
    Email:"",
    password:""    
    }
    EmailHanlder=(Event)=>{
        this.setState({Email:Event.target.value})

    }
    passwordHanlder=(Event)=>{
   this.setState({password:Event.target.value})
    }
    SubmitHanlder=(Event)=>{
        this.setState({Submit:Event.target.value})
    }
    
  render() {
    return (
      <div>
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'>{JSON.stringify(this.state)}
                            <div className='card-body'>
                                <form onSubmit={this.SubmitHanlder}>
                                    
                                     <div className='form-group'>
                                    <input
                                     type="text"
                                     className='form-control'
                                     placeholder="Email"
                                     onChange={this.EmailHanlder}
                                     ></input>
                                     </div>
                                     <div className='form-group'>
                                    <input
                                     type="text"
                                     className='form-control'
                                     placeholder="Password"
                                     onChange={this.EmailHanlder}></input>
                                     </div>
                                     <div className='form-group'>
                                    <input
                                     type="Submit"
                                     className='btn btn-success form-control'
                                     value="login"/>
                                     </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ClassFrom