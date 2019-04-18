import React from 'react';
import styles from './ItemImage.css';

const ItemImage = (props) => (
    <img className={styles.itemImage} src={props.img} alt={props.title} />
);

export default ItemImage;
