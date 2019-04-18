import React from 'react';
import styles from './FilmRating.css';

const FilmRating = (props) => (
    <span className={styles.filmRating}>
        {props.rating}
    </span>
)

export default FilmRating;
