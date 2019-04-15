import React from 'react';
import styles from './ItemTitle.css';

const ItemTitle = (props) => (
    <div className={styles.itemTitle}>
        {props.title}
    </div>
)

export default ItemTitle;
