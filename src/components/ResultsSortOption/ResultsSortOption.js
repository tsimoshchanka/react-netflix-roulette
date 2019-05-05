import React from 'react';
import styles from './ResultsSortOption.css';

const ResultsSortOption = ({ customClass, title, onClick }) => (
    <button type="button"
        className={styles[customClass] || styles.button}
        onClick={onClick}>
        {title}
    </button>
)

export default ResultsSortOption;
