import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ProductItem({ womenData }) {
    const [items, setItems] = useState(womenData)

    const handleChange = (id, itemIndex) => {
        const response = items?.map((item, index) => {
            console.log(item?.change);
            if (item.id === id) {
                return {
                    ...item,
                    imgOuter: item?.change[itemIndex]?.img
                }
            }

            return {
                ...item,
            }
        })

        console.log(response);
        setItems(response)
        console.log([itemIndex]);
    }

    const handleMouseLeave = (id, index) => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    imgOuter: item?.change[0]?.img
                }
            }

            return {
                ...item,
            }
        });

        setItems(updatedItems);

    };

    return (
        <>
            <div className='container-fluid px-lg-5 '>

                <div className="row row-cols-lg-3 row-cols-2">
                    {
                        items?.map((womenItem, id) => {
                            return (
                                <div key={id} className="card-item position-relative">
                                    <Link to="/DetailProduct">
                                        <div className='card-img'>
                                            <div className="outer">
                                                <img className='one' src={womenItem?.imgOuter} alt="" />
                                                <div className="inner">
                                                    <img src={womenItem?.imgInner} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="badge-icon">
                                        <div className="icon-left">
                                            <img width={17} height={23} src="img/headerimg/flame.png" alt="" />
                                            <span className='new'>YENİ</span>
                                        </div>
                                        <div className="icon-right detail-icon2">
                                            <img src="img/womenPage-img/heart2.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="card-body pt-2">
                                        <div className="color-palette">
                                            {
                                                womenItem?.color?.map((colorItem, colorIndex) => {
                                                    return (
                                                        <div key={colorIndex} className="color-item ">
                                                            <button
                                                                onMouseLeave={() => {
                                                                    handleMouseLeave(womenItem?.id);
                                                                }}
                                                                onMouseOver={() => { handleChange(womenItem?.id, colorIndex) }}
                                                                className={`color-hex ${colorItem.color}`}></button>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                        <Link className='text-decoration-none' to="">
                                            <div className="p-title">{womenItem?.title}</div>

                                        </Link>
                                        <div className="p-price">{womenItem?.price}</div>
                                        <div className="campaign">{womenItem?.campaign}</div>
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
        </>
    )
}

export default ProductItem