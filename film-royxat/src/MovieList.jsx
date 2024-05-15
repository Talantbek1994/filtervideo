import React, { useState } from 'react';
import MovieItem from './MovieItem';

const MovieList = () => {
  const [showList, setShowList] = useState(false);
  const [search, setSearch] = useState('');
  const [films] = useState([
    { id: 1, title: 'Milliarder', year: 2020, genre: 'Real', video: 'path_to_video1.mp4' },
    { id: 2, title: 'Asoschi', year: 2022, genre: 'Fantastic', video: 'path_to_video2.mp4' },
    { id: 3, title: 'Puaro', year: 2014, genre: 'Detective', video: 'path_to_video3.mp4' },
    { id: 4, title: 'Jumong', year: 2016, genre: 'Jangari', video: 'path_to_video4.mp4' },
    { id: 5, title: 'Yengilmas', year: 2018, genre: 'Action', video: 'path_to_video5.mp4' }
  ]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setShowList(true); 
  };

  const filteredFilms = films.filter(film => 
    film.title.toLowerCase().includes(search.toLowerCase())
   
  );

  return (
    <> 
    <div  >
      <h1> Mavjud Filmlar</h1> 
      <input
        type="text"
        value={search}
        placeholder='Film nomini kiriting...'
        onChange={handleSearch}
      />
      
      {showList &&  ( 
        filteredFilms.length > 0 ? ( 
        <ul>
          {filteredFilms.map(film => (
            <MovieItem key={film.id} film={film} />
            
          ))}
        </ul>
       ) : (
        <p>Film topilmadi.Qayta urinib kor</p>
       )
      )
      }
      
    </div>
    
    </>
  );
};

export default MovieList;
