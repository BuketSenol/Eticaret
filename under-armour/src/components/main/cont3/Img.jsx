import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

function Img({ imgCont }) {
    return (

        <div className='mb-5'>
            <OwlCarousel items={1}
                className="owl-theme product-owl"
            >
                <div className="cont3 ">
                    <Link to="/" className='text-decoration-none '>
                        <img class=" " src={imgCont.imgUrl} alt="" />
                        <div className='shopping-body'></div>
                        <div className=" shopping-content">
                            <h3 className='hero-title' >{imgCont?.title}</h3>
                            <p className='shopping-text' >{imgCont?.text}</p>
                            <h3 className='hero-sub-title' >{imgCont?.subtitle}</h3>
                            <Link to="/">
                                <button className=" btn btn-lg btn-shopping heroContent-btn ">ALIŞVERİŞE BAŞLA</button>
                            </Link>
                        </div>
                    </Link>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default Img