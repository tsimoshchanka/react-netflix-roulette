import React from 'react';
import styles from './SearchField.css';

const SearchField = (props) => (
    <input type="text"
        className={styles.searchField}
        onChange={props.onChange}
        value={props.value}
    />
);

export default SearchField;
