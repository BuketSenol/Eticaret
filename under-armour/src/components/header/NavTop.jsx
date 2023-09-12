import React from 'react'
import { Link } from 'react-router-dom'
import QuestioningModal from './QuestioningModal'
import LoginModal from './LoginModal'


function NavTop(props) {
    
    const [type, setType] = React.useState('SIGN_IN')    
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-dark bg-body-dark py-1 ">
                <div className="container nav-top">
                    <span className="navbar-text  ">
                        <img className='me-2' src="https://ff1097.cdn.akinoncloud.com/cms/2022/11/28/9512b499-d2e3-4e1d-8f2f-158c1186d95a.png" alt="" /> <a className='cargo-text' href="">Tüm Ürünlerde Ücretsiz Kargo</a>
                    </span>
                    <div className="collapse navbar-collapse ">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-top">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">YARDIM</Link>
                            </li>
                            <div className="dropdown">
                                <button className="btn btn-dark dropdown-toggle language" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className='TR-flag' src="img/headerimg/turkey.svg" alt="" />TR
                                </button>
                                <ul className="dropdown-menu language-menu">
                                    <li className="dropdown-item fw-medium mb-2">Diğer Ülkeler</li>
                                    <li><Link className="dropdown-item lang-item" to="/"><img className='me-2' src="img/headerimg/united-states.svg" alt="" /> US</Link></li>
                                    <li><Link className="dropdown-item lang-item" to="/"><img className='me-2' src="img/headerimg/united-kingdom.svg" alt="" /> UK</Link></li>
                                    <li><hr className="dropdown-divider  m-auto mt-2" /></li>
                                    <li><Link className="dropdown-item text-center" to="#">Tümünü Gör</Link></li>
                                </ul>
                            </div>
                            <li className="nav-item">
                                <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#guestioningModal">SİPARİŞ SORGULAMA</Link>
                            </li>
                            <li className="nav-item" onClick={()=> setType('SIGN_UP')}>
                                <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#loginModal" >KAYIT OL</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">|</Link>
                            </li>
                            <li className="nav-item" onClick={()=> setType('SIGN_IN')}>
                                <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#loginModal"  >GİRİŞ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <QuestioningModal/>
            <LoginModal type={type}/>
           

        </div>
    )
}

export default NavTop