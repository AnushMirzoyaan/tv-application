'use client';
import React, { useState } from 'react';
import styles from './index.module.css';
import data from '@/utils/data.json';
import { Movie } from '@/utils/types';
import TrendingNow from '../TrendingNowSection';
import FeaturedVideo from '../FeaturedVideoSection';

interface FeaturedVideoProps {
  featuredMovie: Movie;
  isVideoPlaying: boolean;
  changePicToMovie: () => void;
}

interface TrendingNowProps {
  handleMovieClick: (movie: Movie) => void;
}
const Home = () => {
  const [featuredMovie, setFeaturedMovie] = useState<Movie>(data.Featured);
  const [trendingNow] = useState<Movie[]>(data.TendingNow);

  const handleMovieClick = (movie: Movie) => {
    setFeaturedMovie(movie);
  };

  return (
    <div className={styles.container}>
      <FeaturedVideo featuredMovie={featuredMovie} />

      <TrendingNow handleMovieClick={handleMovieClick} />
    </div>
  );
};

export default Home;
