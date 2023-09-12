import React, { useState } from 'react'

const tabContent = {
  "new-product": [
    {

      category: "ERKEK",
      linkTitle: [
        { title: " Kısa Kollu ve Kolsuzlar", linkurl: "https:" },
        { title: "Kısa Kollular", linkurl: "https:" },
        { title: "Uzun Kollular", linkurl: "https:" },
        { title: "Kapüşonlu Üst ve Sweatshirt'ler", linkurl: "https:" },
        { title: "Mont ve Yelekler", linkurl: "https:" },
        { title: "Tayt ve Şortlar", linkurl: "https:" },
        { title: "Eşortman Altı ve Pantalonlar", linkurl: "https:" },
        { title: "İç Çamaşırları", linkurl: "https:" },
        { title: "Ayakkabı ve Terlikler", linkurl: "https:" },
        { title: "Aksesuarlar", linkurl: "https:" },
      ],
    },
    {
      category: "KADIN",
      linkTitle: [
        { title: " Kısa Kollu ve Kolsuzlar", linkurl: "https:" },
        { title: "Kısa Kollular", linkurl: "https:" },
        { title: "Uzun Kollular", linkurl: "https:" },
        { title: "Kapüşonlu Üst ve Sweatshirt'ler", linkurl: "https:" },
        { title: "Mont ve Yelekler", linkurl: "https:" },
        { title: "Tayt ve Şortlar", linkurl: "https:" },
        { title: "Eşortman Altı ve Pantalonlar", linkurl: "https:" },
        { title: "İç Çamaşırları", linkurl: "https:" },
        { title: "Ayakkabı ve Terlikler", linkurl: "https:" },
        { title: "Aksesuarlar", linkurl: "https:" },
      ],
    },
    {
      category: "ÇOCUK",
      linkTitle: [
        { title: " Kısa Kollu ve Kolsuzlar", linkurl: "https:" },
        { title: "Kısa Kollular", linkurl: "https:" },
        { title: "Uzun Kollular", linkurl: "https:" },
        { title: "Kapüşonlu Üst ve Sweatshirt'ler", linkurl: "https:" },
        { title: "Mont ve Yelekler", linkurl: "https:" },
        { title: "Tayt ve Şortlar", linkurl: "https:" },
        { title: "Eşortman Altı ve Pantalonlar", linkurl: "https:" },
        { title: "İç Çamaşırları", linkurl: "https:" },
        { title: "Ayakkabı ve Terlikler", linkurl: "https:" },
        { title: "Aksesuarlar", linkurl: "https:" },
      ],
    }
  ],

  "man": [
    {

      category: "ÜST GİYİM",
      linkTitle: [
        { title: " Kısa Kollu ve Kolsuzlar", linkurl: "https:" },
        { title: "Kısa Kollular", linkurl: "https:" },
        { title: "Uzun Kollular", linkurl: "https:" },
        { title: "Kapüşonlu Üst ve Sweatshirt'ler", linkurl: "https:" },
        { title: "Mont ve Yelekler", linkurl: "https:" },
        { title: "Polo Tişörtler", linkurl: "https:" },

      ],
    },
    {
      category: "ALT GİTİM",
      linkTitle: [
        { title: "Tayt ", linkurl: "https:" },
        { title: "Şortlar", linkurl: "https:" },
        { title: "Eşortman Altı ve Pantalonlar", linkurl: "https:" },
        { title: "İç Çamaşırları", linkurl: "https:" },

      ],
    },
    {
      category: "AYAKKABI",
      linkTitle: [
        { title: "Antrenman", linkurl: "https:" },
        { title: "Koşu", linkurl: "https:" },
        { title: "Basketbol", linkurl: "https:" },
        { title: "Outdoor", linkurl: "https:" },
        { title: "Golf", linkurl: "https:" },
        { title: "Terlik", linkurl: "https:" },

      ],
    },
    {
      category: "AKSESUAR",
      linkTitle: [
        { title: " Çantalar", linkurl: "https:" },
        { title: "Şapka ve Bereler", linkurl: "https:" },
        { title: "Eldivenler", linkurl: "https:" },
        { title: "Çoraplar", linkurl: "https:" },
        { title: "Kemerler", linkurl: "https:" },
        { title: "Ekipmanlar", linkurl: "https:" },
        { title: "Su Şişeleri", linkurl: "https:" },
        { title: "Güneş Gözlükleri", linkurl: "https:" },

      ],
    },
    {
      category: "SPOR",
      linkTitle: [
        { title: " Antrenman", linkurl: "https:" },
        { title: "Koşu", linkurl: "https:" },
        { title: "Basketbol", linkurl: "https:" },
        { title: "Golfr", linkurl: "https:" },
        { title: "Futbol", linkurl: "https:" },

      ],
    },
    {
      category: "KOLEKSİYON",
      linkTitle: [
        { title: "Project Rock", linkurl: "https:" },
        { title: "Stephen Curry", linkurl: "https:" },
        { title: "UA HOVR", linkurl: "https:" },
        { title: "UA Rush", linkurl: "https:" },
        { title: "UA Iso-chill", linkurl: "https:" },

      ],
    }
  ],

  "woman": [
    {

      category: "ÜST GİYİM",
      linkTitle: [
        { title: " Spor Sütyenleri", linkurl: "https:" },
        { title: "Kolsuz ve Atletler", linkurl: "https:" },
        { title: "Kısa Kollular", linkurl: "https:" },
        { title: "Uzun Kollular", linkurl: "https:" },
        { title: "Kapüşonlu Üst ve Sweatshirt'ler", linkurl: "https:" },
        { title: "Mont ve Yelekler", linkurl: "https:" },

      ],
    },
    {
      category: "ALT GİTİM",
      linkTitle: [

        { title: "Tayt ", linkurl: "https:" },
        { title: "Şortlar", linkurl: "https:" },
        { title: "Eşortman Altı ve Pantalonlar", linkurl: "https:" },
        { title: "İç Çamaşırları", linkurl: "https:" },

      ],
    },
    {
      category: "AYAKKABI",
      linkTitle: [
        { title: "Antrenman", linkurl: "https:" },
        { title: "Koşu", linkurl: "https:" },
        { title: "Terlik", linkurl: "https:" },

      ],
    },
    {
      category: "AKSESUAR",
      linkTitle: [
        { title: " Çantalar", linkurl: "https:" },
        { title: "Şapka ve Bereler", linkurl: "https:" },
        { title: "Eldivenler", linkurl: "https:" },
        { title: "Çoraplar", linkurl: "https:" },
        { title: "Ekipmanlar", linkurl: "https:" },
        { title: "Su Şişeleri", linkurl: "https:" },
        { title: "Güneş Gözlükleri", linkurl: "https:" },

      ],
    },
    {
      category: "SPOR",
      linkTitle: [
        { title: " Antrenman", linkurl: "https:" },
        { title: "Koşu", linkurl: "https:" },

      ],
    },
    {
      category: "KOLEKSİYON",
      linkTitle: [
        { title: "Project Rock", linkurl: "https:" },
        { title: "UA HOVR", linkurl: "https:" },
        { title: "UA Rush", linkurl: "https:" },
        { title: "UA Iso-chill", linkurl: "https:" },

      ],
    }
  ],
  "kids": [
    {

      category: "ÜST GİYİM",
      linkTitle: [
        { title: "Kolsuz ve Atletler", linkurl: "https:" },
        { title: "Kısa Kollular", linkurl: "https:" },
        { title: "Uzun Kollular", linkurl: "https:" },
        { title: "Kapüşonlu Üst ve Sweatshirt'ler", linkurl: "https:" },
        { title: "Mont ve Yelekler", linkurl: "https:" },
        { title: "Spor Sütyenleri", linkurl: "https:" },

      ],
    },
    {
      category: "ALT GİTİM",
      linkTitle: [

        { title: "Tayt ", linkurl: "https:" },
        { title: "Şortlar", linkurl: "https:" },
        { title: "Eşortman Altı ve Pantalonlar", linkurl: "https:" }

      ],
    },
    {
      category: "AYAKKABI",
      linkTitle: [
        { title: "Antrenman", linkurl: "https:" },
        { title: "Koşu", linkurl: "https:" },
        { title: "Basketbol", linkurl: "https:" },
        { title: "Terlik", linkurl: "https:" },

      ],
    },
    {
      category: "AKSESUAR",
      linkTitle: [
        { title: " Çantalar", linkurl: "https:" },
        { title: "Şapka ve Bereler", linkurl: "https:" },
        { title: "Eldivenler", linkurl: "https:" },
        { title: "Çoraplar", linkurl: "https:" },
        { title: "Su Şişeleri", linkurl: "https:" }
      ],
    },
    {
      category: "KOLEKSİYON",
      linkTitle: [
        { title: "Project Rock", linkurl: "https:" },
        { title: "Stephen Curry", linkurl: "https:" },
        { title: "UA HOVR", linkurl: "https:" },
        { title: "UA Rush", linkurl: "https:" },
        { title: "UA Iso-chill", linkurl: "https:" },

      ],
    },
    
  ],
  "shoe": [
    {

      category: "ERKEK AYAKKABILARI",
      linkTitle: [
        { title: " Antrenman", linkurl: "https:" },
        { title: "Koşu", linkurl: "https:" },
        { title: "Basketbol", linkurl: "https:" },
        { title: "Outdoor", linkurl: "https:" },
        { title: "Günlük", linkurl: "https:" },
        { title: "Golf", linkurl: "https:" },
        { title: "Terlik", linkurl: "https:" },
        { title: "Futbol", linkurl: "https:" },

      ],
    },
    {
      category: "KADIN AYAKKABILARI",
      linkTitle: [
        { title: " Antrenman", linkurl: "https:" },
        { title: "Koşu", linkurl: "https:" },
        { title: "Günlük", linkurl: "https:" },
        { title: "Terlik", linkurl: "https:" },
      ],
    },
    {
      category: "ÇOCUK AYAKKABILARI",
      linkTitle: [
        { title: "Antrenman", linkurl: "https:" },
        { title: "Koşu", linkurl: "https:" },
        { title: "Basketbol", linkurl: "https:" },
        { title: "Golf", linkurl: "https:" },
        { title: "Terlik", linkurl: "https:" },

      ],
    },
    {
      category: "KOLEKSİYON",
      linkTitle: [
        { title: "UA HOVR", linkurl: "https:" },
        { title: "Project Rock", linkurl: "https:" },
        { title: "Stephen Curry", linkurl: "https:" },
      ],
    }
  ],
  "outlet": [
    {
      category: "ERKEK",
      linkTitle: [
        { title: " Üst Giyim", linkurl: "https:" },
        { title: "Alt Giyim", linkurl: "https:" },
        { title: "Ayakkabı ve Terlikler", linkurl: "https:" },
        { title: "Aksesuarlar", linkurl: "https:" },
      ],
    },
    {
      category: "KADIN",
      linkTitle: [
        { title: " Antrenman", linkurl: "https:" },
        { title: "Koşu", linkurl: "https:" },
        { title: "Günlük", linkurl: "https:" },
        { title: "Terlik", linkurl: "https:" },

      ],
    },
    {
      category: "ERKEK ÇOCUK",
      linkTitle: [
        { title: " Üst Giyim", linkurl: "https:" },
        { title: "Alt Giyim", linkurl: "https:" },
        { title: "Ayakkabı ve Terlikler", linkurl: "https:" },
        { title: "Aksesuarlar", linkurl: "https:" },
      ],
    },
    { 
      category: "KIZ ÇOCUK",
      linkTitle: [
        { title: " Üst Giyim", linkurl: "https:" },
        { title: "Alt Giyim", linkurl: "https:" },
        { title: "Ayakkabı ve Terlikler", linkurl: "https:" },
        { title: "Aksesuarlar", linkurl: "https:" },

      ],
    },

  ],

}

function NavOffcanvas() {
  const [index, setIndex] = useState(" ");
  const [altCategory, setAltCategory] = useState(null);

  

  return (
    <>
       {/* Ana kategoriler için butonlar */}
       <div className='offcanvas-nav w-100'>
        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
          {Object.keys(tabContent).map((tab, tabIndex) => (
            <li key={tabIndex} className="nav-item mb-4">
              <button onClick={() => setIndex(tab)} className={`nav-link font-1 me-5 text-dark position-relative w-100 justify-content-between align-items-center d-flex ${index === tab ? 'active' : ''}`} aria-current="page">
                {tab} <img className='me-3 arrow' src="img/womenPage-img/arrow.svg" alt="" />
              </button>
            </li>
          ))}
        </ul>
      </div>

       {/* Ana kategori altındaki başlıklar */}
       <div>
        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
          {tabContent[index]?.map((item, index) => (
            <li key={index} className="nav-item mb-4">
              <button onClick={() => setAltCategory(item.category)} className={`nav-link font-1 me-5 text-dark position-relative w-100 justify-content-between align-items-center d-flex ${altCategory === item.category ? 'active' : ''}`} aria-current="page">
                {item.category} <img className='me-3 arrow' src="img/womenPage-img/arrow.svg" alt="" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      

      {/* Seçilen başlığa tıklandığında linkleri göster */}
      {altCategory && (
        <div >
          <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
            {tabContent[index].find((veri) => veri.category === altCategory)?.linkTitle.map((linkItem, subIndex) => (
              <li key={subIndex} className='nav-item mb-4 slide-link'>
                <a href={linkItem.link} className="nav-link font-1 me-5 text-dark position-relative w-100 justify-content-between align-items-center d-flex" aria-current="page" target="_blank" rel="noopener noreferrer">
                  {linkItem.title}
                  <img className='me-3 arrow' src="img/womenPage-img/arrow.svg" alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

     

      <div className="row row-cols-12 mt-4">
         <button className='order border-0 w-25  py-2'><a className='text-decoration-none text-black font-75 ' href="">Sipariş Sorgulama</a> </button>
       </div>
       <div className="row row-cols-4 mt-2 pt-3 border-top">
         <div className='d-flex flex-column align-items-center justifty-content-end'>
           <i className="bi bi-person"></i>
           <button className='font-62 border-0 bg-transparent  '>Giriş Yap</button>
         </div>
         <div className='d-flex flex-column align-items-center justifty-content-end'>
           <i className="bi bi-envelope"></i>
           <button className='font-62 border-0 bg-transparent '>Kayıt Ol</button>
         </div>
         <div className='d-flex flex-column align-items-center justifty-content-end'>
           <i className="bi bi-heart d-block "></i>
           <button className='font-62 border-0 bg-transparent'>Favoriler</button>
         </div>
         <div className='d-flex flex-column align-items-center justifty-content-end'>
           <i className="bi bi-info-circle-fill"></i>
           <button className='font-62 border-0 bg-transparent '>Yardım</button>
         </div>
       </div>
    </>
  );
}

export default NavOffcanvas;
















