import React from 'react'
import ProductItem from './ProductItem'
const women_product_data=[
    {
        id:1,
        imgOuter:"img/womenPage-img/productItem1.jpg",
        imgInner:"img/womenPage-img/productItem1-1.jpg",
        change:[
            { img:"img/womenPage-img/productItem1.jpg"}
        ],
        color:[
            {color:"bg1"}
        ],
        title:"Kadın UA Koşu In Peace Atlet",
        price:"790,00 TL",
        campaign:"Tüm siparişlerde ücretsiz kargo"
    },
    {
        id:2,
        imgOuter:"img/womenPage-img/productItem2.jpg",
        imgInner:"img/womenPage-img/productItem2-1.jpg",
        change:[
            { img:"img/womenPage-img/productItem2.jpg"}, { img:"img/womenPage-img/productItem2-2.jpg"},
        ],
        color:[
            {color:"bg3"},{color:"bg2"}
        ],
        title:"Kadın UA RUSH™ Cicada Atlet",
        price:"1.190,00 TL",
        campaign:"Tüm siparişlerde ücretsiz kargo"
    },
    {
        id:3,
        imgOuter:"img/womenPage-img/productItem3.jpg",
        imgInner:"img/womenPage-img/productItem3-1.jpg",
        change:[
            { img:"img/womenPage-img/productItem3.jpg"}

        ],
        color:[
            {color:"bg3"}
        ],
        title:"Kadın UA Koşu In Peace Atlet",
        price:"790,00 TL",
        campaign:"Tüm siparişlerde ücretsiz kargo"
    },
    {
        id:4,
        imgOuter:"img/womenPage-img/productItem4.jpg",
        imgInner:"img/womenPage-img/productItem4-1.jpg",
        change:[
            { img:"img/womenPage-img/productItem4.jpg"}, { img:"img/womenPage-img/productItem4-3.jpg"}, {img:"img/womenPage-img/productItem4-5.jpg"}, {img:"img/womenPage-img/productItem4-4.jpg"} ,{img:"img/womenPage-img/productItem4-2.jpg"} 
        ],
        color:[
            {color:"bg7"},{color:"bg4"},{color:"bg5"},{color:"bg6"},{color:"bg1"}
        ],
        title:"Kadın UA Flow Velociti Wind 2 Koşu Ayakkabısı",
        price:"790,00 TL",
        campaign:"Tüm siparişlerde ücretsiz kargo"
    },
    {
        id:5,
        imgOuter:"img/womenPage-img/productItem5.jpg",
        imgInner:"img/womenPage-img/productItem5-1.jpg",
        change:[
            { img:"img/womenPage-img/productItem5.jpg"}, {img:"img/womenPage-img/productItem5-2.jpg"}, {img:"img/womenPage-img/productItem5-3.jpg"} ,{img:"img/womenPage-img/productItem5-4.jpg"}, 

        ],
        color:[
            {color:"bg8"},{color:"bg9"},{color:"bg10"},{color:"bg11"}
        ],
        title:"Kadın HeatGear® Armour Hi-Rise Bilekte Tayt",
        price:"950,00 TL",
        campaign:"Tüm siparişlerde ücretsiz kargo"
    },
    {
        id:6,
        imgOuter:"img/womenPage-img/productItem6.jpg",
        imgInner:"img/womenPage-img/productItem6-1.jpg",
        change:[
            { img:"img/womenPage-img/productItem6.jpg"}, {img:"img/womenPage-img/productItem6-2.jpg"}, 
        ],
        color:[
            {color:"bg14"},{color:"bg13"}
        ],
        title:"Kadın UA Ser1in Tutan Laser Tişört",
        price:"1.350,00 TL",
        campaign:"Tüm siparişlerde ücretsiz kargo"
    },
    {
        id:7,
        imgOuter:"img/womenPage-img/productItem7.jpg",
        imgInner:"img/womenPage-img/productItem7-1.jpg",
        change:[
            { img:"img/womenPage-img/productItem7.jpg"},

        ],
        color:[
            {color:"bg8"}
        ],
        title:"Kadın UA Uplift High Spor Sütyeni",
        price:"1.720,00 TL",
        campaign:"Tüm siparişlerde ücretsiz kargo"
    },
    {
        id:8,
        imgOuter:"img/womenPage-img/productItem8.jpg",
        imgInner:"img/womenPage-img/productItem8-1.jpg",
        change:[
            { img:"img/womenPage-img/productItem8.jpg"}, {img:"img/womenPage-img/productItem8-2.jpg"}, 

        ],
        color:[
            {color:"bg15"},{color:"bg10"}
        ],
        title:"Kadın UA Meridian Zip Crop Spor Sütyeni",
        price:"1.390,00 TL",
        campaign:"Tüm siparişlerde ücretsiz kargo"
    },
    {
        id:9,
        imgOuter:"img/womenPage-img/productItem8-2.jpg",
        imgInner:"img/womenPage-img/productItem9-1.jpg",
        change:[
            { img:"img/womenPage-img/productItem8-2.jpg"}, {img:"img/womenPage-img/productItem8.jpg"}, 

        ],
        color:[
            {color:"bg10"},{color:"bg15"}
        ],
        title:"Kadın UA Meridian Zip Crop Spor Sütyeni",
        price:"1.390,00 TL",
        campaign:"Tüm siparişlerde ücretsiz kargo"
    },
    {
        id:10,
        imgOuter:"img/womenPage-img/productItem10-1.jpg",
        imgInner:"img/womenPage-img/productItem10.jpg",
        change:[
            { img:"img/womenPage-img/productItem10-1.jpg"}, 

        ],
        color:[
            {color:"bg9"}
        ],
        title:"Kadın UA Koşu In Peace Şort",
        price:"950,00 TL",
        campaign:"Tüm siparişlerde ücretsiz kargo"
    },
    {
        id:11,
        imgOuter:"img/womenPage-img/productItem11.jpg",
        imgInner:"img/womenPage-img/productItem11-1.jpg",
        change:[
            { img:"img/womenPage-img/productItem11.jpg"}, {img:"img/womenPage-img/productItem11-2.jpg"}, {img:"img/womenPage-img/productItem11-3.jpg"} 

        ],
        color:[
            {color:"bg16"},{color:"bg17"},{color:"bg18"}
        ],
        title:"Kadın UA Fly-By 2.0 Şort",
        price:"640,00 TL",
        campaign:"Tüm siparişlerde ücretsiz kargo"
    },
    {
        id:12,
        imgOuter:"img/womenPage-img/productItem12.jpg",
        imgInner:"img/womenPage-img/productItem12-1.jpg",
        change:[
            { img:"img/womenPage-img/productItem12.jpg"}, {img:"img/womenPage-img/productItem12-2.jpg"}, {img:"img/womenPage-img/productItem12-3.jpg"} 
        ],
        color:[
            {color:"bg20"},{color:"bg10"},{color:"bg14"}
        ],
        title:"Kadın UA RUSH™ Dokuma Tam Boy Fermuarlı Montt",
        price:".980,00 TL",
        campaign:"Tüm siparişlerde ücretsiz kargo"
    },
    {
        id:13,
        imgOuter:"img/womenPage-img/productItem13.jpg",
        imgInner:"img/womenPage-img/productItem13-1.jpg",
        change:[
            { img:"img/womenPage-img/productItem13.jpg"}, {img:"img/womenPage-img/productItem13-2.jpg"},

        ],
        color:[
            {color:"bg21"},{color:"bg10"}
        ],
        title:"Kadın UA Breathe Lite Ultra 3’lü Paket Low Liner Çorap",
        price:"410,00 TL",
        campaign:"Tüm siparişlerde ücretsiz kargo"
    },
    {
        id:14,
        imgOuter:"img/womenPage-img/productItem14.jpg",
        imgInner:"img/womenPage-img/productItem14-1.jpg",
        change:[
            { img:"img/womenPage-img/productItem14.jpg"}, {img:"img/womenPage-img/productItem14-2.jpg"}, 

        ],
        color:[
            {color:"bg10"},{color:"bg22"}
        ],
        title:"Kadın UA RUSH™ Pencereli Crop Kısa Kollu",
        price:"1.070,00 TL",
        campaign:"Tüm siparişlerde ücretsiz kargo"
    },
    {
        id:15,
        imgOuter:"img/womenPage-img/productItem15.jpg",
        imgInner:"img/womenPage-img/productItem15-1.jpg",
        change:[
            { img:"img/womenPage-img/productItem15.jpg"}, {img:"img/womenPage-img/productItem15-3.jpg"}, {img:"img/womenPage-img/productItem15-2.jpg"} 

        ],
        color:[
            {id:1,color:"bg23"},{id:2,color:"bg24"},{id:3,color:"bg10"}
        ],
        title:"Kadın UA Favorite Sırt Çantası",
        price:"830,00 TL",
        campaign:"Tüm siparişlerde ücretsiz kargo"
    },
   
]


function ProductItemData() {
  return (
    <div>
        <ProductItem womenData={women_product_data}  />
        
    </div>
  )
}

export default ProductItemData