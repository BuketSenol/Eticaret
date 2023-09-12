import React, { useState } from 'react'
import ProductInfoModal from './ProductInfoModal'
import StoreModal from './StoreModal'
import StoreStockModal from './StoreStockModal'
import TopFooterData from './TopFooterData'
import { Link } from 'react-router-dom'


function DetailProductTop(props) {
    const [type, setType] = React.useState('instalment')

    props = {
        img1: "img/womanDetail-img/detail-img1.jpg",
        img2: "img/womanDetail-img/detail-img1-1.jpg",
        title: "Kadın UA RUSH™ Cicada Atlet",
        price: "1.190,00 TL",
        code: "Materyal Kodu: 1378404-369",
        campaign: "Tüm siparişlerde ücretsiz kargo",
    }
    const [activeColor, setActiveColor] = useState("bg3")

    return (
        <div>
            <div className='container-fluid cont-fluid'>
                <div className="cont-top">
                    <div className="row ">
                        <div className="col-lg-6 col-md-6 col-12  " >
                            <div className='sticky-cont '>
                                <div className="detail-img overflow-hidden position-relative">
                                {activeColor==="bg3" ? <img src={props.img1} alt="" /> :<img src={props.img2} alt="" />}
                                </div>
                                <div className="icon-left detail-icon1">
                                    <img width={17} height={23} src="img/headerimg/flame.png" alt="" />
                                    <span className='new'>YENİ</span>
                                </div>
                                <div className='img-show'>
                                    <img src="" alt="" /> <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="row ">
                                <div className="col product-info">
                                    <div className='guidance '>
                                        <p><Link href="">Anasafya</Link></p>
                                        <span className='mx-1'>/</span>
                                        <p><Link href="">Kadın</Link></p>
                                    </div>
                                    <div className="product-info-header">
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <h2 className=''>{props.title}</h2>
                                            </div>
                                            <div className="icon-right detail-icon2 ">
                                                <img src="img/womenPage-img/heart2.svg" alt="" />
                                            </div>
                                        </div>
                                        <h4 className='product-price'>{props.price}</h4>
                                        <p className='product-code'>{props.code}</p>
                                        <p className='campaign'>{props.campaign}</p>
                                    </div>
                                    <div className=".product-info-variants">
                                        <div className="instalment ">
                                            <img src="img/womanDetail-img/credit-card.png" alt="" />
                                            <button className='instalment-btn' data-bs-toggle="modal" data-bs-target="#productInfoModal" onClick={() => { setType("instalment") }}>
                                                <span> Taksit Seçenekleri</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="shipping">
                                        <div className="shipping-card">
                                            <img src="img/womanDetail-img/box.jpg" alt="" />
                                            <p className='mb-0'>Gönderime Hazır Stokta</p>
                                        </div>
                                        <div className="shipping-card">
                                            <img src="img/womanDetail-img/cargo.jpg" alt="" />
                                            <p className='mb-0'>Tüm Siparişlerde Ücretsiz Kargo</p>
                                        </div>
                                        <div className="shipping-card">
                                            <img src="img/womanDetail-img/store.jpg" alt="" />
                                            <button className='store-btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                                                <p className='store-text'  >Mağazadan Teslimat Bilgilendirmesi</p>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="size-table">
                                        <img width={15} src="img/womanDetail-img/sizes.png" alt="" />
                                        <button className='sizes-btn' data-bs-toggle="modal" data-bs-target="#productInfoModal" onClick={() => { setType("sizes") }}>
                                            <span> Beden Tablosu</span>
                                        </button>
                                    </div>
                                    <div className="store-stock">
                                          <img width={15} src="img/womanDetail-img/store-.png" alt="" />
                                        <button className='store-stock-btn' data-bs-toggle="modal" data-bs-target="#storeStockModal" >
                                            <span  > Mağaza Stok Durumu</span>
                                        </button>
                                    </div>
                                    <div className="color-box mt-4">
                                        {activeColor==="bg3" && <p className="mb-0 color-text">Yeşil</p>}
                                        {activeColor==="bg10" && <p className="mb-0 color-text">Siyah</p>}
            
                                        <div className=' d-flex mt-2'>
                                            <div className={`color-item color-btn ${activeColor === "bg10" ? "active-color" : ""}`} onMouseOver={() => {
                                                setActiveColor("bg10")
                                            }}>
                                                <button className='color-hex bg10' ></button>
                                            </div>
                                            <div className={`color-item  ${activeColor === "bg3" ? "active-color" : ""}`} onMouseOver={() => {
                                                setActiveColor("bg3")
                                            }}>
                                                <button className='color-hex bg3'></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="size-button mt-3">
                                            <button>XS</button>
                                            <button>S</button>
                                            <button>M</button>
                                            <button>L</button>
                                            <button>XL</button>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <div className='product-fit-ruler'>
                                            <div className='ruler'>
                                                <div className='ball'></div>
                                            </div>
                                        </div>
                                        <div className="product-fit">
                                            <ul>
                                                <li>Bol Kalıp</li>
                                                <li>Dar Kalıp</li>
                                                <li>Ultra Dar Kalıp</li>
                                            </ul>
                                        </div>
                                        <div className='product-ruler-info mt-2'>
                                            <p>Bol Kalıp: Rahat Kesim</p>
                                            <p>Dar Kalıp: Vücuda Oturan Kesim</p>
                                            <p>Ultra Dar Kalıp: Vücudu Saran Kesim</p>
                                        </div>
                                    </div>
                                    <div>
                                    <div className="row row-cols-2 mt-5 justiff-content-center align-items-center m-auto h-100">
                            <div className='basket-select w-25 me-4 ps-0'>
                                <form className='position-relative ' action="">
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
                            <button className='basket-btn btn btn-danger btn-outline-danger mb-lg-2 mb-md-0 text-white  w-50'>Sepete Ekle</button>
                        </div>
                                    </div>
                                    <div className="add-basket mt-5">
                                        <TopFooterData />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <ProductInfoModal type={type} />
            <StoreModal />
            <StoreStockModal />
        </div >
    )
}

export default DetailProductTop