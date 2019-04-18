import React from 'react';
import styles from './SortOption.css';

const SortOption = (props) => (
    <button type="button"
        className={styles[props.classModifier] || styles.button}
        onClick={props.onClick}>
        {props.title}
    </button>
)

export default SortOption;
