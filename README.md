# TV Application Web App

## Overview

This project is a TV application built with React.js that provides a user-friendly interface for viewing movies and TV shows. The app features a responsive design with a main menu, a featured video section, and a carousel for trending videos. 

## Features

- **Home Page:** A landing page with a clean layout based on the provided design.
- **Main Menu:** 
  - Icons for navigation (Search, Home, TV Shows, Movies, Genres, Watch Later).
  - Animated menu that floats in from the left with a semi-transparent background on hover.
  - Profile info and additional menu items (language, help, exit) displayed at the bottom when opened.

- **Main Featured Video:**
  - Displays the latest featured movie with:
    - Cover image
    - Category name (Movie)
    - Movie logo (transparent PNG)
    - Release year
    - MPA rating
    - Duration
    - Short description
    - Buttons for "Play" and "More Info"

- **Trending Now Section:**
  - Displays a carousel of trending videos (up to 50).
  - Shows only the first 8 elements, with the ability to scroll or drag to view more.
  - Clicking on a movie updates the featured video section and plays the selected video in the background after a 2-second delay.
  - The selected movie's ID is stored in session storage, allowing for sorted viewing based on the last clicked movie upon refresh.

## Getting Started

## Prepare

Install all project dependencies - `npm install`
Install Husky to enable the pre-commit hooks - `npm run prepare`

## Run the application

npm run dev

