import React from 'react'
import DetailProductCarousel from './DetailProductCarousel'

const like = [
    {
        id: 1,
        imgUrl: "img/womanDetail-img/like-img1.jpg",
        title: "Kadın UA Serin Tutan 200 Laser Atlet",
        price1:"889,00 TL",
        price2: "444,00 TL",
        price3: "%50 İndirim",
    },
    {
        id: 2,
        imgUrl: "img/womanDetail-img/like-img2.jpg",
        title: "Kadın UA Koşu Anywhere Crop Atlet",
        price1: "539,00 TL",
        price2: "334,00 TL",
        price3: "%38 İndirim",
    },
    {
        id: 3,
        imgUrl: "img/womanDetail-img/like-img3.jpg",
        title: "Kadın Armour Atlet",
        price1: "",
        price2: "690,00 TL",
        price3: "",
    },
    {
        id: 4,
        imgUrl: "img/womanDetail-img/like-img4.jpg",
        title: "Kadın UA Fly-By Atlet",
        price1: "489,00 TL",
        price2: "244,00 TL",
        price3: "%50 İndirim",
    },
    {
        id: 5,
        imgUrl: "img/womanDetail-img/like-img5.jpg",
        title: "Kadın UA Fly-By Atlet",
        price1: "489,00 TL",
        price2: "244,00 TL",
        price3: "%50 İndirim",
    },
    {
        id: 6,
        imgUrl: "img/womanDetail-img/like-img6.jpg",
        title: "Kadın UA Meridian Fitted Atlet",
        price1: "",
        price2: "1.090,00 TL",
        price3: "",
    },
    {
        id: 7,
        imgUrl: "img/womanDetail-img/like-img7.jpg",
        title: "Kadın UA Meridian Fitted Atlet",
        price1: "",
        price2: "1.090,00 TL",
        price3: "",
    },
    {
        id: 8,
        imgUrl: "img/womanDetail-img/like-img8.jpg",
        title: "Kadın UA Streaker Wind Atlet",
        price1: "",
        price2: "790,00 TL",
        price3: "",
    },
   
]
const sale = [
    {
        id: 1,
        imgUrl: "img/womanDetail-img/bestSellers-img1.jpg",
        title: "Kadın UA Serin Tutan 200 Laser Atlet",
        price1:"889,00 TL",
        price2: "444,00 TL",
        price3: "%50 İndirim",
    },
    {
        id: 2,
        imgUrl: "img/womanDetail-img/bestSellers-img2.jpg",
        title: "Kadın UA Koşu Anywhere Crop Atlet",
        price1: "539,00 TL",
        price2: "334,00 TL",
        price3: "%38 İndirim",
    },
    {
        id: 3,
        imgUrl: "img/womanDetail-img/bestSellers-img3.jpg",
        title: "Kadın Armour Atlet",
        price1: "",
        price2: "690,00 TL",
        price3: "",
    },
    {
        id: 4,
        imgUrl: "img/womanDetail-img/bestSellers-img4.jpg",
        title: "Kadın UA Fly-By Atlet",
        price1: "489,00 TL",
        price2: "244,00 TL",
        price3: "%50 İndirim",
    },
    {
        id: 5,
        imgUrl: "img/womanDetail-img/bestSellers-img5.jpg",
        title: "Kadın UA Fly-By Atlet",
        price1: "489,00 TL",
        price2: "244,00 TL",
        price3: "%50 İndirim",
    },
    {
        id: 6,
        imgUrl: "img/womanDetail-img/libestSellerske-img6.jpg",
        title: "Kadın UA Meridian Fitted Atlet",
        price1: "",
        price2: "1.090,00 TL",
        price3: "",
    },
    {
        id: 7,
        imgUrl: "img/womanDetail-img/bestSellers-img7.jpg",
        title: "Kadın UA Meridian Fitted Atlet",
        price1: "",
        price2: "1.090,00 TL",
        price3: "",
    },
    {
        id: 8,
        imgUrl: "img/womanDetail-img/bestSellers-img8.jpg",
        title: "Kadın UA Streaker Wind Atlet",
        price1: "",
        price2: "790,00 TL",
        price3: "",
    },
    
]

const mostLook=[
    {
        id:1 ,
        imgUrl: "img/womanDetail-img/category-img1.jpg",
        title: "Erkek UA HOVR™ Infinite 4 Koşu Ayakkabısı",
        price1: "3.480,00 TL",
        price2: "2.440,00 TL",
        price3: "%30 İndirim",
    },
    {
        id:2 ,
        imgUrl: "img/womanDetail-img/category-img2.jpg",
        title: "Erkek Çocuk UA Assert 10 Koşu Ayakkabısı",
        price1: "1.680,00 TL",
        price2: "1.180,00 TL",
        price3: "%30 İndirim",
    },
    {
        id:3 ,
        imgUrl: "img/womanDetail-img/category-img3.jpg",
        title: "Unisex UA HOVR™ Dark Sky Trail Koşu Ayakkabısı",
        price1: "3.990,00 TL",
        price2: "2.790,00 TL",
        price3: "%30 İndirim",
    },
    {
        id:4 ,
        imgUrl: "img/womanDetail-img/category-img4.jpg",
        title: "Erkek Çocuk UA Assert 10 Koşu Ayakkabısı",
        price1: "1.680,00 TL",
        price2: "1.180,00 TL",
        price3: "%30 İndirim",
    },
    {
        id:5 ,
        imgUrl: "img/womanDetail-img/category-img5.jpg",
        title: "Unisex Project Rock 3 Terlik",
        price1: "1.890,00 TL",
        price2: "1.320,00 TL",
        price3: "%30 İndirim",
    },
    {
        id:6 ,
        imgUrl: "img/womanDetail-img/category-img6.jpg",
        title: "Erkek UA Drive Pantolon",
        price1: "1.689,00 TL",
        price2: "849,00 TL",
        price3: "%50 İndirim",
    },
    {
        id:7 ,
        imgUrl: "img/womanDetail-img/category-img7.jpg",
        title: "Erkek UA Ottoman Fleece  Eşofman Altı",
        price1: "1.519,00 TL",
        price2: "949,00 TL",
        price3: "%38 İndirim",
    },
    {
        id:8 ,
        imgUrl: "img/womanDetail-img/category-img8.jpg",
        title: "Erkek Project Rock Unstoppable Eşofman Altı",
        price1: "2.279,00 TL",
        price2: "1.139,00 TL",
        price3: "%50 İndirim",
    },
    {
        id:9 ,
        imgUrl: "img/womanDetail-img/category-img9.jpg",
        title: "Erkek UA HOVR™ Sonic 5 Storm Koşu Ayakkabısı",
        price1: "3.800,00 TL",
        price2: "2.660,00 TL",
        price3: "%30 İndirim",
    },
    {
        id:10 ,
        imgUrl: "img/womanDetail-img/category-img10.jpg",
        title: "Erkek UA Brawler Eşofman Altı",
        price1: "1.050,00 TL",
        price2: "740,00 TL",
        price3: "%30 İndirim",
    },
    {
        id:11 ,
        imgUrl: "img/womanDetail-img/category-img11.jpg",
        title: "Erkek UA Clone Magnetico Pro 2.0 FG Krampon",
        price1: "5.990,00 TL",
        price2: "4.190,00 TL",
        price3: "%30 İndirim",
    },
    {
        id:12 ,
        imgUrl: "img/womanDetail-img/category-img12.jpg",
        title: "Unisex UA HOVR™ Dark Sky Trail Koşu Ayakkabısı",
        price1: "3.990,00 TL",
        price2: "2.790,00 TL",
        price3: "%30 İndirim",
    },
]

function DetailProductCarouselData() {
  return (
    <div>
        <DetailProductCarousel likeProducts={like} bestSellers={sale} mostLookProducts={mostLook}/>
    </div>
  )
}

export default DetailProductCarouselData