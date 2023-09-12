import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const navList=[
    {id:1, link:"Üst Giyim"},{id:2, link:"Spor Sütyenleri"},{id:3, link:"Kolsuz ve Atletler"},{id:4, link:"Kısa Kollular"},{id:5, link:"Uzun Kollular"},{id:6, link:"Kapşonlu Üst ve Sweatshirtler"}
]

function MainNavHeader() {

  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(navList);

    const mouseWheelHandler = (e) => {
      const race = 15;

      if (e.deltaY > 0) {
        document.querySelector('.main-header').scrollLeft += race;
      } else {
        document.querySelector('.main-header').scrollLeft -= race;
      }

      e.preventDefault();
    };

    const mouseWheelElement = document.querySelector('.main-header');
    mouseWheelElement.addEventListener('wheel', mouseWheelHandler);

    return () => {
      mouseWheelElement.removeEventListener('wheel', mouseWheelHandler);
    };
  }, []);

  return (
    <div className='container-fluid main-header d-md-none' >
        <div className="main-nav-list">
            {
                navList?.map((linkItems)=>{
                    return(
                        <Link key={linkItems.id} className='sub-item' to="#"> {linkItems.link}  <img className='ms-1' src="img/womenPage-img/arrow.svg" alt="" /></Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MainNavHeader