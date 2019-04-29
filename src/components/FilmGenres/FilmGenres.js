import React from 'react';
import styles from './FilmGenres.css';

const FilmGenres = (props) => (
    <span className={styles.filmGenres}>
        {props.genres.join(', ')}
    </span>
)

export default FilmGenres;
