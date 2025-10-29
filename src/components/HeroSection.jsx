import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../redux/features/movieSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Loading from './Loading';

const HeroSection = () => {
  const dispatch = useDispatch();
  const { popular, loading, error } = useSelector((state) => state.movies);
  const imageBase = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  if (error)
    return (
      <div className="text-center text-red-500 py-20 text-xl">
        Error: {error}
      </div>
    );

  return (
    <div className=" h-180  ">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={0}
            slidesPerView={1}
            grabCursor={true}
            loop={true}
            className="h-full"
          >
            {popular.slice(0, 5).map((movie) => (
              <SwiperSlide key={movie.id}>
                <div
                  className=" h-screen bg-cover bg-center "
                  style={{
                    backgroundImage: `url(${imageBase}${movie.backdrop_path})`,
                  }}
                >
                  {/* overlay */}

                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-black/80"></div>
                  <div className="relative z-10 flex flex-col justify-center h-full px-6 text-white max-w-6xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
                      {movie.title}
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-lg drop-shadow-md">
                      {movie.overview}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default HeroSection;
