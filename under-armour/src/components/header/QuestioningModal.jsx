import React from 'react'


function QuestioningModal() {
  return (
    <div>
        <div className="modal fade" id="guestioningModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered questioning-modal ">
                    <div className="modal-content py-2 px-4">
                        <div className="modal-header border-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className='text-center mb-5'>Siparişinizin durumu hakkında bilgi alabilmek için aşağıdaki bilgileri giriniz.</p>
                            <form action="">
                                <label className='mail-name fw-medium' htmlFor="">E-posta Adresi*</label>
                                <input className='form-control mb-4' type="text" />
                                <label className='order-no fw-medium' htmlFor="">Sipariş Sorgula*</label>
                                <input className='form-control' type="text" />
                            </form>
                        </div>
                        <div className="modal-footer border-0 pb-5 ">
                            <button type="button" className="click-btn">Sorgula</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default QuestioningModal