import React from 'react'
import Navbar from './Navbar/Navbar'
import User from './Navbar/propEx/User'
class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <User />
            </div>
        )
    }
}

export default App