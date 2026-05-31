import React from 'react'

const Services = () => {
  return (
    // 'px-6' ile mobilde yan boşlukları sağladık, 'scroll-mt-20' ile hizalamayı koruduk
    <div id='services' className='w-full px-6 md:px-[12%] py-16 md:py-20 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-medium text-blue-600 dark:text-sky-400'>Çözümlerimiz</h4>
      <h2 className='text-center text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 md:mb-16'>Hizmetlerimiz</h2>

      {/* Hizmet Kartları Grid Yapısı: Mobilde 1, tablette 2, masaüstünde 3 sütun */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
        
        {[
          { icon: '🧩', title: 'Ergoterapi', desc: 'Günlük yaşam aktivitelerine katılımı destekleyen, özgüven ve bağımsızlık kazandıran bireysel terapiler.' },
          { icon: '🧠', title: 'Duyu Bütünleme', desc: 'Çevresel uyaranları doğru algılayıp tepki verme becerisini geliştiren, sinir sistemi regülasyonunu hedefleyen uzman yaklaşım.' },
          { icon: '🏃', title: 'Fizyoterapi', desc: 'Motor becerilerin gelişimini hızlandıran, fiziksel koordinasyonu güçlendiren ve hareket kabiliyetini artıran egzersizler.' },
          { icon: '📊', title: 'Gelişim Takibi', desc: 'Pediatrik değerlendirme testleri ile çocuğunuzun gelişim evrelerini dijital olarak takip ediyor, raporluyoruz.' },
          { icon: '🤝', title: 'Aile Danışmanlığı', desc: 'Süreç boyunca aileyi rehabilite eden, ev içi uygulamalarla terapinin etkisini kalıcı kılan danışmanlık desteği.' },
          { icon: '🧸', title: 'Oyun Terapisi', desc: 'Çocuğun kendi dilini, yani oyunu kullanarak duygusal ve sosyal becerilerini ifade etmesine alan açıyoruz.' }
        ].map((service, index) => (
          <div key={index} className='border border-gray-200 dark:border-gray-800 rounded-3xl p-6 md:p-8 hover:shadow-xl hover:shadow-blue-50 dark:hover:shadow-none transition-all bg-white dark:bg-gray-900'>
            <div className='w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 dark:bg-gray-800 text-2xl mb-6'>
              {service.icon}
            </div>
            <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>{service.title}</h3>
            <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
              {service.desc}
            </p>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Services