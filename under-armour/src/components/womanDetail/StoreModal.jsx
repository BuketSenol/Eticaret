import React from 'react'

function StoreModal() {
    
    return (
        <div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labeledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content store-modal-content">
                        <div className="modal-header border-0 pb-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body store-modal-body">
                            <h5 className='mb-4'><strong>Mağazadan Teslimat Bilgilendirmesi</strong></h5>
                            <p>Siparişinizi teslim almak istediğiniz mağazamızı, siparişinizi verirken <strong>‘Teslimat Adresi’</strong>  bölümünden seçebilirsiniz. <br />Mağazadan teslimatı seçtiğiniz takdirde, ürününüz depomuzdan mağazaya gönderilecek ve hazır olduğunda tarafınıza bilgilendirme SMS’i gönderilecektir. <br />
                                <strong>*Sadece İstanbul’daki mağazalarda geçerlidir.</strong></p>
                        </div>
                    </div>
                    </div>  
            </div>
        </div>
    )
}

export default StoreModal