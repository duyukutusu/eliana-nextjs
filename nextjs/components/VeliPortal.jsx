import React from 'react'

const VeliPortal = () => {
  return (
    // 'px-6 md:px-[12%]' ile mobilde ferah bir alan bıraktık
    <div id='veli-portal' className='w-full px-6 md:px-[12%] py-16 md:py-20 bg-blue-600 dark:bg-sky-950 transition-colors scroll-mt-20'>
      <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20'>
        
        {/* Sol Taraf: Metin */}
        <div className='text-center md:text-left'>
          <span className='inline-block px-4 py-1 mb-4 rounded-full bg-white text-blue-600 dark:text-sky-900 font-bold text-xs md:text-sm tracking-wide uppercase'>
            Yakında Hizmetinizde
          </span>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-4'>Veli Portalı</h2>
          <p className='text-blue-100 dark:text-sky-200 text-base md:text-lg leading-relaxed'>
            Çocuğunuzun gelişim raporlarına, randevu geçmişine ve ev ödevlerine 7/24 erişebileceğiniz dijital platformumuzu hazırlıyoruz.
          </p>
        </div>

        {/* Sağ Taraf: İkon */}
        <div className='flex-shrink-0'>
           <div className='w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-dashed border-white/30 flex items-center justify-center text-3xl md:text-4xl animate-spin-slow'>
             🚀
           </div>
        </div>
      </div>
    </div>
  )
}

export default VeliPortal