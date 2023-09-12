import React from 'react'

import ProductData from '../components/main/cont4/ProductData'
import HeroItems from '../components/main/cont1/HeroItems'
import EquipmentData from '../components/main/cont2/EquipmentData'
import ImgData from '../components/main/cont3/ImgData'
import Application from '../components/main/cont5/Application'
import NewProductData from '../components/main/cont6/NewProductData'

function HomePage() {
  return (
    <>
    <HeroItems/>
    <EquipmentData/>
    <ImgData/>
    <ProductData/>
    <Application/>
    <NewProductData/>
    
    </>
  )
}

export default HomePage