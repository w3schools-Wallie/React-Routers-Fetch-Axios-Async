import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {
    const [user, setUser] = useState({})
    const nav = useNavigate()
    const params = useParams()
    const id = params.id
    console.log(params.id)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then(res => res.data)
            .then(data => setUser(data))
            .catch(err => console.error(err))
    }, [])

    const goBackToUsersPage = ()=>{
        nav('/users')
    }
    console.log(user)
  return (
    <div className='app'>
          <h2>UserDetails</h2>
          <p>{user?.name}</p>
          <p>{user?.username}</p>
          <p>{user?.email}</p>
          <p>{user?.address?.street}</p>
          <button onClick={goBackToUsersPage}>Go back to Users</button>
    </div>
  )
}

export default UserDetails