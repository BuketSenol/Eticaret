import React from 'react'

function NavBottom() {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".nav-bottom").style.display="none"
       
      } else {
        document.querySelector(".nav-bottom").style.display="block"
      }
    }
    
  return (
         <div className='nav-bottom' >
            <nav className="navbar navbar-expand-lg bg-dark bg-body-dark py-1 ">
                <div className="container ">
                    <span className="navbar-text  text-white">
                        Mobil Uygulamamızı Keşfet <a className='detail' href="">Detayları Gör</a>
                    </span> 
                </div>
            </nav>
    </div>
  )
}

export default NavBottom