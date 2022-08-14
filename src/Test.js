import react from "react"
class test extends react.Component{
    render(){
        return(
            <div>
                <h2>Name:{this.props.name} And age:{this.props.age}</h2>
            </div>
        )
    }
}
export default test