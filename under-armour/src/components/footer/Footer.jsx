import React, { useState } from 'react'

function Footer({ footerLink }) {

    console.log(footerLink);
    console.log('footerLink: ', footerLink);
    console.log(footerLink.subtitle);
    return (
        <footer className='footer'>
            <div className="container-fluid ">
                <div className="footer-container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <hr style={{ width: "5px" }} />
                            <h5 className='fw-medium mb-4'>E-Bültene Kayıt Ol</h5>
                            <form className='position-relative form-input' action="">
                                <label className='mail-title ' htmlFor="">E-posta Adresi*</label>
                                <input className='form-control mb-4 bg-transparent' required type="text" />
                                <button className='sign-up submit'>Kayıt Ol</button>
                            </form>
                            <p className='privacy font-62 mt-0'>Kayıt olarak, <span>Gizlilik Politikası</span> ile <span>Hükümler ve Koşullar</span>'ı kabul etmiş sayılırsınız.</p>
                            <div>
                                <img className='me-3' src="img/footer-img/logo-black.png" width={35} alt="" />
                                <img src="img/footer-img/logo-blue.png" width={35} alt="" />
                            </div>
                            <div>
                                <p className='font-87 mt-3 mb-0'>Ödeme Yöntemleri</p>
                                <img className='me-2' src="img/footer-img/card1.png" width={47} alt="" />
                                <img className='me-2' src="img/footer-img/card2.png" width={47} alt="" />
                                <img className='me-2' src="img/footer-img/card3.png" width={47} alt="" />
                                <img className='me-2' src="img/footer-img/card4.png" width={47} alt="" />
                                <img className='me-2' src="img/footer-img/card5.png" width={47} alt="" />
                            </div>
                            <p className='copyright'>©2021 Under Armour, Inc. <span className='text-decoration-underline '>Gizlilik Politikası</span> / <span className='text-decoration-underline'>Çerez Politikası </span> / <span className='text-decoration-underline'>Hüküm ve Koşullar</span>  </p>
                            <hr className='d-lg-none d-md-block' />
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 ps-lg-5  ">
                            <div className="row mt-2 footer-link">
                                {
                                    footerLink?.map((item, id) => (
                                        <div key={id} className="col-lg-3 col-md-12 p-0">
                                            <h6>{item.mainTitle}</h6>
                                            {
                                                item?.subTitle?.map((subItem, subIndex) => {
                                                    return (
                                                        <div key={subIndex}>
                                                            {
                                                                item?.type=="display-img"? 
                                                            <ul className='p-0 mb-0 d-flex'>
                                                            
                                                                <img className='me-1'  src={subItem?.icon} alt="" />
                                                                
                                                                {subItem.title}
                                                                
                                                            <li className='list-unstyled'>
                                                                <a className="footer-link " href="">
                                                                
                                                                    {subItem.link}
                                                                </a>

                                                            </li>
                                                            </ul>
                                                            :
                                                            <ul className='p-0 mb-0'>
                                                            
                                                            <img className='me-1'  src={subItem?.icon} alt="" />
                                                            
                                                            {subItem.title}
                                                            
                                                        <li className='list-unstyled'>
                                                            <a className="footer-link " href="">
                                                            
                                                                {subItem.link}
                                                            </a>
                                                        </li>
                                                        </ul>

                                                            }

                                                        </div>
                                                    )
                                                }

                                                )
                                            }

                                            <div></div>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-12 ps-0 text-md-center text-center">
                            <img className='mt-5 etbis' src="img/footer-img/kod.jpg"  alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer