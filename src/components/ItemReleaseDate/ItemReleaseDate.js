import React from 'react';
import styles from './ItemReleaseDate.css';

const ItemReleaseDate = (props) => (
    <div className={styles.itemReleaseDate}>
        {props.year.slice(0, 4)}
    </div>
)

export default ItemReleaseDate;
