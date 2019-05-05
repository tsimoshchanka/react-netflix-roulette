import React from 'react';
import styles from './ItemTitle.css';

const ItemTitle = ({ title }) => (
    <div className={styles.itemTitle}>
        {title}
    </div>
)

export default ItemTitle;
