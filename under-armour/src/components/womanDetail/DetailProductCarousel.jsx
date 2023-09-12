import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';



function DetailProductCarousel({ likeProducts, bestSellers, mostLookProducts }) {
    const [productsBtn, setProductsBtn] = useState(likeProducts);
    const [actButton, setActiveBtn] = useState("likeButton");

    const ButtonClick = (btnName) => {
        if (btnName === "likeButton") {
            setProductsBtn(likeProducts);
            setActiveBtn("likeButton");
        } else if (btnName === "best-sellers") {
            setProductsBtn(bestSellers);
            setActiveBtn("best-sellers");
        } else if (btnName === "most-look") {
            setProductsBtn(mostLookProducts);
            setActiveBtn("most-look");
        }
    };

    return (
        <div className='product-owl-cont'>
            <div className="container-fluid ">
                <div className="product-buttons mt-5 mx-lg-5 mx-md-3">
                    <div className="row text-lg-center justify-content-md-center m-md-auto">
                        <div className="col-lg-4 col-md-5 col-sm-4">
                            <button className={`product-btn ${actButton === "likeButton " ? "active-btn" : ""}`} onClick={() => ButtonClick("likeButton")}
                            >Bunları da Beğenebilirsiniz</button>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-4">
                            <button className={`product-btn ${actButton === "best-sellers" ? "active-btn" : " "}`} onClick={() => ButtonClick("best-sellers")}
                            >Kategoride Çok Satan Ürünler</button>
                        </div>
                        <div className="col-lg-4 col-md-7 col-sm-4 m-md-auto mt-lg-0 mt-md-2 text-md-center">
                            <button className={`product-btn ${actButton === "most-look " ? "active-btn" : ""}`} onClick={() => ButtonClick("most-look")}>Kategoride Çok Bakılan Ürünler</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid mt-3 px-5' >
                <OwlCarousel items={4}
                    className="owl-theme detail-owl product-owl"
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
                        productsBtn?.map(items => {
                            return (
                                <Link key={items.id} href="" className='text-decoration-none'>
                                    <div className="card-item">
                                        <div className='y'>
                                            <div className="img-bx">
                                                <img src={items.imgUrl} alt="" />
                                                <div className='.product-img-text'>Görüntüle</div>
                                            </div>
                                        </div>
                                        <div className="card-body  pt-2">
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
    )
}

export default DetailProductCarousel