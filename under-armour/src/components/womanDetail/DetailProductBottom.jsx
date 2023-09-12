import React from 'react'
 const together=[
    {
        id: 1,
        imgUrl: "img/womanDetail-img/together-img1.jpg",
        title: "Kadın UA HOVR™ Mega 3 Clone Koşu Ayakkabısı",
        price: "3.990,00 TL",
       
    },
    {
        id: 2,
        imgUrl: "img/womanDetail-img/together-img2.jpg",
        title: "Kadın UA HOVR™ Phantom 3 Koşu Ayakkabısı",
        price:"3.990,00 TL",
       
    },
    {
        id: 3,
        imgUrl: "img/womanDetail-img/together-img3.jpg",
        title: "Kadın UA HOVR™ Turbulence Koşu Ayakkabısı",
        price:"2.990,00 TL",
       
    },
    {
        id: 4,
        imgUrl: "img/womanDetail-img/together-img4.jpg",
        title: "Kadın UA HOVR™ Infinite 4 Koşu Ayakkabısı",
        price:"3.480,00 TL",
        
    },
    {
        id: 5,
        imgUrl: "img/womanDetail-img/together-img5.jpg",
        title: "Kadın UA Surge 3 Koşu Ayakkabısı",
        price:"1.720,00 TL",
       
    },
    {
        id: 6,
        imgUrl: "img/womanDetail-img/together-img6.jpg",
        title: "Kadın UA Charged Aurora 2 Antrenman Ayakkabısı",
        price:"1.790,00 TL",
       
    },
    {
        id: 7,
        imgUrl: "img/womanDetail-img/together-img7.jpg",
        title: "Kadın UA W Charged Breeze 2",
        price:"2.290,00 TL",
       
    },
    {
        id: 8,
        imgUrl: "img/womanDetail-img/together-img8.jpg",
        title: "Kadın UA W HOVR Infinite 5 Koşu Ayakkabısı",
        price:"3.480,00 TL",
       
    },
 ]


function DetailProductBottom() {
    return (
        <div className='container-fluid'>
            <div className="products-bottom">
                <div className="row mb-2">
                    <h3>BİRLİKTE SATIN ALINAN ÜRÜNLER </h3>
                </div>
                <div className="row row-cols-lg-4 row-cols-2">
                    {
                        together?.map(items=>{
                            return(
                                <div key={items.id} className="card-item">
                                <div className='y'>
                                <div className="img-bx">
                                    <img src={items.imgUrl} alt="" />
                                    <div className='.product-img-text'>Görüntüle</div>
                                    </div>
                                </div>
                                <div className="card-body ps-1 pe-2 pt-2">
                                <h6 className="card-subtitle">{items.title}</h6>
                                <div>
                                    <ul className="price-div d-flex">
                                        <li className="price-item  fw-bold">{items.price}</li>
                                    </ul>
                                </div>
                            </div>
        
                            </div>
                            )
                           
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default DetailProductBottom