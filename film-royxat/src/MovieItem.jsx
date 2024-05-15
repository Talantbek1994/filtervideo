import React from 'react'
import Comments from './Comments'
 const MovieItem = ({film}) => {
  return (
    <li>
        <h2>{film.title}</h2>
        <p> Yil: {film.year}</p>
        <p>Film Janri: {film.genre}</p>
        <video width="320" height="240" controls >
         <source src={film.video} type="video/mp4" />
        </video>
        <div style={{marginTop: '20px', textAlign: 'left'}} >
      <h2>Kommentariyalar</h2>
      <Comments sectionId={film.id} />
      </div>
    </li>
  )
}

export default MovieItem