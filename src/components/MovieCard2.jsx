import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFavorite, removeRecent, removeWatchNext } from '../redux/features/authSlice';
import WatchNext from './WatchNext';

const MovieCard2 = ({
  id,
  title,
  vote_average,
  poster,
  release_date,
  mod,

}) => {
  const navigate = useNavigate();
  const imageBase = 'https://image.tmdb.org/t/p/original/';
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(`/movies/${id}`);
  };
const onRemove = (e) => {
  e.stopPropagation();
  if (mod=="favo"){
      dispatch(removeFavorite(id));
  }else if(mod=="watchnext"){
     dispatch(removeWatchNext(id))

  }
  else{
        dispatch(removeRecent(id))
   
  }
};



  return (
    <div className="flex flex-col  p-2 text-sm">
      <div
        className="relative rounded-2xl  overflow-hidden shadow-lg group bg-gray-900 cursor-pointer"
        onClick={handleClick}
      >
        <div
          className="pt-[150%] bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageBase}${poster})` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 rounded-2xl"></div>

        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-yellow-400 text-sm font-semibold rounded-full px-3 py-1 flex items-center gap-1 z-10">
          ⭐ {vote_average?.toFixed(1)}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
          <h3 className="text-base font-semibold leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-300">{release_date?.slice(0, 4)}</p>
        </div>
      </div>

      <button
        onClick={onRemove}
        className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg shadow-md transition"
      >
        Remove
      </button>
    </div>
  );
};

export default MovieCard2;
