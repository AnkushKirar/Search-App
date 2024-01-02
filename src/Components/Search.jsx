import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';




const Search = () => {
  return (
    <div className='Super_conatiner'>
    <img src= "https://uploads-ssl.webflow.com/622778f0460ef2a7b46117c1/62277b0ea97763788d756b0b_ZEVI-GG-LogoDesogn%20-Option-2-Black.png" alt="logo"  id='img'/>
    <div className="search_bar_container">
      <input type="text" className="search_filed" placeholder="Search..." />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
    </div>
    </div>
  )
}

export default Search;

