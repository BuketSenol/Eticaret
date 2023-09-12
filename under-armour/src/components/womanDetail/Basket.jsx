import React from 'react'

const product = {
    img: "img/womanDetail-img/detail-img1.jpg",
    price1: "1.190,00TL",
    price2: "830,00TL",
    count: "30%",
}


function Basket() {

    return (
        <>
            <div className='container-fluid basket-cont'>
                <div className="row justify-content-evenly position-relative ">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2 basket-img px-0">
                                <img src={product.img} alt="" />
                            </div>
                            <div className="col px-1">
                                <h5>KADIN UA RUSH <sup className='font-75'>TM</sup>  CİACA ATLET</h5>
                                <div className='row'>
                                    <div className="col-sm-4 col-6 text-center">
                                        <p className='mb-0 text-decoration-line-through fw-lighter mt-md-2 w-100 '>{product.price1}</p>
                                        <p className='fw-medium'>{product.price2}</p>
                                    </div>
                                    <div className=" col-md-2 col-sm-3 col-4 text-align-center p-0 mt-md-2 ms-md-0 ms-sm-5
                                    ">
                                        <div className=' text-center bg-success text-white '>
                                            <p className='mb-0'>{product.count}</p>
                                            <p>İndirim</p>
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex cargo-box ms-lg-0 ps-lg-0 ps-md-2 ps-0" >
                                        <img width={40} src="img/womanDetail-img/cargo1.png" alt="" />
                                        <p className='text-success align-self-end'>Ücretsiz Kargo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row row-cols-2 justify-content-start align-items-center m-auto h-100 mt-md-3">
                            <div className='basket-select w-25 me-4 d-md-flex d-sm-none d-none'>
                                <form className='position-relative w-100' action="">
                                    <label className='sort fw-medium font-1  ' htmlFor="">adet</label>
                                    <select className="form-select form-select mb-3 form-control " aria-label=".form-select example">
                                        <option>1</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="3">4</option>
                                        <option value="3">5</option>
                                        <option value="3">6</option>
                                    </select>
                                </form>
                            </div>
                            <button className='basket-btn btn btn-danger btn-outline-danger mb-lg-3 mb-md-0  text-white '>Sepete Ekle</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Basket