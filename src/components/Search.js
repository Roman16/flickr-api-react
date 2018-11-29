import React from 'react';

const Search = ({search, handleChangeSearch, onSearch}) => {
    return (
        <form onSubmit={onSearch} className='search-block'>
            <input
                type="text"
                value={search}
                onChange={handleChangeSearch}
            />

            <button>
                Search
            </button>
        </form>

    )
};

export default Search;