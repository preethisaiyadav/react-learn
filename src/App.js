import React from 'react'
class Navbar extends React.Component {

    render() {
        return <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a className="navbar-brand" href="#">SP <span>Consultancy</span></a>
                <div className="ml-auto">
             
                    <ul className="navbar-nav">
                      
                        <li className="nav-list"><a className="nav-link">Home</a></li>
                        <li className="nav-list"><a className="nav-link">About US</a></li>
                        <li className="nav-list"><a className="nav-link">Services</a></li>
                        <li className="nav-list"><a className="nav-link">Contact US</a></li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    }
}
export default Navbar