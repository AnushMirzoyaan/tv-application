'use client';
import React, { useState } from 'react';

import { FaPlay } from 'react-icons/fa6';

import styles from './index.module.css';

const formatSeconds = (seconds: number) => {
  console.log(typeof seconds);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
};

interface FeaturedMovie {
  CoverImage: string;
  BackgroundImage: string;
  Category: string;
  Title: string;
  ReleaseYear: string;
  MpaRating: string;
  Duration: number;
  Description: string;
}

interface FeaturedVideoProps {
  featuredMovie: FeaturedMovie;
  changePicToMovie: () => void;
}

const FeaturedVideo: React.FC<FeaturedVideoProps> = ({
  featuredMovie,
  changePicToMovie,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.featuredImage}
        style={{
          backgroundImage: `url(/assets/${featuredMovie.BackgroundImage})`,
        }}
      >
        <div className={styles.infoSection}>
          <p>{featuredMovie.Category}</p>
          <h1 className={styles.title}>{featuredMovie.Title}</h1>
          <div className={styles.movieDetails}>
            <span>{featuredMovie.ReleaseYear}</span>
            <span>{featuredMovie.MpaRating}</span>
            <span>{formatSeconds(featuredMovie.Duration)}</span>
          </div>
          <div className={styles.movieDescription}>
            {featuredMovie.Description}
          </div>
          <div className={styles.actionsContainer}>
            <button className={styles.playButton} onClick={changePicToMovie}>
              <FaPlay />
              <span>Play</span>
            </button>
            <button className={styles.moreInfoButton}>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideo;
