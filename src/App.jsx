import React, { useState } from 'react';
import { Users } from './profile';
import { User } from './info';


function App() {
    const [query, setQuery] = useState("")

    console.log(Users.filter(user=>user.firstName.toLowerCase().includes("ac")));
  return (
    <div className='profile1'>
        <div>
        <input
       type='text' 
       placeholder='search by name' 
       onChange={e=> setQuery(e.target.value)} />
      <ul className='list'>
        {Users.filter(user =>
        user.firstName.toLowerCase().includes(query)
        ).map((user) => (
            
          <li className='listItem' key={user.id}>  {user.picture} {user.id}
          <br />
          {user.title} {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
        </div>
        <div className='space'>
      <ul className='list'>
        {User.filter(user =>
        user.firstName.toLowerCase().includes(query)
        ).map((user) => (
            
          <li className='listItem' key={user.id}>  {user.picture} {user.id} 
          <br />
          {user.title} {user.firstName} {user.lastName}
            </li>
        ))}
      </ul>
        </div>
    </div>
  )
}


export default App;