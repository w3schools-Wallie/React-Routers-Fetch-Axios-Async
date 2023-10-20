import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function AlbumDetails() {
    const [album, setAlbum] = useState({})
    const nav = useNavigate()
    const params = useParams()
    const id = params.id
    console.log(params.id)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums/'+id)
        .then(res=>res.data)
        .then(data=>setAlbum(data))
        .catch(err=>console.error(err))
    }, [])

    const goBackToAlbums = ()=>{
        nav('/albums')
    }
    console.log(album)
  return (
    <div className='app'>
    
        {album.id && <h1>Album Details id: {id}</h1>}
        {album.title && <h3>title  :{album.title}</h3>}
        {album.id && <h3>Id  :{album.id}</h3>}
          <button onClick={goBackToAlbums}>Go back to Albums</button>
    </div>
  )
}

export default AlbumDetails