
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

import { useDispatch } from 'react-redux';



const useNowPlayingMovies=()=>{

    const dispath=useDispatch();

    //fetch data from TMDB API and update store
  const getNowPlayingMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);

    const json=await data.json();
    console.log(json.results);
    dispath(addNowPlayingMovies(json.results));
  };


  useEffect(()=>{
    getNowPlayingMovies();
  } , []);

}

export default useNowPlayingMovies;