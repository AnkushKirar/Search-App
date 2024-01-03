import React ,{useState,useEffect} from 'react';
import image from '../assets/heart-regular.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart,faHouse ,faStar} from '@fortawesome/free-solid-svg-icons';
// import {Link} from "react-router-dom"
library.add(faHeart,faHouse,faStar)



const Menu = () => {
    const [heart, setHeart] = useState(false)
    const [view,setView] = useState(false)
    const [Data,setData] = useState([]);

    useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await fetch('https://fakerapi.dev/api/v1/commerce?_quantity=10&type=clothes');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setData(data.data);
        } catch (error) {
          console.log('Error fetching fake data:', error);
        }
      };
         fetchData();
        }
      ,[]
    )

    const stars = (rating) =>{
        const starArray = Array.from({length:5},(_,index)=>(
            <FontAwesomeIcon key={index} icon={index < Math.floor(rating) ? 'star' : 'star-o'} />
    

        ))
        return starArray
    };
  return (
    <>
    <div style={{backgroundColor:"white"}}>
        {/* <Link to = '/' className='home_icon'><FontAwesomeIcon icon={faHouse} /></Link> */}
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
          {Data.map((item) => (
            <div key={item.id} className='card' onMouseOver={() => setView(true)} onMouseOut={() => setView(false)}>
              <div style={{ backgroundImage: `url("${item.image}")` }} className='img_search'>
                {!heart ? (
                  <img src={image} className={`heart_icon`} onClick={() => setHeart(!heart)} />
                ) : (
                  <FontAwesomeIcon icon={faHeart} style={{ color: '#ff0000' }} className={`heart_icon`} onClick={() => setHeart(!heart)} />
                )}
                <p className={`${view}_View_product`}>View Product</p>
              </div>
              <p className='Item_name'>{item.product_name}</p>
              <div className='Price_tag'>
                <p className='Old_Price'>{`Rs.${item.price}`}</p>
                <p className='New_Price'>{`Rs.${item.price - 200}`}</p>
              </div>
              <div className='Rating'>{stars(item.rating)}</div>
            </div>
          ))}
        </div>
        </div>

    </div>
      
    </>
  )
}

export default Menu;
