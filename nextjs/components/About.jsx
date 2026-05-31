import React from 'react'

const About = () => {
  return (
    // 'px-6 md:px-[12%]' ile mobilde yanlardan boşluk bıraktık, masaüstünde sabit genişlikte tutuyoruz.
    <div id='about' className='w-full px-6 md:px-[12%] py-16 md:py-20 scroll-mt-20 bg-gray-50 dark:bg-gray-950 transition-colors'>
      <h2 className='text-center text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 md:mb-16'>Merve Hoca Kimdir?</h2>

      {/* Ana Grid Yapısı: Mobilde tek sütun, masaüstünde 3 sütun */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start max-w-6xl mx-auto'>
        
        {/* 1. Sütun: Akademik Dereceler */}
        <div className='bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 h-full'>
          <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2'>
              🎓 Akademik Dereceler
          </h3>
          <ul className='space-y-6 text-gray-600 dark:text-gray-300'>
            <li>
              <span className='font-bold block text-gray-900 dark:text-white'>Bahçeşehir Üniversitesi</span>
              Ergoterapi (Lisans) - Bölüm 1.'si 🏅
            </li>
            <li>
              <span className='font-bold block text-gray-900 dark:text-white'>Bahçeşehir Üniversitesi</span>
              Fizyoterapi ve Rehabilitasyon (Lisans - Çift Anadal)
            </li>
            <li>
              <span className='font-bold block text-gray-900 dark:text-white'>Bahçeşehir Üniversitesi</span>
              Fizyoterapi ve Rehabilitasyon (Yüksek Lisans)
            </li>
            <li>
              <span className='font-bold block text-gray-900 dark:text-white'>Necmettin Erbakan Üniversitesi</span>
              Otizm Spektrum Bozukluğu (Yüksek Lisans)
            </li>
          </ul>
        </div>

        {/* 2. Sütun: Profesyonel Deneyim */}
        <div className='bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border-t-4 border-blue-600 dark:border-sky-500 h-full'>
          <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2'>
              💼 Profesyonel Deneyim
          </h3>
          <div className='space-y-6'>
            <div>
              <p className='font-bold text-gray-900 dark:text-white'>KindyROO Kocaeli</p>
              <p className='text-sm text-gray-500'>Ergoterapist / Fizyoterapist | Aralık 2025 - Günümüz</p>
            </div>
            <div>
              <p className='font-bold text-gray-900 dark:text-white'>SOBE Vakfı (Konya)</p>
              <p className='text-sm text-gray-500'>Ergoterapist / Fizyoterapist | Şubat 2022 - Eylül 2025</p>
            </div>
            <div>
              <p className='font-bold text-gray-900 dark:text-white'>Özel Eğitim Kurumları</p>
              <p className='text-sm text-gray-500'>Kocaeli, Mersin & Eskişehir | 2020 - 2022</p>
            </div>
          </div>

          <div className='mt-8 pt-8 border-t border-dashed border-gray-200 dark:border-gray-700'>
              <h4 className='font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2'>⭐ Temel Yetkinlikler</h4>
              <ul className='space-y-2 text-gray-600 dark:text-gray-300'>
                <li>✅ +1200 Klinik Vaka Tecrübesi</li>
                <li>✅ Pediatrik Değerlendirme Testleri</li>
                <li>✅ Aile Eğitim ve Danışmanlığı</li>
              </ul>
          </div>
        </div>

        {/* 3. Sütun: Uzmanlık Sertifikaları */}
        <div className='bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 h-full'>
          <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2'>
              🏷️ Uzmanlık Sertifikaları
          </h3>
          <ul className='space-y-4 text-gray-600 dark:text-gray-300'>
            {[
              "S.O.S Beslenme Terapisi", 
              "Duyu Bütünleme Terapisi", 
              "ETEÇOM 2 Uygulayıcısı", 
              "Zihin Kuramı", 
              "IVODS", 
              "Oyun Temelli ABA Eğitimi", 
              "Nöroplay Eğitimi", 
              "Oyun Terapisi"
            ].map((item, index) => (
              <li key={index} className='flex items-start gap-2'>
                <span className='text-green-500'>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Sözü */}
      <div className='mt-12 md:mt-16 text-center max-w-3xl mx-auto'>
        <p className='text-base sm:text-lg italic text-gray-700 dark:text-gray-300 font-medium leading-relaxed'>
          "Çocuk gelişimi tek yönlü değildir; fiziksel, duyusal ve bilişsel süreçlerin bütünüdür. Amacım, bilimsel temellere dayalı terapilerle çocuğunuzun potansiyelini açığa çıkarmaktır."
        </p>
      </div>
    </div>
  )
}

export default About