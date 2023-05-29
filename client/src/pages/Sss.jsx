import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
const dataCollection = [
  {
    question: 'Farklı filmlere tek seferde bilet alabilir miyim, yoksa her film için yeni bir işlem yapmam gerekir mi?',
    answer: ' Farklı seans, lokasyon ya da film için bilet satın almak isterseniz ayrı sipariş ile işlem yapman gerekiyor. '
  }, {
    question: '3D filmler için gözlüğü sitenizden satın alabilir miyim?',
    answer: 'Gözlüğün varsa yanında getirebilirsin. Yoksa büfeden bilete ek olarak gözlük satın alabilirsin.3D Gösterilen filmler için gözlük bedeli bilet fiyatına dahil değildir. '
  }, {
    question: 'Mobil uygulamanız var mı?',
    answer: 'Hayır şu anda bir mobil uygulamamız bulunmamaktadır. '
  }, {
    question: 'Bilet satın aldım ama sinemaya geç kalma durumumda içeri girebilir miyim?',
    answer: 'Filmin ilk 20 dakikası giriş yapabilirsiniz. Aksi takdirde filmin ikinci yarısını beklemelisiniz. '
  },
  {
    question: 'Sizinle nasıl iletişime geçebilirim ?',
    answer: 'İletişim bilgilerimize bu bağlantıdan ulaşabilirsiniz: '
  },
];

function Sss() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return
    }
    setActiveAccordion(index);
  };

  return (
    <>
    <Navbar/>
      <div className="sss-container">    
        <div className='accordion__title'>
          <h1>Sıkça Sorulan Sorular</h1>
        </div>
        <div className="accordion__faq">
          { dataCollection.map((item, index) =>
              <div key={index} onClick={() => toggleAccordion(index)}>
                <div className="accordion__faq-heading">
                  <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                  <div>
                    {accordion === index ?
                      <span className="verticle">-</span> : <span className="horizental">+</span>}
                  </div>
                </div>
                <div><p className={accordion === index ? "active" : "inactive"} >{item.answer}</p></div>
              </div>
            )
          }
        </div>
      </div>  
            <Footer/>
    </>
  );
}

export default Sss;