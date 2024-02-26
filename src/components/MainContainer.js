import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'

const MainContainer = () => {

   
     const movies=useSelector(store => store.movies?.nowPlayingMovies);
   
    

    if(movies==null) return ;

     const mainMovie=movies[16];
    

     const {original_title , overview , id}=mainMovie;

    return (
    <div className='-mt- relative'> 
        <VideoTitle title={original_title} overview={overview} movieId={id}/>
        <VideoBg  movieId={id}/>



    </div>
  )
}

export default MainContainer