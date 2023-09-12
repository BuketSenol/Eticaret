import React from 'react'
import Footer from './Footer'

const footer_data = [
    {
        id: 1,
        mainTitle: "İletişim",
        
        subTitle: [
            {
                
                icon: "img/footer-img/telephone.svg",
                title: "iletişim desteği",
                link: "444 02 00 Pazartesi - Pazar 09:00 - 18:00", 
            },
            {
              
            icon: "img/footer-img/mail.svg",
             title: "e-posta", 
             link: "bilgi@underarmour.com"
             }
        ]
    },
    {
        id: 2,
        mainTitle: "Müşteri Hizmetleri",
        type:"display-img",
        subTitle: [
            { link: "sipariş Sorgulama" },
            { link: "Bize Ulaşın" },
            { link: "Teslimat Bilgileri" },
            { link: "İşlem Rehberi" },
            { link: "İade ve Değişimler" },
            { link: "Sıkça Sorulan Sorular" },
            { link: "Beden Rehberi" },
            { link: "Site Haritası" },
            { link: "Mağazalar" }
        ]
    },
    {
        id: 3,
        mainTitle: "Hakkımızda",
        type:"display-img",
        subTitle: [
            { link: "Ticari Bilgiler" },
            { link: "Hükümler ve Koşullar" },
            { link: "Gizlilik Politikası" },
            { link: "Çerez Politikası" },
            { link: "Kariyer" },
            { link: "ETBİS" }
        ]
    },
    {
        id: 4,
        mainTitle: "UA Sosyal Medya",
        type:"display-img",
        subTitle: [
            { icon: "img/footer-img/instagram.svg", link: "Instagram" },
            { icon: "img/footer-img/facebook.svg", link: "Facebook" },
            { icon: "img/footer-img/twitter.svg", link: "Twitter" },
            { icon: "img/footer-img/youtube.svg", link: "Youtube" },

        ]
    },



]



function FooterData() {
    return (
        <div>
            <Footer footerLink={footer_data} />
        </div>
    )
}

export default FooterData