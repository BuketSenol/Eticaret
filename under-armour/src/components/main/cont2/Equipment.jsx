import React from 'react'
import { Link } from 'react-router-dom'

function Equipment({ equipment, title }) {
    return (
        <div>
            <div className="container-fluid equipment-cont ">
                <div className='x'>
                <div className="row">
                    {title?.map(item => {
                        return (
                            <div key={item.id} className="title-box">
                                <h5>{item?.title}</h5>
                            </div>
                        )

                    })
                    }
                    {equipment?.map(item => {
                        return (
                            <div key={item.id} className={item?.id===4? "col-lg-3 col-md-4 m-auto col-6":"col-lg-3 col-md-4 col-6"}>
                                <Link className='text-decoration-none' to="">
                                    <div className="card border-0">
                                        <div className="card-title sub-title">
                                            <h6 className=''>{item?.subtitle}</h6>
                                        </div>
                                        <div className="card-body">
                                            <img src={item?.imgUrl} alt="" />
                                        </div>
                                        <div className="card-footer text-center bg-transparent">
                                            <div className="btn btn-white equipment-btn">{item?.button}</div>
                                        </div>
                                    </div>
                                </Link>
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

export default Equipment