import React from 'react'
/* import Message from './Message/Message' */
import Navbar from './Navbar/Navbar'

import Counter from './Counter/Counter'
class App extends React.Component {
    render() {
        return <div>
            <Navbar />
            <h1>my product</h1>
            <hr />

            
            {<Counter /> }
        </div>
    }
}
export default App
