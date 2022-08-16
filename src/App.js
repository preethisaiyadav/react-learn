import React ,{useState}from 'react'

export const App = () => {
    const [name,setName]=useState('leo')
  return (
    <div>
        <h1>name:{name}</h1>
    </div>
  )
}
export default App

