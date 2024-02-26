import React from 'react';
import MovieCard from './MovieCard';

const MoviesList = ({ title, movies }) => {
  console.log(movies);


  if(!movies) return null;



  return (
    <div className='px-6'>
       <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll'>
       
        <div className='flex pr-4'>
        {movies.map(movie=>  <MovieCard key={movie.id} posterPath={movie.poster_path}/> )}
        </div>
        
        
      </div>
    </div>
  );
}

export default MoviesList;
