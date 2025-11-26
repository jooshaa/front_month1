import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [users, setUser] = useState([
    
      {
        id: 1,
        name: "Ali",
        age: 24,
      },
      {
        id: 2,
        name: "Samar",
        age: 26,
      },
      {
        id: 3,
        name: "Obid",
        age: 21,
      },
    
  ])

  const [data, addData] = useState({id: (users.length + 1), input1: "", input2: ""})

  const inputData = (e)=>{
    
    addData({
      ...data, [e.target.name]: e.target.value
    })
  }

  const addToMain = ()=>{
    if (!data.input1 || !data.input2){ 
      alert("Full Fill input"); return;
    }
    
    const newUser = {
      id: users.length + 1,
      name: data.input1,
      age: Number(data.input2),
    };
    
     setUser([...users, newUser])
  }
 

  const updateData = (id)=>{
    let user = users.find((u)=> u.id == id)
    if (!user) {
      console.warn("User not found for id", id);
      return;
    }
    addData({
      id: user.id,
      input1: user.name ?? "",
      input2: String(user.age ?? "")
    });
    let index = users.indexOf(user)
    users = [...users, {...users[index], ...user}]
    console.log(index);
    
    console.log(users[index]);
        
    console.log(users);
    
    
  }

  const chngInside = ()=>{

  }
  // console.log(data);
  return (

    <div className='container'>
      
      <div className='m-4 mb-6 flex items-center gap-3'>
        <input className='border' type="text" name='input1' onInput={(e) => inputData(e)} value={data.input1}  />
        <input className='border m-3' type="number" name='input2' onInput={(e) => inputData(e)} value={data.input2} />
        <button className='border' onClick={()=> addToMain()}>add</button>
      </div>

      <table className="border border-gray-400 border-collapse w-full ">
        <thead className="bg-gray-800">
          <tr>
            <th className="border px-3 py-2">Name</th>
            <th className="border px-3 py-2">Age</th>
            <th className="border px-3 py-2">Update</th>
            <th className="border px-3 py-2">Remove</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
              <tr key={u.id}>
                <td className="border px-3 py-2 text-center">{u.name}</td>
                <td className="border px-3 py-2 text-center">{u.age}</td>

            
                <td className="border px-3 py-2 text-center">
                  <button onClick={()=> updateData(u.id)} className="text-blue-600 hover:text-blue-800">
                    <i className="fa-solid fa-pen"></i>
                  </button>
                </td>

            
                <td className="border px-3 py-2 text-center">
                  <button className="text-red-600 hover:text-red-800">
                    <i className="fa-solid fa-delete-left"></i>
                  </button>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
