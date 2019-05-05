import React from 'react';
import styles from './FilmCover.css';

const FilmCover = ({ src, alt }) => (
    <img
        className={styles.filmCover}
        src={src}
        alt={alt}
    />
);

export default FilmCover;
