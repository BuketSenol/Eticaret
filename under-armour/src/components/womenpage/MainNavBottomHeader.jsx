import React from 'react'
import AccordionItem from './AccordionItem'


function MainNavBottomHeader() {
    return (
        <>
            <div className="container-fluid d-md-none">
                <div className="row row-cols-2">
                    <div className="sort-area ">
                        <div className='sort-div d-flex position-absolute'>
                        <img src="img/womenPage-img/sort-icon.svg" alt="" />
                        <label className='' htmlFor="sort-select">Sırala</label>
                        </div>
                        <div className='select-div w-100'>
                        <select name='sort-select' id='sort-select'>
                            <option value="">Önerilenler</option>
                            <option value="price">Artan</option>
                            <option value="-price">Azalan</option>
                            <option value="newcomers">Yeni Gelenler</option>
                        </select>
                        </div>
                    </div>
                    <div className="filters">
                        <button className=" btn-white btn-outline-white border-0 w-100 h-100" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                            <img src="img/womenPage-img/filter-icon.svg" alt="" /> Filtrele
                        </button>
                        <div className="offcanvas filter-offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                            <div className="offcanvas-header">
                                <h6 className="offcanvas-title" id="staticBackdropLabel">Filtreler</h6>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body filter-offcanvas-body ">
                                    <AccordionItem /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainNavBottomHeader