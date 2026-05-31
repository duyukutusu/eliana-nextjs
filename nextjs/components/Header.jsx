import React from 'react'

const Header = () => {
  return (
    // 'px-6' ile mobilde kenarlardan boşluk bıraktık, 'scroll-mt-20' ile çapa hizalamasını koruduk
    <div id='top' className='w-full px-6 md:px-[12%] h-screen flex flex-col items-center justify-center text-center pt-20 relative'>
      
      {/* Üst Duyuru Baloncuğu */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm mb-6 transition-colors">
        <span className="flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
        İzmit merkezimiz için ön kayıtlar başladı!
      </div>

      {/* Ana Başlık: Mobilde text-4xl, büyük ekranda text-6xl */}
      <h1 className='text-4xl sm:text-6xl lg:text-[5.5rem] font-extrabold tracking-tighter leading-tight text-gray-900 dark:text-white transition-colors'>
        Gelişim Yolculuğundaki <br/> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">En Güvenilir Adım</span>
      </h1>

      {/* Alt Metin */}
      <p className='max-w-2xl mx-auto text-base sm:text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed mt-6 transition-colors'>
        Merve Seçildi Sönmez liderliğinde, çocukların günlük yaşamda bağımsız ve özgüvenli olmalarını sağlıyoruz. Ergoterapi süreçlerini ölçülebilir ve oyun temelli hale getiriyoruz.
      </p>

      {/* Butonlar: Mobilde alt alta, masaüstünde yan yana */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto'>
        <a href="https://wa.me/905555555555" 
           className='w-full sm:w-auto px-8 py-4 border border-transparent rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2'>
          WhatsApp ile Randevu Al
        </a>
        
        <a href="#about" 
           className='w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm'>
          Uzmanımızla Tanış
        </a>
      </div>
      
    </div>
  )
}

export default Header