import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from '../redux/features/movieSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import MovieCard from './MovieCard';
import Loading from './Loading';

const Upcoming = () => {
  const dispatch = useDispatch();
  const { upcoming, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  if (error)
    return <p className="text-red-500 m-5 text-center">Error: {error}</p>;

  return (
    <div className="px-10 my-10 p-10">
      {loading ? (
        <Loading />
      ) : (
        <>
         <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl  text-black dark:text-white font-bold">Upcoming Movies</h1>
            <button className="text-lg text-black dark:text-white border border-gray-500 px-4 py-1 rounded-lg hover:bg-gray-700 transition">
              View More
            </button>
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={15}
            slidesPerView={6}
            navigation
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            className="pb-5"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 15 },
              1280: { slidesPerView: 6, spaceBetween: 15 },
            }}
          >
            {upcoming?.map((movie, index) => (
              <SwiperSlide key={index}>
                <MovieCard
                  id={movie.id}
                  title={movie.title}
                  vote_average={movie.vote_average}
                  poster={movie.poster_path}
                  release_date={movie.release_date}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default Upcoming;
