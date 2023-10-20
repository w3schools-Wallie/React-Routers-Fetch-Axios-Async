import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Users() {
  const [users, setUsers] = useState([])
  const nav = useNavigate()

  useEffect(()=>{
    getData()
  },[])

  const getData = () =>{
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => res.data)
      .then(data => setUsers(data))
      .catch(err => console.error(err))
  }

  const letsGoHome = () => {
    nav('/')
  }
  const seeDetails = (id) =>{
    nav(`/users/${id}`)
  }
  console.log(users)
  return (
    <div className='app'>
      <h1>Users</h1>
      <button onClick={letsGoHome}>Lets Go Home</button>
      <ul>
        {users.length>0 && users.map(ele=><li key={ele.name} onClick={()=>{
          seeDetails(ele.id)
        }}>{ele.name}</li>)}
      </ul>
    </div>
  )
}

export default Users