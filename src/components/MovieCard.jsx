import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { recentlyViewed } from '../redux/features/authSlice';

const MovieCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imageBase = 'https://image.tmdb.org/t/p/original/';
  const { id, title, vote_average, poster, release_date } = props;
  const movieData = {
    id: id,
    title: title,
    poster_path: poster,
    vote_average: vote_average,
    release_date: release_date,
  };
  const handleClick = () => {
    navigate(`/movies/${id}`);
    dispatch(recentlyViewed(movieData));
  };
  return (
    <div
      onClick={handleClick}
      className="relative rounded-2xl overflow-hidden shadow-lg group bg-gray-900 mb-6"
    >
      <div
        className="pt-[150%] bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageBase}${poster})` }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 rounded-2xl"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>

      <div className="absolute top-3 right-3 bg-black text-yellow-400 text-sm  pl-2 pr-2 m-2  rounded-4xl">
        ⭐ {vote_average?.toFixed(1)}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
        <h3 className="text-base font-semibold leading-snug line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-300">{release_date.slice(0, 4)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
