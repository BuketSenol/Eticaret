import React from 'react'
import Img from './Img'

const img_data=  {   
        id: 1,
        imgUrl:"img/cont3-img/athlete.jpg",
        title: "VÜCUDUNUZLA SENKRONİZE OLUN",
        subtitle: "UA Infinity High Spor Sütyeni!",
        text: "Sonsuz şeklindeki yapı, göğsünüzün doğal şeklini alarak,konfordan ödün vermeden sağlıklı hareket etmenizi sağlar."
    }

function ImgData() {
  return (
    <div>
        <Img imgCont={img_data}/>
    </div>
  )
}

export default ImgData