import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

function Application() {

  return (
    <div className='mb-5'>
      <OwlCarousel items={1}
        className="owl-theme product-owl"
      >
        <Link to="">
          <img class="" src="img/cont5-img/application.jpg" alt="" />

        </Link>
      </OwlCarousel>
    </div>
  )
}

export default Application