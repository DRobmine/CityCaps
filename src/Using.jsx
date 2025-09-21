import React, { useState } from 'react'
import { motion } from "framer-motion";

function Using() {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
  return (
    <>
    <div className='space-y-3'>
    <h1 className='text-5xl font-bold pl-5' id='using'>Foydalanish usullari</h1>
    <div className='flex justify-between items-center'>
  {/* Onlayn uchrashuvlar */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    onClick={() => setOpen1(true)}
    className='px-5 cursor-pointer py-5 relative group w-90 h-80 rounded-2xl shadow overflow-hidden'
  >
    <img
      src="/meeting.png"
      className='w-80 rounded-2xl h-60 object-cover group-hover:blur-[2px] transition'
      alt=""
    />
    <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
      <h2 className="text-2xl font-bold text-white">Onlayn uchrashuvlar</h2>
    </div>
  </motion.button>

  {/* Muzokaralar */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    onClick={() => setOpen2(true)}
    className='px-5 cursor-pointer py-5 relative group w-90 h-80 rounded-2xl shadow overflow-hidden'
  >
    <img
      src="/deal.png"
      className='w-80 rounded-2xl h-60 object-cover group-hover:blur-[2px] transition'
      alt=""
    />
    <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
      <h2 className="text-2xl font-bold text-white">Muzokaralar</h2>
    </div>
  </motion.button>

  {/* Ishlash */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    onClick={() => setOpen3(true)}
    className='px-5 cursor-pointer py-5 relative group w-90 h-80 rounded-2xl shadow overflow-hidden'
  >
    <img
      src="/work.png"
      className='w-80 rounded-2xl h-60 object-cover group-hover:blur-[2px] transition'
      alt=""
    />
    <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
      <h2 className="text-2xl font-bold text-white">Ishlash</h2>
    </div>
  </motion.button>
</div>

    {/* Meeting */}
<div className={`fixed inset-0 z-40 bg-black/70 flex justify-center items-center transition-all duration-500 ${open1 ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}>
  <div className='relative w-[1000px] h-[600px] flex rounded-3xl overflow-hidden shadow-2xl bg-white'>
    
    {/* Close Button */}
    <button 
      onClick={() => setOpen1(false)} 
      className='absolute top-5 right-5 z-50 bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition'
    >
      <img src="/x.svg" alt="Close" className='w-6 h-6' />
    </button>

    {/* Image */}
    <img src="/meeting2.png" className='w-1/2 h-full object-cover' alt="" />

    {/* Text */}
    <div className={`flex flex-col justify-center p-10 text-left gap-6 transition-all duration-700 ${open1 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
      <h1 className='text-4xl font-bold text-gray-800'>Onlayn uchrashuvlar uchun</h1>
      <p className='text-lg text-gray-600 leading-relaxed'>
        Bizning kapsulalarimiz onlayn uchrashuvlarda sizga maxfiylik va diqqatni jamlash imkonini beradi. 
        Jamoangiz bilan bog‘lanishingiz yoki konferensiya qo‘ng‘iroqlarida qatnashishingizdan qat’i nazar, 
        ushbu tovushdan izolyatsiya qilingan xonalar mukammal muhit yaratadi.
      </p>
      <p className='text-lg text-gray-600 leading-relaxed'>
        Kapsulalar turli o‘lchamlarda mavjud — bitta kishilik podadan tortib 4 kishilik xonalargacha. 
        O‘z ehtiyojingizga mos joyni tanlang.
      </p>
    </div>
  </div>
</div>


{/* Deal */}
<div className={`fixed inset-0 z-40 bg-black/70 flex justify-center items-center transition-all duration-500 ${open2 ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}>
  <div className='relative w-[1000px] h-[600px] flex rounded-3xl overflow-hidden shadow-2xl bg-white'>
    
    <button 
      onClick={() => setOpen2(false)} 
      className='absolute top-5 right-5 z-50 bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition'
    >
      <img src="/x.svg" alt="Close" className='w-6 h-6' />
    </button>

    <img src="/deal2.png" className='w-1/2 h-full object-cover' alt="" />

    <div className={`flex flex-col justify-center p-10 text-left gap-6 transition-all duration-700 ${open2 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
      <h1 className='text-4xl font-bold text-gray-800'>Muzokaralar uchun</h1>
      <p className='text-lg text-gray-600 leading-relaxed'>
        Kelishuvlarni muhokama qilish uchun maxfiy joy kerakmi? Bizning kapsulalarimiz sizga xotirjam 
        va professional muhitni taqdim etadi, shunda chalg‘ituvchi omillarsiz muzokara qilishingiz mumkin.
      </p>
      <p className='text-lg text-gray-600 leading-relaxed'>
        2, 3 yoki 4 kishilik variantlarda siz hamkorlaringiz yoki kichik jamoangiz bilan 
        samarali kelishuvlarga erishishingiz mumkin.
      </p>
    </div>
  </div>
</div>


{/* Work */}
<div className={`fixed inset-0 z-40 bg-black/70 flex justify-center items-center transition-all duration-500 ${open3 ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}>
  <div className='relative w-[1000px] h-[600px] flex rounded-3xl overflow-hidden shadow-2xl bg-white'>
    
    <button 
      onClick={() => setOpen3(false)} 
      className='absolute top-5 right-5 z-50 bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition'
    >
      <img src="/x.svg" alt="Close" className='w-6 h-6' />
    </button>

    <img src="/work2.png" className='w-1/2 h-full object-cover' alt="" />

    <div className={`flex flex-col justify-center p-10 text-left gap-6 transition-all duration-700 ${open3 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
      <h1 className='text-4xl font-bold text-gray-800'>Ishlash uchun</h1>
      <p className='text-lg text-gray-600 leading-relaxed'>
        Diqqatni jamlash uchun sokin kapsulada ishlash osonroq. Yolg‘iz ishlashingizdan qat’i nazar 
        yoki kichik guruh bilan hamkorlikda, joy sizning ehtiyojingizga moslashadi.
      </p>
      <p className='text-lg text-gray-600 leading-relaxed'>
        Bizning kapsulalarimiz 1, 2, 3 yoki 4 kishilik o‘lchamlarda mavjud — 
        samarali bo‘lishingiz uchun mukammal ish sharoitini tanlashingiz mumkin.
      </p>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Using
