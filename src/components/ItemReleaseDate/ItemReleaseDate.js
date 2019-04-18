import React from 'react';
import styles from './ItemReleaseDate.css';

const ItemReleaseDate = (props) => (
    <div className={styles.itemReleaseDate}>
        {props.year}
    </div>
)

export default ItemReleaseDate;
