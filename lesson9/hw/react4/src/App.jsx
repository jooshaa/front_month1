import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const changeName = (e)=>{
    setName(e.target.value)
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
  }


  return (
    <>
    <div>
      <input onChange={changeName} type="text" placeholder='name'/>
        <input onChange={changePassword} type="text" placeholder='password'/>


      <p>Name: {name}</p>
      <p>Password: {password}</p>
    </div>
    
    </>
  )
}

export default App
