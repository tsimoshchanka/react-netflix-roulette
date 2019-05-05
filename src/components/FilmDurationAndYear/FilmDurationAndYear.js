import React from 'react';
import styles from './FilmDurationAndYear.css';

const FilmDurationAndYear = ({ duration, year }) => (
    <div className={styles.filmDurationAndYear}>
        <span className={styles.filmDuration}>{duration} min</span>
        <span className={styles.filmYear}>{year}</span>
    </div>
)

export default FilmDurationAndYear;
