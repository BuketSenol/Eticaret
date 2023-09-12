import React from 'react'
import Accordion from './Accordion'


const accordion_data = [
    {
        id: 1,
        title: "Kategoriler",
        collapse: "one",
        type: "display",
        content: [

            {
                text: "Kadın"
            },
            {
                text: "Ayakkabı"
            }
        ]
    },
    {
        id: 2,
        title: "Renk",
        type: "display",
        collapse:"two",
        content: [
            { color: "bg10" ,type:"button"},
            { color: "bg14",type:"button" },{ color: "bg25"  ,type:"button"},{ color: "bg26"  ,type:"button"},{ color: "bg27"  ,type:"button"},{ color: "bg28"  ,type:"button"},{ color: "bg29"  ,type:"button"},{ color: "bg30"  ,type:"button"},{ color: "bg31"  ,type:"button"},
        ]
    },
    {
        id: 3,
        title: "Ürün Grubu",
        collapse: "three",
        content: [
            {
                input: " Koşu Ayakkabısı",
                custom: "(88)"
            },
            {
                input: " T-Shirt",
                custom: "(113)"
            },
            {
                input: " Tayt",
                custom: "(103)"
            },
            {
                input: " Bra",
                custom: "(83)"
            },
            {
                input: " Sweatshirt",
                custom: "(84)"
            },
            {
                input: " Şort",
                custom: "(75)"
            },
            {
                input: " Atlet",
                custom: "(49)"
            },
            {
                input: " Sweatpant",
                custom: "(44)"
            },
            {
                input: " Antrenman Ayakkabısı",
                custom: "(17)"
            },
            {
                input: " Uzun Kollu T-Shirt",
                custom: "(17)"
            },
            {
                input: " Rüzgarlık",
                custom: "(13)"
            },
            {
                input: " Lifestyle Ayakkabı",
                custom: "(4)"
            },
            {
                input: " Terlik",
                custom: "(5)"
            },
            {
                input: " İç Giyim",
                custom: "(6)"
            },
            {
                input: " Şapka",
                custom: "(17)"
            },
            {
                input: " Mont",
                custom: "(6)"
            },
            {
                input: " Spor Çanta",
                custom: "(10)"
            },
            {
                input: " Saç Bandı",
                custom: "(9)"
            },
            {
                input: " Çorap",
                custom: "(6)"
            },
            {
                input: " Eşofman Takımı",
                custom: "(2)"
            },
            {
                input: " Yağmurluk",
                custom: "(1)"
            },
            {
                input: " BodySuit",
                custom: "(1)"
            },
            {
                input: " Pantalon",
                custom: "(2)"
            },
            {
                input: " Eldiven",
                custom: "(2)"
            },
            {
                input: " Sırt Çantası",
                custom: "(4)"
            },
            {
                input: " Yelek",
                custom: "(1)"
            },
            {
                input: " Bere",
                custom: "(1)"
            },
            {
                input: " Hijab",
                custom: "(1)"
            },
        ]
    },
    {
        id: 1,
        title: "Cinsiyet",
        collapse: "four",
        content: [
            { input: " Kadın", custom: ("765") },
        ]
    },
    {
        id: 5,
        title: "Beden",
        collapse: "five",
        content: [
            { input: " XS", custom: ("532") },
            { input: " L", custom: ("520") },
            { input: " M", custom: ("520") },
            { input: " XL", custom: ("517") },
            { input: " S", custom: ("516") },
            { input: " 40.5", custom: ("106") },
            { input: " 42", custom: ("105") },
            { input: " 41", custom: ("100") },
            { input: " 36.5", custom: ("99") },
            { input: " 38.5", custom: ("98") },
            { input: " 39", custom: ("96") },
            { input: " 40", custom: ("95") },
            { input: " 38", custom: ("94") },
            { input: " 37.5", custom: ("92") },
            { input: " 36", custom: ("13") },
            { input: " XXL", custom: ("9") },
            { input: " 35.5", custom: ("6") },
            { input: " 14", custom: ("5") },
            { input: " 34A", custom: ("5") },
            { input: " 34B", custom: ("5") },
            { input: " 12", custom: ("4") },
            { input: " 32B", custom: ("4") },
            { input: " 34C", custom: ("4") },
            { input: " 36C", custom: ("4") },
            { input: " 36D", custom: ("4") },
            { input: " 16", custom: ("3") },
            { input: " 2", custom: ("3") },
            { input: " 8", custom: ("3") },
            { input: " 6", custom: ("2") },
            { input: " XXS", custom: ("2") },
            { input: " 38C", custom: ("1") },
            { input: " 38D", custom: ("1") },
            { input: " 4", custom: ("1") },
            { input: " 44.5", custom: ("1") },
            { input: " M/L", custom: ("1") },
            { input: " GRL", custom: ("1") },
            { input: " GSM", custom: ("1") },
        ]
    },
    {
        id: 6,
        title: "Kalıp",
        collapse: "six",
        content: [
            { input: " Bol Kalıp", custom: ("268") },
            { input: " Dar Kalıp", custom: ("218") },
            { input: " ULtra Dar Kalıp", custom: ("111") },
            { input: " Standart Kalıp", custom: ("54") },
            { input: " Ayarlanabilir Kalıp", custom: ("1") },
        ]
    },
    {
        id: 7,
        title: "Spor",
        collapse: "seven",
        content: [
            { input: " Antrenman", custom: ("532") },
            { input: " Koşu", custom: ("212") },
            { input: " Günlük", custom: ("10") },
            { input: " Golf", custom: ("7") },
            { input: " Terlik & Sandelet", custom: ("6") },
        ]
    },
    {
        id: 8,
        title: "Fiyat",
        collapse: "eight",
        content: [
            { input: " 100 TL - 150 TL", custom: ("2") },
            { input: " 200 TL - 500 TL", custom: ("93") },
            { input: " 500 TL - 1000 TL", custom: ("274") },
            { input: " 1000 TL ÜZERİ üRÜNLER", custom: ("396") },
        ]
    },
]

function AccordionItem() {
    return (
        <div className='sticky-cont'>
            <Accordion accordion={accordion_data} />
        </div>
    )
}

export default AccordionItem