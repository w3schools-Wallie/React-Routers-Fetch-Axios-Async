import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Posts() {
  const [post, setPost] = useState([])
  const nav = useNavigate()

  useEffect(()=>{
  //  getData()
  getData2()
  },[])

  const getData = async () =>{
    try{
      const result = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await result.json()
      setPost(data)
    }catch(err){
      console.log("error", err);
    }
  }

  async function getData2 () {
    try {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const data = await result.data
      setPost(data)
    } catch (err) {
      console.log("error", err);
    }
  }

  const letsGoHome = ()=>{
    nav('/')
  }
  return (
    <div className='app'>
      <h1>Posts</h1>
      <button onClick={letsGoHome}>Lets Go Home</button>
      <ul>
        {post.length>0 && post.map(ele=><li key={ele.id}>{ele.title}</li>)}
      </ul>
    </div>
  )
}

export default Posts