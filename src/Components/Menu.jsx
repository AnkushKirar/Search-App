import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'; // Use free-regular-svg-icons for thin icons



const Menu = () => {
  return (
    <>
    <div style={{backgroundColor:"white"}}>
        <h1>Search Result</h1>
        <div className='Search_result_Container'>
            <div className='side_bar'>
              <div>
                <h3>BRAND</h3>
                <label htmlFor="mango">Mango</label>
                <input type="checkbox"  id='mango'/><br />
                <label htmlFor="mango">H&M</label>
                <input type="checkbox"  id='H&M'/>
                </div>  
            </div>
            <div className='Search_item_Container'>
                <div className='card'>
                    
                    <div style={{ backgroundImage: 'url("https://tse1.mm.bing.net/th?id=OIP.ZpgL-9LjKksUTspHysxIzwHaJ-&pid=Api&P=0&h=180")' }} className='img_search'>
                       <FontAwesomeIcon icon={faHeart} className='heart_icon' />
                    </div>                                   
                     
                    <p className='Item_name'>Name_of_item</p>
                    <div className='Price_tag'>
                      <p className='Old_Price'>Rs.2999</p>
                      <p className='New_Price'>Rs.2499</p>
                    </div>
                    <div className='Rating'>
                        <p>rating</p>
                        <p>(20)</p>
                        </div>
                </div>
            </div>

        </div>

    </div>
      
    </>
  )
}

export default Menu
