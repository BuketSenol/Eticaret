import React, { useEffect, useState } from 'react'
const instalment = [
    {
        id: 0,
        bank: "Akbank",
        card: "Axess",
        taksit: "2-3"
    },
    {
        id: 1,
        bank: "Garanti Bankası",
        card: "Bonus",
        taksit: "2-3"
    },
    {
        id: 2,
        bank: "İş Bankası",
        card: "Maksimum",
        taksit: "2-3"
    },
    {
        id: 3,
        bank: "Yapı Kredi Bankası",
        card: "World",
        taksit: "2-3"
    },
    {
        id: 4,
        bank: "Ziraat Bankası",
        card: "Ziraat Bankası",
        taksit: "2-3"
    },
    {
        id: 5,
        bank: "Albaraka Türk",
        card: "World",
        taksit: "2-3"
    },
    {
        id: 6,
        bank: "Anadolubank",
        card: "World",
        taksit: "2-3"
    },
    {
        id: 7,
        bank: "Vakıfbank",
        card: "World",
        taksit: "2-3"
    },
    {
        id: 8,
        bank: "TEB",
        card: "Bonus",
        taksit: "2-3"
    },
    {
        id: 9,
        bank: "Denizbank",
        card: "Bonus",
        taksit: "2-3"
    },
    {
        id: 10,
        bank: "Şekerbank",
        card: "Bonus",
        taksit: "2-3"
    },

]

const sizes = [
    {
        id:0,
        size:"XS",
        chest:"78.7 - 83.8",
        waist:"58.4 - 63.5",
        body:"0 - 2"
    },
    {
        id:1,
        size:"S",
        chest:"85.1 - 90.2",
        waist:"64.8 - 69.9",
        body:"4 - 6"
    },
    {
        id:2,
        size:"M",
        chest:"91.4 - 96.5",
        waist:"71.1 - 76.2",
        body:"8 - 10"
    },
    {
        id: 3,
        size:"L",
        chest:"97.8 - 102.9",
        waist:"77.5 - 82.6",
        body:"12 - 14"
    },
    {
        id:4,
        size:"XL",
        chest:"104.1 - 109.2",
        waist:"83.8 - 88.9",
        body:"16"
    },
    {
        id:5,
        size:"XXL",
        chest:"111.8 - 116.8",
        waist:"91.4 - 96.5",
        body:"18"
    },
    {
        id:6,
        size:"1X",
        chest:"112 - 119.5",
        waist:"99 - 109",
        body:"16W - 18W"
    },
    {
        id:7,
        size:"2X",
        chest:"122 - 129.5",
        waist:"112 - 122",
        body:"20W - 22W"
    },
    {
        id:8,
        size:"3X",
        chest:"132 - 140",
        waist:"124.5 - 135",
        body:"24W - 26W"
    }
]


function ProductInfoModal(props) {

    const [modal, setModal] = useState("")
    console.log("moad", modal);

    useEffect(() => {
        setModal(props.type)
    }, [props.type])


    return (
        <div>
            <div className="modal" id="productInfoModal" tabIndex="-1" aria-labelledby="productInfoModalLbel1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered  modal-dialog-scrollable ">
                    {
                        modal === "instalment" && <div className="modal-content py-2 px-4 ">
                            <div className="modal-header border-0  ">
                                <h3 className='m-auto instalment-title' id="productInfoModalLabel1">TAKSİT SEÇENEKLERİ</h3>
                            </div>

                            <div className="modal-body instalment-content ps-4">
                                <table>
                                    <tr>
                                        <th>Banka</th>
                                        <th>Kart</th>
                                        <th>Taksit</th>
                                    </tr>
                                    {
                                        instalment?.map(items => {
                                            return (
                                                <tr key={items.id} className='border-top'>
                                                    <td >{items.bank}</td>
                                                    <td>{items.card}</td>
                                                    <td>{items.taksit}</td>

                                                </tr>
                                            )
                                        })
                                    }
                                </table>
                            </div>
                            <div className="modal-footer instalment-footer border-0 py-5  ">
                                <button type="button" className="close-btn" data-bs-dismiss="modal">Kapat</button>
                            </div>
                        </div>
                    }
                    {
                        modal === "sizes" && <div className="modal-content py-2 px-4">
                            <div className="modal-header border-0  ">
                                <h3 className='m-auto instalment-title' id="productInfoModalLabel1">BEDEN TABLOSU</h3>
                            </div>
                            <div className="modal-body sizes-content ps-4">
                                    <caption >BEDEN TABLOSU</caption>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th></th>
                                            <th scope='col'>Göğüs {"(in)"}</th>
                                            <th scope='col'>Bel {"(in)"}</th>
                                            <th scope='col'>US beden</th>
                                        </tr>
                                        {
                                            sizes?.map(sizesItems => {
                                                return (
                                                    <tr key={sizesItems.id} className='border-top'>
                                                        <th className='row-th' scope='row'>{sizesItems.size}</th>
                                                        <td >{sizesItems.chest}</td>
                                                        <td>{sizesItems.waist}</td>
                                                        <td>{sizesItems.body}</td>

                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer instalment-footer border-0 py-5  ">
                                <button type="button" className="close-btn" data-bs-dismiss="modal">Kapat</button>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default ProductInfoModal