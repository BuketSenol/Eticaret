import React from 'react'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu'
import NavOffcanvas from './NavOffcanvas'

function NavMiddle(props) {
  const [index, setIndex] = React.useState()


  return (
    <div onMouseLeave={() => setIndex("")}>

      <nav className="navbar navbar-expand-lg bg-dark navbar-middle">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/"><img src="/img/headerimg/logo-white.svg" alt="" /></Link>
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header ">
              <button className='bg-transparent border-0'><img className='arrow' src="img/womenPage-img/arrow.svg" alt=""/></button>
             <img className='m-auto' src="img/headerimg/logo-black.svg" id='offcanvasNavbarLabel' alt="" />
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-none">
              <NavOffcanvas/>
            </div>
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 first-nav">
              <li className="nav-item">
                <Link className="nav-link font-1 fw-bold me-4 position-relative" aria-current="page" to="" onMouseOver={() => setIndex('new-product')}>Yeni Gelenler <img className='flame' src="img/headerimg/flame.png" alt="" /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-1 fw-bold me-2" to="" onMouseOver={() => setIndex('man')}>Erkek</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-1 fw-bold me-2 " to="/Women" onMouseOver={() => setIndex('woman')}>Kadın</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-1 fw-bold me-2" onMouseOver={() => setIndex('child')}>Çocuk</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-1 fw-bold me-2" onMouseOver={() => setIndex('shoe')}>Ayakkabı</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-1 fw-bold ms-3 position-relative link-lightning" onMouseOver={() => setIndex('outlet')}>  <img className='lightning' src="img/headerimg/lightning.png" alt="" /> Outlet</Link>
              </li>
            </ul>
          </div>
          <div className='icons d-flex'>
            <div className="position-relative" >
              <input className="search me-2" placeholder="Search" aria-label="Search" />
              <i className="bi bi-search text-white" />
            </div>
            <i className="bi bi-heart text-white ms-2 me-3"></i>
            <i className="bi bi-bag text-white position-relative">
              <span className='badge-quantity text-white'>0</span></i>
          </div>
        </div>
      </nav>
      {index && <NavMenu index={index} />}
    </div>
  )
}

export default NavMiddle