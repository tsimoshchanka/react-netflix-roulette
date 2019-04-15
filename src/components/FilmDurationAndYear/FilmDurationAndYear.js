import React from 'react';
import styles from './FilmDurationAndYear.css';

const FilmDurationAndYear = (props) => (
    <div className={styles.filmDurationAndYear}>
        <span className={styles.filmDuration}>{props.duration} min</span>
        <span className={styles.filmYear}>{props.year}</span>
    </div>
)

export default FilmDurationAndYear;
