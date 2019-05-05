import React from 'react';
import styles from './FilmRating.css';

const FilmRating = ({ rating }) => (
    <span className={styles.filmRating}>
        {rating}
    </span>
)

export default FilmRating;
