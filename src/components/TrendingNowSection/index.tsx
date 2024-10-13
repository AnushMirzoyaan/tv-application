import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../utils/data.json';
import { Movie } from '@/utils/types';

import 'swiper/css';
import styles from './index.module.css';

interface TrendingNowProps {
  handleMovieClick: (movie: Movie) => void;
}

const TrendingNow: React.FC<TrendingNowProps> = ({ handleMovieClick }) => {
  const getSpaceBetween = () => {
    const count = data.TendingNow.length;
    if (count <= 3) return 20;
    if (count <= 5) return 40;
    return 80;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending Now</h1>
      <Swiper
        spaceBetween={getSpaceBetween()}
        breakpoints={{
          768: { slidesPerView: Math.min(data.TendingNow.length, 5) },
          1024: { slidesPerView: Math.min(data.TendingNow.length, 7) },
          1280: { slidesPerView: Math.min(data.TendingNow.length, 10) },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {data.TendingNow.map((movie: Movie) => (
          <SwiperSlide key={movie.Id}>
            <Image
              src={`/assets/${movie.CoverImage}`}
              width={300}
              height={300}
              alt={movie.Title}
              className={styles.swiperItem}
              onClick={() => handleMovieClick(movie)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingNow;
