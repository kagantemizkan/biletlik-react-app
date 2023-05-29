import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"

const Hakkimizda = () => {
  return (
      <div>
        <Navbar/>
        <section className="welcome_section layout_padding">
          <div className="about-container">
            <div className="custom_heading-container">
              <h2>
                HAKKIMIZDA
              </h2>
            </div>
            <div className="layout_padding2">
              <div className="detail-box">
                <p>Biz, Biletlik, sinema otomasyon websitesi projesini oluşturan bir ekip olarak sizlere hizmet vermekten mutluluk duyuyoruz. Misyonumuz, sinemaseverlere kolay, hızlı ve kullanıcı dostu bir platform sunarak sinema deneyimini geliştirmektir.</p><p>&nbsp;</p>
                <p>Ekibimiz, Kocaeli Üniversitesi Bilişim Sistemleri Mühendisliği öğrencilerinden oluşmaktadır. Bu proje kapsamında, bir sinema otomasyon sistemi tasarlayarak sinemaseverlerin online olarak film seanslarına bilet almasını sağlamak amacıyla bir araya geldik. Kısa zamanda bir çok teknolojik becerilerimizi ve yaratıcılığımızı kullanarak, bu projeyi hayata geçirmek için çabaladık.</p><p>&nbsp;</p>
                <p>Sunduğumuz hizmetler arasında film seanslarına göz atma, bilet rezervasyonu yapma, oturma planını görüntüleme ve bilet alma gibi işlemler yer almaktadır. Ayrıca, kullanıcılarımıza film incelemeleri, fragmanlar ve vizyondaki filmler hakkında güncel bilgiler sunmak için çaba sarf etmekteyiz.</p><p>&nbsp;</p>
                <p>Tasarımımızı, kullanım kolaylığını ve estetik görünümü ön planda tutarak, sinema keyfini baştan sona kadar deneyimlemek isteyen herkesin memnuniyetini hedefliyoruz. Müşteri memnuniyeti bizim için en önemli önceliktir ve her zaman kullanıcılarımızın geri bildirimlerini dikkate alarak platformumuzu iyileştirmeye çalışıyoruz.
                Sizlerin desteği ve ilgisi sayesinde Biletlik gelişmeye devam edecektir. Ekip olarak, sinemaseverlerin beklentilerini karşılamak ve onlara unutulmaz bir sinema deneyimi sunmak için çalışmalarımıza devam edeceğiz.</p><p>&nbsp;</p>
                <p>Bizi tercih ettiğiniz için teşekkür ederiz!</p>
                <p>Dediğimiz gibi kısa bir sürede bu projeyi hayata geçirdik ve bu yüzden Biletlik kapasitesinin kesinlikle yüzde yüzünde değil!
                Eğer herhangi bir sorunuz veya geri bildiriminiz varsa, lütfen bize ulaşmaktan çekinmeyin. Sizinle iletişim halinde olmak ve deneyiminizi daha da iyileştirmek için buradayız.</p><p>&nbsp;</p>
                <p>Saygılarımızla,</p>
                
                <p>Biletlik Ekibi</p>
                <div className="skill-box">
                <span className="title">BİLETLİK</span>
                <div className="skill-bar">
                    <span className="skill-per biletlik">
                        <span className="tooltip">65%</span>
                    </span>
                </div>
            </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
  )
}

export default Hakkimizda