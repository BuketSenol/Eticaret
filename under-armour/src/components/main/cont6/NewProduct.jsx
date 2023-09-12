import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

function NewProduct({ newProduct }) {
    return (
        <div>
            <div className="container-fluid product-cont">
                <div className="row  product-row">
                    <div className="col-10 m-auto">
                        <div className="new-product-title">
                            <h4 className='mb-3 fw-medium'>Yeni Gelenler</h4>
                        </div>
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
                                newProduct?.map(items => {
                                    return (
                                        <Link key={items.id} href="" className='text-decoration-none text-black'>
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
                                                            <li className="price-item text-success fw-bold">{items.price}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="card-footer text-center bg-transparent btn-d-none">
                                                    <div className="btn btn-white equipment-btn">Görüntüle</div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewProduct