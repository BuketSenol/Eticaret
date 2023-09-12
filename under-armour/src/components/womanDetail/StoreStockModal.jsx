import React from 'react'
import { useState } from 'react'
const store = [
    { id: 0, city: "Şehir Seçin", value: 1 }, { id: 1, city: "ANKARA", value: 2 }, { id: 2, city: "ANTALYA", value: 3 }, { id: 3, city: "BURSA", value: 4 }, { id: 4, city: "GAZİANTEP", value: 5 }, { id: 5, city: "İSTANBUL", value: 6 }, { id: 6, city: "iZMİR", value: 7 }, { id: 7, city: "KOCAELİ", value: 8 }, { id: 8, city: "MUĞLA", value: 9 },
]
const material = [
    { id: 0, code:"1378404-001/Siyah", value: 1 },{ id: 1, code:"1378404-369/Yeşil", value: 2 } 
]
const sizes=[
    { id: 0, size: "XS", value: 1 },{ id: 0, size: "S", value: 1 },{ id: 0, size: "M", value: 1 },{ id: 0, size: "L", value: 1 },{ id: 0, size: "XL", value: 1 },

]



function StoreStockModal() {
    const [city, setCity] = useState("Şehir seçiniz")
    const changeCity = (event) => {
        setCity(event.target.value)
    }

    const [code,setCode]=useState("Materyal/Renk Kodu")
    const changeCode=(event)=>{
        setCode(event.target.value)
    }
    const [body,setBody]=useState("Beden Seçiniz")
    const changeBody=(event)=>{
        setCode(event.target.value)
    }

    return (
        <div>
            <div className="modal fade" id="storeStockModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-cityledby="storeStockModalcity" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg ">
                    <div className="modal-content pe-5 ps-5">
                        <div className="modal-header border-0">
                            <h1 className="modal-title fs-4" id="storeStockModalcity">Mağazada Bul</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-city="Close"></button>
                        </div>
                        <div className="modal-body px-3">
                            <div className="stock-form ">
                            <form className='position-relative store-form'  id="stock-form">
                                    <img className='location' src="img/womanDetail-img/location.png" width={15} alt="" />
                                    <select className='select-btn' value={city} onChange={changeCity} required >
                                        {
                                            store?.map((item,storeIndex)=>{
                                                return(
                                                    <option  key={storeIndex} value={item.value}>{item.city}</option>
                                                    
                                                )
                                            })
                                        }
                                    </select>
                            
                                    <img className='color-slct' src="img/womanDetail-img/color-slct.png" alt="" />
                                    <select className='select-btn' value={code} onChange={changeCode} required>
                                        {
                                            material?.map((item,materialIndex)=>{
                                                return(
                                                    <option key={materialIndex} value={item.value}>{item.code}</option>
                                                    )
                                                })
                                            }
                                    </select>
                                    <img className='size-slct' src="img/womanDetail-img/sizes.png" width={15} alt="" />
                                    <select className='select-btn' value={body} onChange={changeBody} required>
                                        {
                                            sizes?.map((item,sizesIndex)=>{
                                                return(
                                                    <option key={sizesIndex} value={item.value}>{item.size}</option>
                                                    )
                                                })
                                            }
                                    </select>
                            </form>    
                            <button className="stock-btn" type='submit' form="stock-form"> <i className="bi bi-search text-white stock-search"></i> Arama Motoru</button>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreStockModal