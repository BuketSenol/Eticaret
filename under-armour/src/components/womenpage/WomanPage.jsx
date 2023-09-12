import React from 'react'

function WomanPage() {
    
    const short="15 Ürün Listeleniyor"
    return (
        <div>
            <div className="container-fluid women-cont">
                <div className="woman-page">
                    <div className="row align-items-baseline">
                        <div className="col-lg-4 col-sm-8 col-12">
                            <div className="woman-brand">
                            <p className='mb-0'>Anasayfa/ Kadın Spor Ürünleri</p>
                            <h2 >Kadın Spor Ürünleri</h2>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className='top-container-right'>
                                <p className='me-5 font-87'> {short}</p>
                                <form className='position-relative ' action="">
                                    <label className='sort' htmlFor="">Sırala</label>
                                    <select className="form-select form-select mb-3 form-control" aria-label=".form-select example">
                                        <option>Önerilenler</option>
                                        <option value="1">Artan Fiyat</option>
                                        <option value="2">Azalan Fiyat</option>
                                        <option value="3">Yeni Gelenler</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WomanPage