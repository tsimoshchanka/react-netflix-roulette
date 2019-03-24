import React from 'react';

const SearchField = (props) => (
    <input type="text"
        onChange={props.onChange}
        value={props.value}
    />
);

export default SearchField;
