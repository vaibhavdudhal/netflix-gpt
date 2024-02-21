
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import secondaryContainer from './secondaryContainer';


const Browse = () => {
     
  //custom hook
    useNowPlayingMovies();

  return (
    <div>
        <Header/>
        <MainContainer/>
        <secondaryContainer/>


    </div>
  )
};

export default Browse;