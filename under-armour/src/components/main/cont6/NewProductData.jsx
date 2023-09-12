
import React from 'react'
import NewProduct from './NewProduct'

const newProduct_data=[
    {
        id:1,
        imgUrl:"img/cont6-img/newProduct-img1.jpg",
        title:"Kadın UA Meridian Zip Crop Spor Sütyeni",
        price:"1.390,00 TL",
    },
    {
        id:2,
        imgUrl:"img/cont6-img/newProduct-img2.jpg",
        title:"Kadın UA Koşu In Peace Şort",
        price:"950,00 TL",
    },
    {
        id:3,
        imgUrl:"img/cont6-img/newProduct-img3.jpg",
        title:"Kadın UA Uplift High Spor Sütyeni",
        price:"1.720,00 TL",
    },
    {
        id:4,
        imgUrl:"img/cont6-img/newProduct-img4.jpg",
        title:"Kadın UA Serin Tutan Laser Tişört",
        price:"1.350,00 TL",
    },
    {
        id:5,
        imgUrl:"img/cont6-img/newProduct-img5.jpg",
        title:"Kadın UA Meridian Zip Crop Spor Sütyeni",
        price:"1.390,00 TL",
    },
    {
        id:6,
        imgUrl:"img/cont6-img/newProduct-img6.jpg",
        title:"Kadın UA Meridian Zip Crop Spor Sütyeni",
        price:"1.390,00 TL",
    },
    {
        id:7,
        imgUrl:"img/cont6-img/newProduct-img7.jpg",
        title:"Kadın UA Meridian Zip Crop Spor Sütyeni",
        price:"1.390,00 TL",
    },
    {
        id:8,
        imgUrl:"img/cont6-img/newProduct-img8.jpg",
        title:"Kadın UA Meridian Zip Crop Spor Sütyeni",
        price:"1.390,00 TL",
    },
    {
        id:9,
        imgUrl:"img/cont6-img/newProduct-img9.jpg",
        title:"Kadın UA Meridian Zip Crop Spor Sütyeni",
        price:"1.390,00 TL",
    },
    {
        id:10,
        imgUrl:"img/cont6-img/newProduct-img10.jpg",
        title:"Kadın UA Meridian Zip Crop Spor Sütyeni",
        price:"1.390,00 TL",
    },
    {
        id:11,
        imgUrl:"img/cont6-img/newProduct-img11.jpg",
        title:"Kadın UA Meridian Zip Crop Spor Sütyeni",
        price:"1.390,00 TL",
    },
    {
        id:12,
        imgUrl:"img/cont6-img/newProduct-img12.jpg",
        title:"Kadın UA Meridian Zip Crop Spor Sütyeni",
        price:"1.390,00 TL",
    },
]
function NewProductData() {
  return (
    <div>
        <NewProduct newProduct={newProduct_data}/>
    </div>
  )
}

export default NewProductData