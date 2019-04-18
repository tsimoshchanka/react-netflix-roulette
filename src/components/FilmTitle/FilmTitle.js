import React from 'react';
import styles from './FilmTitle.css';

const FilmTitle = (props) => (
    <span className={styles.filmTitle}>
        {props.title}
    </span>
)

export default FilmTitle;
