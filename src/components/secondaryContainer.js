import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {

    const movies=useSelector((store)=>store?.movies);
    


  return ( 
    <div className=' bg-black'>
      <div className='-mt-40 relative z-20 pl-12 '>
         <MoviesList  title={"Now Playing"} movies={ movies?.nowPlayingMovies }/> 
         <MoviesList title={"Popular"} movies={ movies?.popularMovies }/> 
         <MoviesList title={"Now Playing"} movies={ movies?.nowPlayingMovies }/> 
         <MoviesList title={"Now Playing"} movies={ movies?.nowPlayingMovies }/>
         <MoviesList title={"Now Playing"} movies={ movies?.nowPlayingMovies }/>
         <MoviesList title={"Now Playing"} movies={ movies?.nowPlayingMovies }/>
         </div>
         
    </div>
  )
}

export default SecondaryContainer;