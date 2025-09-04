import Link from 'next/link';
import React from 'react'




const Users = async() => {
const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();
    
  return ( 
    <ul>
        {users.map(user => (
            <li key={user.id} className='px-4 py-2 bg-white rounded-sm transition duration-[0.6s] ease-in-out block mx-[10px] my-2 border-l-8 border-white hover:border-l-8 hover:border-blue-500'>
              <Link href={`/users/${user.id}`}>
                {user.name}
              </Link>
            </li>
        ))}
    </ul>
  )
}

export default Users;