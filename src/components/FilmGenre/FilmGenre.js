import React from 'react';
import styles from './FilmGenre.css';

const FilmGenre = (props) => (
    <span className={styles.filmGenre}>
        {props.genre}
    </span>
)

export default FilmGenre;
