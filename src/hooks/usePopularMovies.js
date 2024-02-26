
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

import { useDispatch } from 'react-redux';



const usePopularMovies=()=>{

    const dispath=useDispatch();

    //fetch data from TMDB API and update store
  const getPopularMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);

    const json=await data.json();
    
    dispath(addPopularMovies(json.results));
  };


  useEffect(()=>{
    getPopularMovies();
  } , []);

}

export default usePopularMovies;