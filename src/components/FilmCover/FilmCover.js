import React from 'react';
import styles from './FilmCover.css';

const FilmCover = (props) => (
    <img
        className={styles.filmCover}
        src={props.src}
        alt={props.alt}
    />
);

export default FilmCover;
