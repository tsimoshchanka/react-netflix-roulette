import React from 'react';
import styles from './FilmDescription.css';

const FilmDescription = ({ description }) => (
    <div className={styles.filmDescription}>
        {description}
    </div>
)

export default FilmDescription;
