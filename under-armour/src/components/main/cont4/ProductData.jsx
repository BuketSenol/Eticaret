
import React, { useState } from 'react'
import ProductSlider from './ProductSlider'

const inspected_data =[
    {
        id:1,
        imgUrl:"img/product-img/product1.jpg",
        title:"Erkek UA Meridian Tapered Eşofman Altı",
        price1:"1.349.00 TL",
        btn:"none"
    },
    {
        id:2,
        imgUrl:"img/product-img/product2.jpg",
        title:"Erkek Project Rock BSR 3 Antrenman Ayakkabısı",
        price1:"3,150,00 TL",
        btn:"none"
    },
    {
        id:3,
        imgUrl:"img/product-img/product3.jpg",
        title:"Kadın Project Rock 5 Antrenman Ayakkabısı",
        price1:"4,890,00 TL",
        btn:"none",
    },
    {
        id:4,
        imgUrl:"img/product-img/product4.jpg",
        title:"UA CITY TEE ISTANBUL",
        price1:"550,00 TL",
        btn:"none",
    },
    {
        id:5,
        imgUrl:"img/product-img/product5.jpg",
        title:"Kadın Project Rock Meridian Şort",
        price1:"1.470.00 TL",
        btn:"none"
    },
    {
        id:6,
        imgUrl:"img/product-img/product6.jpg",
        title:"Kadın UA Koşu Anywhere Şort",
        price1:"1.390.00 TL",
        btn:"none"
    },
    {
        id:7,
        imgUrl:"img/product-img/product7.jpg",
        title:"Erkek UA Dokuma Perforated Windbreaker Mont",
        price1:"1.349.00 TL",
        price2:"849,00 TL",
        price3:"%37 indirim",
        btn:"none"
    },
    {
        id:8,
        imgUrl:"img/product-img/product8.jpg",
        title:"Erkek UA Unstoppable Dar Paça Eşortman Altı",
        price1:"1,609,00 TL",
        price2:"849,00 TL",
        price3:"%50 indirim",
        btn:"none"
    }
]
const popular_data =[
    {
        id:1,
        imgUrl:"img/cont4-img/populerProduct1.jpg",
        title:"Erkek UA Dokuma Perforated Windbreaker Mont",
        price1:"1.349,00 TL",
        price2:"849,00 TL",
        price3:"%37 İndirim",
    },
    {
        id:2,
        imgUrl:"img/cont4-img/populerProduct2.jpg",
        title:"Erkek UA Armour Baskılı Dokuma Şort",
        price1:"909,00 TL",
        price2:"569,00 TL",
        price3:"%37 İndirim",
    },
    {
        id:3,
        imgUrl:"img/cont4-img/populerProduct3.jpg",
        title:"UA Unstoppable Brushed Eşofman Altı",
        price1:"1,590,00 TL",
        price2:"999,00 TL",
        price3:"%37 İndirim",
    },
    {
        id:4,
        imgUrl:"img/cont4-img/populerProduct4.jpg",
        title:"Erkek UA Summit Örgü Tam Boy Fermuarlı",
        price1:"1.979,00 TL",
        price2:"849,00 TL",
        price3:"%37 İndirim",
    },
    {
        id:5,
        imgUrl:"img/cont4-img/populerProduct5.jpg",
        title:"Erkek Armour Fleece® Storm Eşofman Altı",
        price1:"1.349,00 TL",
        price2:"1,239,00 TL",
        price3:"%37 İndirim",
    },
    {
        id:6,
        imgUrl:"img/cont4-img/populerProduct6.jpg",
        title:"Erkek Ua Terrain Kısa Kollu",
        price1:"609,00 TL",
        price2:"429,00 TL",
        price3:"%37 İndirim",
    },
    {
        id:7,
        imgUrl:"img/cont4-img/populerProduct7.jpg",
        title:"Erkek Project Rock Terry Kısa Kollu Kapüşonlu Üst",
        price1:"1.380,00 TL",
       
    },
    {
        id:8,
        imgUrl:"img/cont4-img/populerProduct8.jpg",
        title:"Erkek UA Unstoppable Dar Paça Eşortman Altı",
        price1:"1,609,00 TL",
        price2:"849,00 TL",
        price3:"%50 indirim",
    },
    {
        id:9,
        imgUrl:"img/cont4-img/populerProduct9.jpg",
        title:"Erkek UA Rival Fleece Wordmark Colorblock Kapüşonlu Üst",
        price1:"909,00 TL",
        price2:"569,00 TL",
        price3:"%37 indirim",
    },
    {
        id:10,
        imgUrl:"img/cont4-img/populerProduct10.jpg",
        title:"Erkek UA Team Chino Ayarlanabilir Şapka",
        price1:"440,00 TL",
        
    },
]

function ProductData() {
    
    return (
    <div>
        <ProductSlider inspectedProducts={inspected_data} popularProducts={popular_data} />
    </div>
  )
}

export default ProductData

