import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchMovie } from '../redux/features/movieSlice';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';


const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchMovies, loading, error } = useSelector((state) => state.movies);
  const { q } = useParams();  
  const eq = decodeURIComponent(q);
  console.log(q);
  
  useEffect(() => {
    dispatch(searchMovie(eq));
    console.log(eq);
    window.scrollTo({top:0})
    
  }, [dispatch, eq]);

  if (loading) return <Loading/>
  if (error) return <p className="text-red-500 m-5 text-center">Error: {error}</p>;

  return (
    <div className='mt-15 p-10'>
      {searchMovies?.length === 0 && (
        <p className="text-white text-center mt-5">No movies found for "{eq}"</p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {searchMovies?.map((movie) => (
          <MovieCard
            id={movie.id}
            title={movie.title}
            vote_average={movie.vote_average}
            poster={movie.poster_path}
            release_date={movie.release_date}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
