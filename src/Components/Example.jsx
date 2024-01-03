// import React, { useState } from 'react';
// import faker from 'faker';
// import image from '../assets/heart-regular.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faHeart, faStar, faHouse } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

// library.add(faHeart, faStar, faHouse);

// const Menu = () => {
//   const [heart, setHeart] = useState(false);
//   const [view, setView] = useState(false);

//   // Function to convert numeric rating to stars
//   const renderStars = (rating) => {
//     const starArray = Array.from({ length: 5 }, (_, index) => (
//       <FontAwesomeIcon key={index} icon={index < Math.floor(rating) ? 'star' : 'star-o'} />
//     ));
//     return starArray;
//   };

//   // Generate a specified number of fake items
//   const numberOfItems = 10;
//   const fakeDataArray = Array.from({ length: numberOfItems }, (_, index) => ({
//     id: index + 1,
//     image: faker.image.imageUrl(),
//     itemName: faker.commerce.productName(),
//     oldPrice: faker.commerce.price(),
//     newPrice: faker.commerce.price(),
//     rating: faker.random.number({ min: 1, max: 5, precision: 0.1 }), // Ensure rating is between 1 and 5
//   }));

//   return (
//     <>
//       <div style={{ backgroundColor: 'white' }}>
//         {/* ... (your existing JSX code) */}
//         <div className='Search_item_Container'>
//           {fakeDataArray.map((fakeData) => (
//             <div key={fakeData.id} className='card' onMouseOver={() => setView(true)} onMouseOut={() => setView(false)}>
//               <div style={{ backgroundImage: `url("${fakeData.image}")` }} className='img_search'>
//                 {!heart ? (
//                   <img src={image} className={`heart_icon`} onClick={() => setHeart(!heart)} />
//                 ) : (
//                   <FontAwesomeIcon icon={faHeart} style={{ color: '#ff0000' }} className={`heart_icon`} onClick={() => setHeart(!heart)} />
//                 )}
//                 <p className={`${view}_View_product`}>View Product</p>
//               </div>
//               <p className='Item_name'>{fakeData.itemName}</p>
//               <div className='Price_tag'>
//                 <p className='Old_Price'>{`Rs.${fakeData.oldPrice}`}</p>
//                 <p className='New_Price'>{`Rs.${fakeData.newPrice}`}</p>
//               </div>
//               <div className='Rating'>{renderStars(fakeData.rating)}</div>
//             </div>
//           ))}
//         </div>
//         {/* ... (your existing JSX code) */}
//       </div>
//     </>
//   );
// };

// export default Menu;






import React ,{useState,useEffect} from 'react';
import image from '../assets/heart-regular.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart,faHouse } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"
library.add(faHeart,faHouse,faStar)



const Menu = () => {
    const [heart, setHeart] = useState(false)
    const [view,setView] = useState(false)
    const [Data,setData] = useState([]);

    useEffect(()=>{
        const fetchData= async ()=>{
            try{
                const response = await fetch("https://fakerapi.dev/api/v1/commerce?_quantity=100");
                const data = await response.json();
                setData(data.data);}
                catch(e){
                    console.log('Error fetching fake data :', error)

                }
            }
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
        <Link to = '/' className='home_icon'><FontAwesomeIcon icon={faHouse} /></Link>
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
          {fakeData.map((item) => (
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
              <div className='Rating'>{renderStars(item.rating)}</div>
            </div>
          ))}
        </div>
        </div>

    </div>
      
    </>
  )
}

export default Menu;




import React ,{useState} from 'react';
import image from '../assets/heart-regular.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart,faHouse } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"
library.add(faHeart,faHouse)


const Menu = () => {
    const [heart, setHeart] = useState(false)
    const [view,setView] = useState(false)
  return (
    <>
    <div style={{backgroundColor:"white"}}>
        <Link to = '/' className='home_icon'><FontAwesomeIcon icon={faHouse} /></Link>
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
                <div className='card' onMouseOver={()=>setView(true)} onMouseOut={()=>setView(false)}>
                    
                    <div style={{ backgroundImage: 'url("https://tse1.mm.bing.net/th?id=OIP.ZpgL-9LjKksUTspHysxIzwHaJ-&pid=Api&P=0&h=180")' }} className='img_search'>
                    {!heart?
                        <img src={image} className = {`heart_icon`} onClick={()=>setHeart(!heart)} />:<FontAwesomeIcon icon="fa-solid fa-heart" style={{color: "#ff0000",}} className = {`heart_icon`} onClick={()=>setHeart(!heart)} />}
                       <p className= {`${view}_View_product`}>View Product</p>
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

export default Menu;
