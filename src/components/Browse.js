
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

import GptSearch from './GptSearch';

 
const Browse = () => {

  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

     
  //custom hook
    useNowPlayingMovies();
    usePopularMovies();

  return (
    <div>
        <Header/>
        { showGptSearch ?(   <GptSearch/> )
         :( 

          //this is jsx , expression it , takes only one pareent , so more than one add in <>   </>
         <>
         <MainContainer/>
         <SecondaryContainer/>
         </>
         )}
     
       


    </div>
  )
};

export default Browse;