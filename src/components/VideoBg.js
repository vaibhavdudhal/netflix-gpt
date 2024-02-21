import {  useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBg = ({movieId}) => {

  
     const trailerVideo=useSelector((store)=>store.movies?.trailerVideo)

    useMovieTrailer(movieId);
  return (
    <div className='w-screen '>
      
<iframe className='w-screen aspect-video position-fixed top-0 ' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        



    </div>
  )
}

export default VideoBg;