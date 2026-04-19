import React from 'react';

const SearchBox = ({ onInputChange }) => {
    return(
        <div>
            <input
            onChange={(e) => onInputChange(e.target.value)} />
        </div>
    );
};