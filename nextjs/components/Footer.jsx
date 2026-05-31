import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-gray-900 text-gray-400 py-12 px-[12%]'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-8'>
        
        {/* Sol: Marka ve Vizyon */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-white'>Duyu Kutusu</h2>
          <p className='text-sm leading-relaxed'>
            Çocuklarımızın potansiyelini keşfediyor, bilimsel temelli ergoterapi ve fizyoterapi uygulamalarımızla yaşam kalitelerini artırıyoruz.
          </p>
        </div>

        {/* Orta: Hızlı Linkler */}
        <div className='space-y-4'>
        <h3 className='text-white font-bold'>Kurumsal</h3>
        <ul className='space-y-2 text-sm'>
            <li><a href="#about" className='hover:text-blue-400 transition-colors'>Uzmanımız Hakkında</a></li>
            <li><a href="#services" className='hover:text-blue-400 transition-colors'>Hizmetlerimiz</a></li>
            {/* Burayı düzelttik: #work yerine portalın olduğu bölüme yönlendirmeliyiz */}
            <li><a href="#veli-portal" className='hover:text-blue-400 transition-colors'>Veli Portalı</a></li>
        </ul>
        </div>

        {/* Sağ: İletişim Özet */}
        <div className='space-y-4'>
          <h3 className='text-white font-bold'>İletişim</h3>
          <p className='text-sm'>Yahyakaptan Mah. Comfort Plaza, İzmit/Kocaeli</p>
          <a href="mailto:info@duyukutusu.com" className='text-sm hover:text-blue-400 transition-colors block'>info@duyukutusu.com</a>
        </div>
      </div>

      <div className='border-t border-gray-800 pt-8 text-center text-sm'>
        © {new Date().getFullYear()} Duyu Kutusu. Tüm hakları saklıdır.
      </div>
    </footer>
  )
}

export default Footer