
import React from 'react'
import HeroSlider from './HeroSlider'

const hero_data = [
    {
        type: "left",
        id: 1,
        imgUrl:"img/heroslider1.jpg",
        title:"MAKSİMUM HIZDA ANTRENMAN",
        subtitle:"Hafif ve hızlı UA Flow Velociti Elite!",
        text: "Sharon Lokedi’nin 2022 NYC Maratonu’nu kazanmasına yardımcı olan ayakkabılar şimdi burada!",

    },
    {
        type: "right",
        id: 2,
        imgUrl: "img/heroslider2.jpg",
        title: "GELECEK ŞİMDİ BAŞLAR",
        subtitle: " ",
        text: "Peşinden koştuğunuz hayal ne olursa olsun, ne kadar uzun süredir onun peşinde olursanız olun veya ne kadar uzun sürerse sürsün sınavınız her zaman “bugün” olacaktır.",
        text1: "Seçiminizi yapın: ya “bir gün” ya da “bugün”. –Dwayne Johnson",
    },
]
//todo: sürekli render olmaması için function dışında tanımladım.
function HeroItems() {

    return (
        <div>
            <HeroSlider heros={hero_data} />
        </div>
    )
}

export default HeroItems