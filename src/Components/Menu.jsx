import React ,{useState} from 'react';
import image from '../assets/heart-regular.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)






const Menu = () => {
    const [heart, setHeart] = useState(false)
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
                    {!heart?
                        <img src={image} className = {`heart_icon`} onClick={()=>setHeart(!heart)} />:<FontAwesomeIcon icon="fa-solid fa-heart" style={{color: "#ff0000",}} className = {`heart_icon`} onClick={()=>setHeart(!heart)} />}
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
