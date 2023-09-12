import React from 'react'
import NavTop from './NavTop'
import NavMiddle from './NavMiddle'
import NavBottom from './NavBottom'

function Header() {

  return (
    <div className="header"  >
      <div className="sticky">
        <NavTop />
        <NavMiddle/>
        <NavBottom/>
        </div>
    </div>
  )
}

export default Header