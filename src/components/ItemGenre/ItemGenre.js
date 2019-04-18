import React from 'react';
import styles from './ItemGenre.css';

const ItemGenre = (props) => (
    <div className={styles.itemGenre}>
        {props.genre}
    </div>
)

export default ItemGenre;
