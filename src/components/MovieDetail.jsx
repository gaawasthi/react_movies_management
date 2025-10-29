import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail } from '../redux/features/movieSlice';
import { addToFavorite, addToWatchNext } from '../redux/features/authSlice';
import { Heart, Clock } from 'lucide-react';
import Loading from './Loading';
import toast from 'not-a-toast';
import 'not-a-toast/style.css';

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail, loading, error } = useSelector((state) => state.movies);
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (id) dispatch(fetchMovieDetail(id));
        window.scrollTo({ top: 0 });

  }, [dispatch, id]);

  const isFavorite = currentUser?.favorites?.some(
    (fav) => fav.id === movieDetail?.id
  );

  const handleAddFavorite = () => {
    const movieData = {
      id: movieDetail.id,
      title: movieDetail.title,
      poster_path: movieDetail.poster_path,
      vote_average: movieDetail.vote_average,
      release_date: movieDetail.release_date,
    };
    dispatch(addToFavorite(movieData));
    toast({ message: 'Added to favorites' });
  };

  const isWatchNext = currentUser?.watchNext?.some(
    (el) => el.id === movieDetail?.id
  );

  const handleWatchNext = () => {
    const movieData = {
      id: movieDetail.id,
      title: movieDetail.title,
      poster_path: movieDetail.poster_path,
      vote_average: movieDetail.vote_average,
      release_date: movieDetail.release_date,
    };
    dispatch(addToWatchNext(movieData));
    toast({ message: 'Added to watch next' });
  };

  if (loading) return <Loading />;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  if (!movieDetail) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white mt-15 px-4 py-10 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Poster Image */}
        <div className="w-full md:w-1/3">
          <img
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt={movieDetail.title}
          />
        </div>

        {/* Movie Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold leading-tight">{movieDetail.title}</h1>
          {movieDetail.tagline && (
            <p className="italic text-gray-400">"{movieDetail.tagline}"</p>
          )}
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            {movieDetail.overview}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <span>⭐ {movieDetail.vote_average.toFixed(1)}</span>
            <span>•</span>
            <span>📅 {movieDetail.release_date}</span>
          </div>

          {currentUser && (
            <div className="flex flex-wrap gap-3 pt-4">
              <button
                onClick={handleAddFavorite}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  isFavorite
                    ? 'bg-purple-700 text-white'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
              >
                <Heart size={18} /> {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
              </button>

              <button
                onClick={handleWatchNext}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  isWatchNext
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-700 hover:bg-gray-800 text-white'
                }`}
              >
                <Clock size={18} /> {isWatchNext ? 'Added to Watch Next' : 'Add to Watch Next'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
