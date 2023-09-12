import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

function ProductSlider({ inspectedProducts, popularProducts }) {
    const productsCarousel = [inspectedProducts, popularProducts]
    const [products, setProducts] = useState(productsCarousel)
    const [Product, setProduct] = useState(0)
    
    

    const [activeBtn, setActiveBtn] = useState("inspected")
    const asd = () => {
        setActiveBtn("inspected");
        setProduct(0)
        // setProducts(asd1[0])
    }
    
    const asd2 = () => {
        setActiveBtn("popular")
        setProduct(1)
        // setProducts(asd1[1]);
    }
    return (
        <div>
            <div className='buttons row mx-0'>
                <div className="col-lg-8 col-md-10 col-12 product-btn-scroll product-buttons">
                    <button className={`product-btn me-4 ${activeBtn === "inspected" ? "active-btn" : null}`} onClick={asd}>Daha Önce İncelediğiniz Ürünler</button>
                    <button className={`product-btn me-4 ${activeBtn === "popular" ? "active-btn" : null}`} onClick={asd2} >En Popüler Ürünler</button>

                </div>
            </div>

            <div className="container-fluid product-cont">
                <div className="row  product-row">
                    <div className={`col-10 m-auto ${activeBtn === "inspected" ? "d-flex" : "d-none"}`}>
                        <OwlCarousel items={4}
                            className="owl-theme product-owl"
                            loop
                            nav
                            dots={false}
                            margin={10}
                            responsive={
                                {
                                    '0': {
                                        items: 2
                                    },
                                    '750': {
                                        items: 4
                                    },
                                }
                            }
                        >
                            {
                                products[0]?.map(items => {
                                    return (
                                        <Link key={items.id} href="" className='text-decoration-none'>
                                            <div className="card-item">
                                                <div className='y'>
                                                    <div className="img-bx">
                                                        <img src={items.imgUrl} alt="" />
                                                        <div className='.product-img-text'>Görüntüle</div>
                                                    </div>
                                                </div>
                                                <div class="card-body  pt-2">
                                                    <h6 className="card-subtitle">{items.title}</h6>
                                                    <div>
                                                        <ul className="price-div d-flex">
                                                            {
                                                                items.price1 === "" ? <li className="price-item">{items.price1}</li> : <li className="price-item1 me-lg-3 me-md-1 me-3">{items.price1}</li>
                                                            }
                                                            <li className="price-item  me-lg-3 me-md-1 me-3  fw-bold">{items.price2}</li>
                                                            <li className="price-item text-success fw-bold ">{items.price3}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer text-center bg-transparent btn-d-none">
                                                <div className="btn btn-white equipment-btn ">Görüntüle</div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </div>
                    <div className={`col-10 m-auto ${activeBtn === "popular" ? "d-flex" : "d-none"}`}>
                        <OwlCarousel items={4}
                            className="owl-theme product-owl"
                            loop
                            nav
                            dots={false}
                            margin={10}
                            responsive={
                                {
                                    '0': {
                                        items: 2
                                    },
                                    '750': {
                                        items: 4
                                    },
                                }
                            }
                        >
                            {
                                products[1]?.map(items => {
                                    return (
                                        <Link key={items.id} href="" className='text-decoration-none'>
                                            <div className="card-item">
                                                <div className='y'>
                                                    <div className="img-bx">
                                                        <img src={items.imgUrl} alt="" />
                                                        <div className='.product-img-text'>Görüntüle</div>
                                                    </div>
                                                </div>
                                                <div class="card-body  pt-2">
                                                    <h6 className="card-subtitle">{items.title}</h6>
                                                    <div>
                                                        <ul className="price-div d-flex">
                                                            {
                                                                items.price1 === "" ? <li className="price-item">{items.price1}</li> : <li className="price-item1 me-lg-3 me-md-1 me-3">{items.price1}</li>
                                                            }
                                                            <li className="price-item  me-lg-3 me-md-1 me-3  fw-bold">{items.price2}</li>
                                                            <li className="price-item text-success fw-bold ">{items.price3}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer text-center bg-transparent btn-d-none">
                                                <div className="btn btn-white equipment-btn ">Görüntüle</div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default ProductSlider