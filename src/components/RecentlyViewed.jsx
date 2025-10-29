import React from 'react';
import MovieCard2 from './MovieCard2';
import { useSelector } from 'react-redux';
import Loading from './Loading';

const RecentlyViewed = () => {
  const { currentUser, loading, error } = useSelector((state) => state.auth);

 
  const rev = currentUser?.recentlyViewed?.slice().reverse() || [];

  return (
    <div className="p-5">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="mt-20 text-lg font-bold text-4xl text-black dark:text-white mb-6">
            Recently Viewed
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {rev.length > 0 ? (
              rev.map((movie) => (
                <MovieCard2
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  vote_average={movie.vote_average}
                  poster={movie.poster_path}
                  release_date={movie.release_date}
                  mod={"rc"}
                />
              ))
            ) : (
              <p className=" text-black dark:text-white text-center col-span-full mt-10">
                No Recently Viewed movies added yet.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default RecentlyViewed;
