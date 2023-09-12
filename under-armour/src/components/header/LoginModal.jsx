import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function LoginModal(props) {
    const [pageStatus, setPageStatus] = useState('');

    
    React.useEffect(() => {
        setPageStatus(props.type)
    }, [props.type])


    return (
        <div>  
            <div className="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel1" aria-hidden="true">
                <div className="modal-dialog login-modal modal-dialog-scrollable">
                    <div className="modal-content py-2 px-4">
                        <div className="modal-header border-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body-top '>
                            <div className='d-flex justify-content-center'>
                                <h3 className='font-87 me-5'><img className='me-2' src="img/headerimg/black-checkout.svg" alt="" />Daha Hızlı Ödeme.</h3>
                                <h3 className='font-87'><img className='me-2' src="img/headerimg/black-shipping.svg" alt="" />Hızlı sipariş takibi.</h3>
                            </div>
                            <div className='mt-4 text-center'>
                                <h3 className='font-87'><img className='me-2' src="img/headerimg/exchange.svg" alt="" />Kolay iade ve değişim.</h3>
                            </div>
                        </div>

                        <div className="modal-body login-modal-body">

                            <div className="modal-body-bottom">
                                <div className='register'>
                                    <ul className='register-tab'>
                                        <li className='register-item ' onClick={
                                            () => setPageStatus('SIGN_IN')
                                        }>Giriş Yap</li>
                                        <li className='register-item active' onClick={
                                            () => setPageStatus('SIGN_UP')
                                        }>Kayıt Ol</li>
                                    </ul>
                                </div>
                                {pageStatus === 'SIGN_IN' && <form className='log-sign-form' action="">
                                    <label className='font-62 fw-bold' htmlFor="">E-posta Adresi</label>
                                    <input className='form-control form-bg mb-3' type="text" />
                                    <label className='font-62 fw-bold' htmlFor="">Şifre</label>
                                    <input className='form-control form-bg password' type="password" />
                                    <button className='show-btn'>göster</button>
                                    <div className='check-form mt-3'>
                                        <input className='check' type="checkbox" id='check' />
                                        <label className='font-62 ms-2' htmlFor="check">Beni Hatırla</label>
                                        <Link className='font-75 password-reset' to="#">Şifremi Unuttum</Link>
                                    </div>
                                    <div className="modal-footer border-0 pb-4 ">
                                        <button type="button" className="click-btn">Sorgula</button>
                                    </div>
                                </form>}

                                {pageStatus === 'SIGN_UP' && <form className='log-sign-form' action="">
                                    <div className="row">
                                        <div className='col-6'>
                                            <label className='font-62 fw-bold' htmlFor="">Ad*</label>
                                            <input className='form-control form-bg mb-3' required type="text" />
                                        </div>
                                        <div className='col-6'>
                                            <label className='font-62 fw-bold' htmlFor="">Soyad*</label>
                                            <input className='form-control form-bg mb-3' required type="text" />
                                        </div>
                                    </div>
                                    <label className='font-62 fw-bold' htmlFor=""  >Telefon Numarası*</label>
                                    <input className='form-control form-bg mb-3' placeholder='0 (5__)__ __ __' required type="text" />
                                    <label className='font-62 fw-bold' htmlFor="" >E-posta Adresi</label>
                                    <input className='form-control form-bg mb-3' required type="text" />
                                    <label className='font-62 fw-bold' htmlFor="">Şifre</label>
                                    <input className='form-control form-bg' type="show ===true ? 'text' : 'password'" pattern='[a-z0-9*-+?/A-Z]+' minLength={8} required />
                                    <button className='show-btn sign-show' >göster</button>
                                    <div className='validations font-87'>
                                        <ul className='allCheck'>
                                            <li>En az 8 karakter</li>
                                            <li>Bir küçük harf karakter</li>
                                            <li>Bir rakam</li>
                                            <li>Bir büyük harf</li>
                                            <li>En az bir özel karakter</li>
                                        </ul>
                                    </div>
                                    <div className='contract '>
                                        <p>Aşağıdakileri okudum ve kabul ediyorum:</p>
                                        <p> <Link className='contract-text' to="">Aydınlatma Metni </Link> kapsamında kimlik ve iletişim verilerinizin DOĞUŞ PERAKENDE SATIŞ GİYİM VE AKSESUAR TİC A.Ş. tarafından, bize sağladığınız iletişim bilgilerinize reklam, promosyon vb. ticari elektronik ileti gönderilmesi ve aranma amaçlarıyla işlenmesini ve bununla sınırlı olarak hizmet alınan üçüncü taraflar ile paylaşılmasını kabul ediyorum.</p>
                                        <input className='me-2' type="radio" id='sms' />
                                        <label className='font-75' htmlFor="sms">Sms</label><br />
                                        <input className='me-2' type="radio" id='E-mail' />
                                        <label className='font-75' htmlFor="E-mail">E-mail</label><br />
                                        <input className='me-2' type="radio" id='call' />
                                        <label className='font-75' htmlFor="call">Çağrı merkezi / Arama</label><br />
                                        <input className='me-2' type="radio" id='contract' />
                                        <label className='contract font-75' htmlFor="">Üyelik sözleşmesini okudum, kabul ediyorum. <Link className='contract-text me-1' to="">Görüntüle *</Link>.<Link className='contract-text ms-1' to="">Aydınlatma Metni </Link> kapsamında kimlik ve iletişim verilerinizin DOĞUŞ PERAKENDE SATIŞ GİYİM VE AKSESUAR TİC A.Ş. tarafından tarafınızla iletişime geçilerek ürün ve hizmetlerinin pazarlama süreçlerinin gerçekleştirilmesi, profilleme ve analiz faaliyetleri dahil olmak üzere sunulan ürün ve hizmetlerin beğeni, kullanım alışkanlıkları ve ihtiyaçlarınıza göre özelleştirilerek önerilmesi ve tanıtılması amacıyla işlenmesini ve bununla sınırlı olarak hizmet alınan üçüncü taraflar ile paylaşılmasını kabul ediyorum. </label>
                                    </div>
                                    <div>
                                        <button type='button' className="click-btn font-75 btn-blue"><Link className='text-white text-decoration-none' to="">Facebook ile Giriş Yap </Link> </button>
                                        <button type="submit" className="click-btn font-75">Üye Ol</button>

                                    </div>
                                </form>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal