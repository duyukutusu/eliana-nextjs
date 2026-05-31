'use client'

import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: "Seanslar ne kadar sürüyor?",
      a: "Seans süremiz, çocuğumuzun ihtiyaçlarına ve uygulanan terapi yöntemine göre değişiklik göstermekle birlikte, standart olarak 45-50 dakika sürmektedir."
    },
    {
      q: "İlk değerlendirme seansında ne yapılıyor?",
      a: "İlk seansta çocuğumuzun gelişimsel düzeyi, duyusal ihtiyaçları ve motor becerileri standardize edilmiş testler ve gözlem yöntemleriyle detaylıca analiz edilir."
    },
    {
      q: "Aileler sürece nasıl dahil ediliyor?",
      a: "Aileler bizim çözüm ortağımızdır. Her seans sonunda aileye geri bildirim verilir ve ev ortamında uygulayabileceğiniz destekleyici aktiviteler paylaşılır."
    },
    {
      q: "Hangi yaş gruplarıyla çalışıyorsunuz?",
      a: "Pediatrik rehabilitasyon kapsamında 0-18 yaş arası çocuk ve ergenlerle çalışmalarımızı yürütüyoruz."
    },
    {
      q: "Randevu sisteminiz nasıl işliyor?",
      a: "Randevularımızı danışan yoğunluğunu dengelemek ve her çocuğa kesintisiz vakit ayırabilmek adına WhatsApp hattımız üzerinden planlıyoruz."
    },
    {
      q: "Seanslar SGK veya sağlık sigortası kapsamında mı?",
      a: "Duyu Kutusu olarak güncel mevzuat gereği özel kurum statüsünde hizmet vermekteyiz. Ödemeler ve güncel destekler hakkında WhatsApp hattımızdan bilgi alabilirsiniz."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    // px-6 ile mobilde yan boşlukları sağladık, py-16 ile dikey standardı koruduk
    <div id='faq' className='w-full px-6 md:px-[12%] py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors scroll-mt-20'>
      <h2 className='text-center text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 md:mb-16'>Merak Edilenler (SSS)</h2>
      
      <div className='max-w-3xl mx-auto space-y-4'>
        {faqs.map((item, index) => (
          <div key={index} className='border border-gray-200 dark:border-gray-700 rounded-2xl bg-gray-50 dark:bg-gray-800 transition-all overflow-hidden'>
            <button 
              onClick={() => toggleFAQ(index)}
              className='w-full text-left p-5 md:p-6 flex justify-between items-center font-bold text-base md:text-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors'
            >
              <span className='pr-4'>{item.q}</span>
              <span className='text-blue-600 dark:text-sky-400 text-xl font-light'>
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            
            {/* Cevap Bölümü */}
            <div className={`px-5 md:px-6 text-gray-600 dark:text-gray-300 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-60 pb-5 md:pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ