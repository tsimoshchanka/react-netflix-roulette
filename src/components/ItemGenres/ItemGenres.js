import React from 'react';
import styles from './ItemGenres.css';

const ItemGenres = ({ genres }) => (
    <div className={styles.ItemGenres}>
        {genres.join(', ')}
    </div>
)

export default ItemGenres;
