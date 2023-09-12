import React from 'react'
import { Link } from 'react-router-dom'

function HeroSlider({ heros }) {
  return (
    <div className='hero-container position-relative'>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-inner position-relative">
          {
            heros?.map(item => {
              return (
                <div key={item.id} className={item?.id === 1 ? "carousel-item active" : "carousel-item"}>
                  <img src={item?.imgUrl} className="d-block w-100" alt="..." />
                  <div className="">
                    <div className="position-relative " >
                      <div className={item?.type ==="left" ? " carousel-content hero-content" : "carousel-content  hero-content2"}>
                        <h3 className='hero-title' >{item?.title}</h3>
                        <p className='hero-text' >{item?.text}</p>
                        <p >{item?.text1}</p>
                        <h3 className='hero-sub-title' >{item?.subtitle}</h3>
                        <Link to="">
                          <button className=" btn btn-lg btn-white heroContent-btn">ALIŞVERİŞE BAŞLA</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
        <button className="carousel-control-prev hero-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon " aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next hero-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon " aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default HeroSlider


