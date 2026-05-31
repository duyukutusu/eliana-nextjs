import React from 'react'

const Work = () => {
  return (
    // 'px-6 md:px-[12%]' ile mobilde ferah boşluklar sağladık
    <div id='work' className='w-full px-6 md:px-[12%] py-16 md:py-20 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-medium text-blue-600 dark:text-sky-400'>Kliniğimiz</h4>
      <h2 className='text-center text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 md:mb-16'>Deneyim Alanlarımız</h2>

      {/* Grid yapısı: Mobilde tek sütun, tablet ve üstünde 3 sütun */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
        
        {/* Klinik Fotoğraf Alanları */}
        {[
          { title: 'Ergoterapi Odası', desc: 'Bireysel odaklanma ve günlük yaşam becerileri.', label: '[Terapi Odası Görseli]' },
          { title: 'Duyu Bütünleme Parkuru', desc: 'Modern ekipmanlarla donatılmış duyusal gelişim alanı.', label: '[Duyu Bütünleme Alanı]' },
          { title: 'Karşılama Alanı', desc: 'Ailelerimiz için konforlu ve ferah bekleme ortamı.', label: '[Bekleme / Karşılama]' }
        ].map((item, index) => (
          <div key={index} className='group relative aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all'>
             <div className='w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-600'>
               {item.label}
             </div>
             <div className='absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'>
               <h3 className='font-bold text-gray-900 dark:text-white text-sm md:text-base'>{item.title}</h3>
               <p className='text-xs md:text-sm text-gray-600 dark:text-gray-400'>{item.desc}</p>
             </div>
          </div>
        ))}

      </div>

      <div className='text-center mt-12 px-2'>
        <p className='text-sm md:text-base text-gray-600 dark:text-gray-400'>
          Kliniğimizdeki tüm ekipmanlar, çocuklarımızın güvenliği ve gelişimi için en güncel standartlarda seçilmiştir.
        </p>
      </div>
    </div>
  )
}

export default Work