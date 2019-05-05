import React from 'react';
import styles from './SearchField.css';
import debounce from 'lodash/debounce';

const SearchField = ({ value, onChange }) => {
    return (<input type="text"
        className={styles.searchField}
        onChange={onChange}
        value={value}
        autoFocus
    />)
};

export default SearchField;
