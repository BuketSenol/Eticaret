import React from 'react'

function Accordion({ accordion }) {


    return (
                <div className=' container-fluid ps-lg-5 ' >
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        {
                            accordion?.map((accordionItem, accordionIndex) => {
                                return (
                                    <div key={accordionIndex} className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={"#panelsStayOpen-collapse" + accordionItem.collapse}
                                                aria-expanded="true"
                                                aria-controls={"panelsStayOpen-collapse" + accordionItem.collapse}
                                            >
                                                {accordionItem.title}
                                            </button>
                                        </h2>
                                        <div
                                            id={"panelsStayOpen-collapse" + accordionItem.collapse}
                                            className="accordion-collapse collapse"
                                        >
                                            <div className="accordion-body">
                                                {
                                                    accordionItem?.content?.map((contentItem, contentIndex) => {
                                                        return (
                                                            <div key={contentIndex}>
                                                                {accordionItem?.type === "display" ? <p> {contentItem.text}</p> : <input type="checkbox" />}
                                                                <span>{contentItem.input}</span> <span>{contentItem.custom}</span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <div className="color-palette row row-cols-5 gx-0">
                                                    {
                                                        accordionItem?.content?.map((clr,clrIndex) => {
                                                            return (

                                                                <>
                                                                    {clr?.type === "button" &&
                                                                        <div key={clrIndex}  className="color-item col me-2 ">
                                                                            <button className={"color-hex " + clr?.color}></button>
                                                                        </div>
                                                                    }

                                                                </>

                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <button className='click-btn mt-3 d-none'>Uygula</button>
                    </div>
            </div>
    )
}

export default Accordion