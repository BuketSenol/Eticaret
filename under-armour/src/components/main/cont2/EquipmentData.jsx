import React from 'react'
import Equipment from './Equipment'

const equipment_data=[
    {
        id:1,
        subtitle:"Yeni Erkek Koleksiyonu",
        imgUrl:"img/cont2-img/collectionmen.jpg",
        button:"Keşfet"
    },
    {
        id:2,
        subtitle:"Yeni Erkek Koleksiyonu",
        imgUrl:"img/cont2-img/collectionwomen.jpg",
        button:"Keşfet"
    },
    {
        id:3,
        subtitle:"Yeni Erkek Koleksiyonu",
        imgUrl:"img/cont2-img/collectionchild.jpg",
        button:"Keşfet"
    },
    {
        id:4,
        subtitle:"Yeni Erkek Koleksiyonu",
        imgUrl:"img/headerimg/newseason.jpg",
        button:"Keşfet"
    }
    
]

const equipment_title=[{
    title:"En Yeni Ekipmanlar"
}
]


function EquipmentData() {
  return (
    <div>
        <Equipment equipment={equipment_data}  title={equipment_title}/>
    </div>
  )
}

export default EquipmentData