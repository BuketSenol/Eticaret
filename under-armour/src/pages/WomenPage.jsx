import React from 'react'
import WomanPage from '../components/womenpage/WomanPage'
import AccordionItem from '../components/womenpage/AccordionItem'
import ProductItemData from '../components/womenpage/ProductItemData'
import MainNavHeader from '../components/womenpage/MainNavHeader'
import MainNavBottomHeader from '../components/womenpage/MainNavBottomHeader'



function WomenPage() {
  return (
    <>
    <div>
      <MainNavHeader/>
      <MainNavBottomHeader/>
    </div>
    <div className='position'>
      <WomanPage />
      <div className="row gx-0 pe-lg-5  women-product-cont">
        <div className="col-4 ps-4 pe-3">
          <AccordionItem />
        </div>
        <div className="col-lg-8 col-md-12 ">
          <ProductItemData />
        </div>
      </div>
    </div>
    </>
  )
}

export default WomenPage