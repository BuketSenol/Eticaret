import React from 'react'
import ProductTopFooter from './ProductTopFooter'
const dna=[
{
  ul:"disc",
  pad:"",
  list:[
    {id:1,li:"UA RUSH™ kızılötesi teknolojisi, vücudunuzun enerjisini yansıtarak daha çok çalışıp daha hızlı güç toplamanıza yardımcı olur"},
    { id:2,li:"İnanılmaz hafif kumaşı, üst düzey nefes alabilirlik ve konfor sunar"},
    {id:3,li:"4 yöne esneyen yapı her açıdan mükemmel hareket kabiliyeti sunar"},
    {id:4,li:"Klasik yarışçı sırtı yapı, eksiksiz hareket kabiliyeti sunar"},
    {id:5,li:"Stil No: 1378404"},
    {id:6,li:"Celliant’tan güç alır"},
    {id:7,li:"%100 Polyester"},
    {id:8,li:"İthal edilmiştir"},
    {id:9,li:"Çamaşır makinesinde, benzer renklilerle birlikte soğuk suda yıkayın"},
    {id:10,li:"Gerektiğinde yalnızca klorsuz ağartıcı kullanın"},
    {id:11,li:"Ütülemeyin"},
    {id:12,li:"Yumuşatıcı kullanmayın"},
    {id:13,li:"Kuru temizlemeye vermeyin"},
    
  ]
}
]
 
   

const specs=[
  {
    ul:"none",
    pad:"0",
    list:[
        {id:1,li:"Stil: 1378404",list_style_none:"none"},
        {id:2,li:"Stil: 1378404",list_style_none:"none"},
        {id:3,li:"Stil: 1378404",list_style_none:"none"},
        {id:4,li:"Stil: 1378404",list_style_none:"none"},
    ]
  } 
]


function TopFooterData() {
  return (
    <div>
        <ProductTopFooter ProductDna={dna} ProductSpecs={specs}/>
    </div>
  )
}

export default TopFooterData