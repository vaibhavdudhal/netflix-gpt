
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

import { useDispatch, useSelector } from 'react-redux';



const useNowPlayingMovies=()=>{

    const dispath=useDispatch();
    const nowPlayingMovies=useSelector(
      (store)=>store.movies.nowPlayingMovies
    );



    //fetch data from TMDB API and update store
  const getNowPlayingMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);

    const json=await data.json();
    
    dispath(addNowPlayingMovies(json.results));
  };


  useEffect(()=>{
    if(!nowPlayingMovies) getNowPlayingMovies();
  } , []);

}

export default useNowPlayingMovies;