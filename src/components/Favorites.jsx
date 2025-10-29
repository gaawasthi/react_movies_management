import React from 'react';
import MovieCard2 from './MovieCard2';
import { useSelector } from 'react-redux';
import Loading from './Loading';

const Favorites = () => {
  // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { currentUser, loading, error } = useSelector((state) => state.auth);

  const fav = currentUser?.favorites || [];

  return (
    <div className="p-5  ">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className=" mt-20 text-lg  font-bold text-4xl text-black dark:text-white mb-6">
            Favorites
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {fav.length > 0 ? (
              fav.map((movie) => (
                <MovieCard2
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  vote_average={movie.vote_average}
                  poster={movie.poster_path}
                  release_date={movie.release_date}
                  mod = {"favo"}
                />
              ))
            ) : (
              <p className=" text-black dark:text-white text-center col-span-full mt-10">
                No favorite movies added yet.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;
