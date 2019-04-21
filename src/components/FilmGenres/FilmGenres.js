import React from 'react';
import styles from './FilmGenres.css';

const FilmGenres = ({ genres }) => (
    <span className={styles.filmGenres}>
        {genres.join(', ')}
    </span>
)

export default FilmGenres;
