import React from 'react';
import styles from './FilmTitle.css';

const FilmTitle = ({ title }) => (
    <span className={styles.filmTitle}>
        {title}
    </span>
)

export default FilmTitle;
