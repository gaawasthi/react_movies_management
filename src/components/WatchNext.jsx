import React from 'react';
import MovieCard2 from './MovieCard2';
import { useSelector } from 'react-redux';
import Loading from './Loading';

const WatchNext = () => {
  const { currentUser, loading, error } = useSelector((state) => state.auth);

  const watchNext = currentUser?.watchNext || [];

  return (
    <div className="p-5 min-h-screen ">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className=" mt-20  font-bold text-4xl text-lg text-black dark:text-white mb-6">
            Watch Next
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {watchNext.length > 0 ? (
              watchNext.map((movie) => (
                <MovieCard2
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  vote_average={movie.vote_average}
                  poster={movie.poster_path}
                  release_date={movie.release_date}
                  mod = "watchnext"
                />
              ))
            ) : (
              <p className="text-white text-center col-span-full mt-10">
                No watchNext movies added yet.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default WatchNext;
