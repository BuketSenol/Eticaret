
import React from 'react'

const imgs = [
    { id: 0, src: "img/womanDetail-img/detail-img2.jpg" }, { id: 1, src: "img/womanDetail-img/detail-img3.jpg" }, { id: 2, src: "img/womanDetail-img/detail-img4.jpg" }, { id: 3, src: "img/womanDetail-img/detail-img5.jpg" }, { id: 4, src: "img/womanDetail-img/detail-img6.jpg" },

]

function DetailProductMiddle() {
    return (
        <div>
            <div className="container-fluid">
                <div className="imgs-cont">
                    <div className="row">
                        {
                            imgs?.map(items => {
                                return (
                                    <div key={items.id} className={items.id === 4 ? "col-6 g-3 m-auto mt-3" : "col-6 g-3 "}>
                                        <div className="img-col">
                                            <img src={items.src} alt="" />
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProductMiddle