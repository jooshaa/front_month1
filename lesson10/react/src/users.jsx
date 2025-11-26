// import React, { useState } from 'react';

// const Users = () => {
//     const [users, setUser] = useState([
        
//             {
//                 id: 1,
//                 name: "Ali",
//                 age: 24,
//             },
//             {
//                 id: 2,
//                 name: "Samar",
//                 age: 26,
//             },
//             {
//                 id: 3,
//                 name: "Obid",
//                 age: 21,
//             },
        
//     ])
//     return (
//         <table className='mainTable'>
//             <thead >
//                 <tr className='thhead'>
//                     <th>name</th>
//                     <th>age</th>
//                 </tr>
//             </thead>

//             <tbody>
//                     {users.map(u => (
//                 <tr key={u.id}>
//                         <td>{u.name}</td>
//                         <td>{u.age}</td>
//                 </tr>
//                     ))}
//             </tbody>
//         </table>
//     );
// };

// export default Users;

import React, { useState } from 'react';

function Users() {
    const [users, setUsers] = useState([
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
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            id: users.length + 1,
            name: e.target.name.value,
            age: +e.target.age.value,
        }

        setUsers([...users, newUser]);
        e.target.reset();
    }

    const delete1 = (id)=>{
      let  nwusers = users.filter((e) => e.id != id) 
        setUsers([...users,nwusers ]) 
        
    }

    const reverseFn = ()=>{
        let reverse1 = users.reverse()
        console.log(reverse1);
        
        setUsers([...reverse1])
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name' />
                <input type="number" name='age' placeholder='Age' />
                <button type="submit">Add</button>
            </form>
            {users.map(user => (
                
                <div key={user.id}>
                    <p>{user.name} | {user.age}</p>
                    {/* <button onClick={()=> delete1(user.id)}>del</button> */}
                </div>
            ))}
            <button onClick={() => reverseFn()}>reverse</button>
        </div>
    );
}

export default Users;