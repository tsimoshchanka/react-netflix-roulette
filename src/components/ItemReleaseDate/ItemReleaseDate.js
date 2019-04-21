import React from 'react';
import styles from './ItemReleaseDate.css';

const ItemReleaseDate = ({ releaseDate }) => (
    <div className={styles.itemReleaseDate}>
        {releaseDate.slice(0, 4)}
    </div>
)

export default ItemReleaseDate;
