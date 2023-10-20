import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Albums() {
  const [albums , setAlbums] = useState([])
  const nav = useNavigate()

  useEffect(()=>{
    getData()   
  }, [])

  const getData = () =>{
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(result => setAlbums(result))
    .catch(console.error)
  }
  const letsGoHome = ()=>{
    nav('/')
  }
  const showMeDetails = (id)=>{
    nav(`/albums/${id}`)
  }
  console.log(albums)
  return (
    <div className='app'>
      <h1>Albums</h1>
      <button onClick={letsGoHome}>Go Home</button>
      <ul>
        {albums.length>0 && albums.map(ele=><li key={ele.id} onClick={()=>{
          showMeDetails(ele.id)
        }}>{ele.title}</li>)}
      </ul>
    </div>
  )
}

export default Albums