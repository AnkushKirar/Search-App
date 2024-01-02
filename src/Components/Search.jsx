import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';


const Search = () => {
  return (
    <>
    <div className="search_bar_container">
      <input type="text" className="search_filed" placeholder="Search..." />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
    </div>

    </>
  )
}

export default Search;

