'use client';
import React, { useState } from 'react';
import styles from './index.module.css';
import data from '../../utils/data.json';
import TrendingNow from '../TrendingNowSection';
import FeaturedVideo from '../FeaturedVideoSection';  

interface Movie {
  Id: string;
  Title: string;
  CoverImage: string;
  Description: string;
  Category: string;
  ReleaseYear: string;
  MpaRating: string;
  Duration: number;
}


interface FeaturedVideoProps {
  featuredMovie: Movie;
  isVideoPlaying: boolean;
  changePicToMovie: () => void;
}


interface TrendingNowProps {
  handleMovieClick: (movie: Movie) => void;
}
const Home = () => {
  const [featuredMovie, setFeaturedMovie] = useState(data.Featured); 
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); 
  const [trendingNow] = useState<Movie[]>(data.TendingNow); 

  const handleMovieClick = (movie:Movie) => {
    setFeaturedMovie(movie); 
    setIsVideoPlaying(false); 

    
    setTimeout(() => {
      setIsVideoPlaying(true); 
    }, 1000);
  };

  
  const changePicToMovie = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className={styles.container}>
      <FeaturedVideo
        featuredMovie={featuredMovie}
        changePicToMovie={changePicToMovie}
      />

      <TrendingNow handleMovieClick={handleMovieClick} />
    </div>
  );
};

export default Home;
