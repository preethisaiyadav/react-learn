import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link className="navbar-brand" to='/'>Contact App </Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-list">
           
                <li className='nav-list'></li><Link className="nav-link" to="/contacts">Contactlist</Link>
                        </li>
                </ul>
            </div>
        </nav>
    }
}

export default Navbar