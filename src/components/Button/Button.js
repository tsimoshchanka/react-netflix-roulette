import React from 'react';
import styles from './Button.css';

const Button = (props) => (
    <button type="button"
        className={styles[props.classModifier] || styles.button}
        onClick={props.onClick}>
        {props.title}
    </button>
)

export default Button;
