import React from 'react';
import styles from './ItemImage.css';

const ItemImage = ({ img, title }) => (
    <img className={styles.itemImage} src={img} alt={title} />
);

export default ItemImage;
