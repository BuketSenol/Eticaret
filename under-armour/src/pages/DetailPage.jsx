import React from 'react'
import DetailProductTop from '../components/womanDetail/DetailProductTop'
import DetailProductMiddle from '../components/womanDetail/DetailProductMiddle'
import DetailProductCarouselData from '../components/womanDetail/DetailProductCarouselData'
import DetailProductBottom from '../components/womanDetail/DetailProductBottom'
import Basket from '../components/womanDetail/Basket'

function DetailPage() {
  return (
    <div>
      <DetailProductTop />
      <DetailProductMiddle />
      <DetailProductCarouselData />
      <DetailProductBottom />
      <Basket />
    </div>
  )
}

export default DetailPage