import React from 'react';
import styles from './ResultsSortOption.css';

const ResultsSortOption = (props) => (
    <button type="button"
        className={styles[props.classModifier] || styles.button}
        onClick={props.onClick}>
        {props.title}
    </button>
)

export default ResultsSortOption;