import React from 'react';
import styles from './FilmDescription.css';

const FilmDescription = (props) => (
    <div className={styles.filmDescription}>
        {props.description}
    </div>
)

export default FilmDescription;
