import React  ,{useState} from 'react'
 const App =()=>{
    const [Data,setData]=useState({
        email:'',
        password:''

    })
const changeHandler =e=>{
    setData({...Data,[e.target.name]:e.target.value})

}
const submitHandler=e=>{
    e.preventDefault();   
    if(Data.password.length<5){
        alert('provide password length>5')
    }
    else{
        console.log(Data);
    }
}
    return(
        
        <div style={{display:"flex" ,justifyContent:"center"}}>
        <form onSubmit={submitHandler}>
                <label>E-mail : </label>
                <input type="text"name="email"/> <br/>
                <label>Password :</label> 
                <input type="password"name="password"/> <br/>
                    <input type="submit"value="login"/> 
                
            </form>
        </div>
    )
 }
 export default App