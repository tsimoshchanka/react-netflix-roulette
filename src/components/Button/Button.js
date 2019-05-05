import React from 'react';
import styles from './Button.css';

const Button = ({ customClass, title, onClick }) => (
    <button type="button"
        className={styles[customClass] || styles.button}
        onClick={onClick}>
        {title}
    </button>
)

export default Button;
