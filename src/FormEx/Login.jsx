import React from 'react'
class Login extends React.Component {  
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                       
                        <div className="card-header">
                            <h4>Login Details</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input onChange={this.emailHandler} type="text" className="form-control" placeholder="Email Id" />
                                </div>
                                <div className="form-group">
                                    <input onChange={this.passwordHandler} type="text" className="form-control" placeholder="Password" />
                                </div>
                                <button className="btn btn-success"> Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Login