import React, { useState } from 'react';
import { Users } from './information';

function Profile() {
    const [query, setQuery] = useState("")

    
  return (
    <div className='wholeProfile'>
      <div className='profileBreadth'>
      <input
       type='text' 
       placeholder='Search by name...' 
       onChange={e=> setQuery(e.target.value)}
        />
      </div>
       

        <div className='sectionPart'>
          {Users.filter(user =>
        user.firstName.toLowerCase().includes(query) ||
        user.lastName.toLowerCase().includes(query)
        ).map((user) => (
            
          <div className='profileView' key={user.id}>   
          <div>
            {user.picture}
          </div>
          <div className='profileId'>
            <p>{user.id}</p>
            <p className='profileData'>{user.title} {user.firstName} {user.lastName}</p>
          </div>
          </div>
        ))}
        </div>
        
        
    </div>
  )
}


export default Profile;