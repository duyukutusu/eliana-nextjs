'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    // 'px-6' ile mobilde kenarlardan ferah bir boşluk bıraktık
    <nav className="w-full fixed top-0 px-6 lg:px-[12%] py-4 flex items-center justify-between z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md transition-colors border-b border-gray-100 dark:border-gray-800">
      
      {/* Logo Alanı */}
      <a href="#top" className="flex items-center gap-2 cursor-pointer">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 shadow-md"></div>
        <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Duyu Kutusu</span>
      </a>

      {/* Orta Menü Linkleri - Mobilde gizli, tablette görünür */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-2.5 bg-white/50 dark:bg-transparent border border-gray-100 dark:border-gray-800 shadow-sm">
        <li><a href="#about" className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400 font-medium transition-colors">Uzmanımız</a></li>
        <li><a href="#services" className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400 font-medium transition-colors">Hizmetlerimiz</a></li>
        <li><a href="#veli-portal" className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400 font-medium transition-colors">Veli Portalı</a></li>
      </ul>

      {/* Sağ Taraf - Tema Butonu ve İletişim */}
      <div className="flex items-center gap-2 sm:gap-4">
        {mounted && (
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 sm:p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-xl sm:text-2xl flex items-center justify-center"
            aria-label="Temayı Değiştir"
          >
            {theme === 'dark' ? "☀️" : "🌙"}
          </button>
        )}
        
        <a href="https://wa.me/905555555555" className="hidden sm:flex items-center gap-2 px-5 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm lg:text-base text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm">
          Bize Ulaşın
        </a>
      </div>
      
    </nav>
  )
}

export default Navbar