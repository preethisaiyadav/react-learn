import React, { Component } from 'react'

class Counter extends Component {
    state = {
        name: "mamaearth",
        price: 539,
        qty: 1,
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRigjzfuDBLqtkSyp9P3jNyi-K1dejX88FHQAHqvdjtCdJcGmUHQ3FxYG11HQizi5CKUWo6XlT4tC3sRqHTrSlnmhLMYt_XOrlDLC9Lyg&usqp=CAE'

    }
    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    decrHandler = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    render() {
        return <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    
                </div>
            </div>
        </div>
    }
}

export default Counter
