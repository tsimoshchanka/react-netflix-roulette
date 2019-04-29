import React from 'react';
import styles from './SearchField.css';

const SearchField = ({ value, onChange }) => (
    <input type="text"
        className={styles.searchField}
        onChange={onChange}
        value={value}
    />
);

export default SearchField;
