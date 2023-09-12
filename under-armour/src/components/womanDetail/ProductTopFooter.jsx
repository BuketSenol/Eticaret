
import React, { useState } from 'react'



function ProductTopFooter({ProductDna,ProductSpecs}) {

    const [productFooter,setProductFooter]=useState(ProductDna)
    const [actFooterBtn,setActFooterBtn]=useState("DNA")
    
    console.log(productFooter);

  return (
    <div>
        <div className="footer-button mb-2">
            <button className={`btn-info me-2 ${actFooterBtn==="DNA" ? "bottom-color":""}`} onClick={()=>{
                setProductFooter(ProductDna)
                setActFooterBtn("DNA")
                }}>DNA</button>
                <span>|</span>
            <button className={`btn-info ms-2 ${actFooterBtn==="specs" ? "bottom-color":""}`} onClick={()=>{
                setProductFooter(ProductSpecs)
                setActFooterBtn("specs")
                }}>SPECS</button>
        </div>
        <div className="footer-info">
           {
            productFooter?.map(items=>{
                return(
                    <ul key={items.id} style={{listStyle:`${items.ul}`, paddingLeft:`${items.pad}`}}>
                        {
                            items?.list.map(listItem=>{
                                return(
                                    <li>{listItem.li}</li>

                                )
                            })
                        }
                    </ul>
                )
               
            })
           }

        </div>

    </div>
  )
}

export default ProductTopFooter