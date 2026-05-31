import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full px-6 md:px-[12%] py-16 md:py-20 bg-gray-50 dark:bg-gray-950 transition-colors scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-medium text-blue-600 dark:text-sky-400'>İletişim</h4>
      <h2 className='text-center text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 md:mb-16'>Bize Ulaşın</h2>

      <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center'>
        
        {/* Adres ve Bilgi Kısmı */}
        <div className='space-y-6 md:space-y-8'>
          <div className='bg-white dark:bg-gray-900 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm'>
            <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>Ofis Adresimiz</h3>
            <p className='text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
              Yahyakaptan Mahallesi, Şht. Ergün Köncü Sk. No:39 <br/>
              Comfort Plaza, A Blok, 1. Kat Ofis No:1 <br/>
              41050 İzmit / Kocaeli
            </p>
            
            <a 
              href="https://maps.app.goo.gl/yeni_konum_linki" 
              target="_blank" 
              rel="noopener noreferrer"
              className='inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors'
            >
              Google Haritalar'da Görüntüle
            </a>
          </div>

          <a href="https://wa.me/905555555555" 
             className='block w-full text-center py-4 md:py-5 bg-green-500 text-white rounded-3xl font-bold text-lg hover:bg-green-600 transition-all shadow-lg'>
            WhatsApp Hattı: 0555 555 55 55
          </a>
        </div>

        {/* Harita Görseli (Tıklanabilir) */}
        <a href="https://maps.app.goo.gl/yeni_konum_linki" target="_blank" rel="noopener noreferrer" 
           className='w-full h-64 md:h-80 rounded-3xl overflow-hidden block shadow-lg hover:opacity-90 transition-opacity'>
           <div className='w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400'>
             [Konum Haritası - Tıklayın]
           </div>
        </a>
      </div>
    </div>
  )
}

export default Contact