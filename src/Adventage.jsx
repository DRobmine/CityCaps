import React, { useState } from 'react'
import { Users, Armchair, Sparkles, Heart } from "lucide-react";

function Adventage() {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
  return (
    <>
    <div className=" py-20 bg-gradient-to-b space-y-5 from-gray-50 to-gray-100">
      <h1 className='text-5xl font-bold pl-5' id='advantage'>Afzalliklar</h1>

      {/* 1 kishi uchun kapsula */}
      <div className="flex justify-between items-center bg-white border border-gray-200 rounded-3xl shadow-xl p-8 mb-14 gap-10 hover:shadow-2xl transition duration-300">
        <img
          src="/1.png"
          className="w-80 h-64 object-cover rounded-2xl shadow-md hover:scale-105 transition"
          alt=""
        />
        <div className="text-center max-w-lg">
          <h1 className="text-4xl font-bold flex justify-center items-center gap-3">
            <Armchair className="text-blue-600" /> 1 kishi uchun kapsula
          </h1>
          <p className="italic text-gray-600 mt-3 text-lg">
            “Shovqin o‘tkazmaydi, shinam va yolg‘izlikni sevuvchilar uchun ideal
            joy”
          </p>
          <button
            onClick={() => setOpen1(true)}
            className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg rounded-2xl shadow hover:bg-blue-700 hover:shadow-lg transition"
          >
            Batafsil
          </button>
        </div>
      </div>

      {/* 2 kishi uchun kapsula */}
      <div className="flex justify-between items-center bg-white border border-gray-200 rounded-3xl shadow-xl p-8 mb-14 gap-10 hover:shadow-2xl transition duration-300">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl font-bold flex justify-center items-center gap-3">
            <Heart className="text-pink-500" /> 2 kishi uchun kapsula
          </h1>
          <p className="italic text-gray-600 mt-3 text-lg">
            “Do‘stingiz yoki yaqin insoningiz bilan birga, qulay va samimiy
            muhit”
          </p>
          <button
            onClick={() => setOpen2(true)}
            className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg rounded-2xl shadow hover:bg-blue-700 hover:shadow-lg transition"
          >
            Batafsil
          </button>
        </div>
        <img
          src="/2.png"
          className="w-80 h-64 object-cover rounded-2xl shadow-md hover:scale-105 transition"
          alt=""
        />
      </div>

      {/* 3 kishi uchun kapsula */}
      <div className="flex justify-between items-center bg-white border border-gray-200 rounded-3xl shadow-xl p-8 mb-14 gap-10 hover:shadow-2xl transition duration-300">
        <img
          src="/3.png"
          className="w-80 h-64 object-cover rounded-2xl shadow-md hover:scale-105 transition"
          alt=""
        />
        <div className="text-center max-w-lg">
          <h1 className="text-4xl font-bold flex justify-center items-center gap-3">
            <Users className="text-green-600" /> 3 kishi uchun kapsula
          </h1>
          <p className="italic text-gray-600 mt-3 text-lg">
            “Oilaviy mehr, iliqlik va quvonchga to‘la shinam kapsula”
          </p>
          <button
            onClick={() => setOpen3(true)}
            className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg rounded-2xl shadow hover:bg-blue-700 hover:shadow-lg transition"
          >
            Batafsil
          </button>
        </div>
      </div>

      {/* 4 kishi uchun kapsula */}
      <div className="flex justify-between items-center bg-white border border-gray-200 rounded-3xl shadow-xl p-8 mb-14 gap-10 hover:shadow-2xl transition duration-300">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl font-bold flex justify-center items-center gap-3">
            <Sparkles className="text-yellow-500" /> 4 kishi uchun kapsula
          </h1>
          <p className="italic text-gray-600 mt-3 text-lg">
            “Birgalikda vaqt o‘tkazish uchun keng, qulay va yorqin muhit”
          </p>
          <button
            onClick={() => setOpen4(true)}
            className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg rounded-2xl shadow hover:bg-blue-700 hover:shadow-lg transition"
          >
            Batafsil
          </button>
        </div>
        <img
          src="/4.png"
          className="w-80 h-64 object-cover rounded-2xl shadow-md hover:scale-105 transition"
          alt=""
        />
      </div>
    </div>

      {/* Birinchi */}
      <div onClick={() => (setOpen1(false))} className={`fixed z-40 top-0 left-0 bg-black/40 flex px-15 items-center justify-center w-screen h-screen transition-transform ${open1 ? 'duration-400 scale-100' : 'scale-0'}`}>

      <div className="flex flex-col items-center border border-gray-300 rounded-2xl shadow-lg p-8 max-w-xl   bg-white">
        {/*  */}
        <img
          src="/1.png"
          alt="1 kishi uchun kapsula"
          className="w-80 h-64 object-cover rounded-2xl mb-6"
        />

        {/* Chap taraf tavsiflar va o‘ng taraf narx */}
        <div className="flex justify-between w-full mt-4 items-end">
          {/* Chap taraf */}
          <ul className="text-lg text-gray-700 space-y-2 text-left">
            <li>📶 Wi-Fi</li>
            <li>🪑 Stol va 1 ta stul</li>
            <li>🔌 Rozetka "telefon/laptop uchun" </li>
          </ul>

          {/* O‘ng taraf - Narx */}
          <div className='flex flex-col items-end space-y-2'>
            <button
            className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
            onClick={() => window.open('https://www.payme.uz', '_blank')}
          >
            To‘lov qiling
          </button>
            <p className="text-xl font-semibold text-blue-700 pl-2"> Narxi: 35.000 so‘m</p>
          </div>
        </div>
      </div>
    </div>

    {/* Ikkinchi */}
     <div onClick={() => (setOpen2(false))} className={`fixed z-40 top-0 left-0 bg-black/40 flex px-15 items-center justify-center w-screen h-screen transition-transform ${open2 ? 'duration-400 scale-100' : 'scale-0'}`}>

      <div className="flex flex-col items-center border border-gray-300 rounded-2xl shadow-lg p-8 max-w-xl bg-white">
        {/*  */}
        <img
          src="/2.png"
          alt="2 kishi uchun kapsula"
          className="w-80 h-64 object-cover rounded-2xl mb-6"
        />

        {/* Chap taraf tavsiflar va o‘ng taraf narx */}
        <div className="flex justify-between w-full mt-4 items-end">
          {/* Chap taraf */}
          <ul className="text-lg text-gray-700 space-y-2 text-left">
            <li>📶 Wi-Fi</li>
            <li>🪑 2 ta stul va stol</li>
            <li>🔌 Rozetka (ko‘proq port bilan)</li>
            <li>🧴 Mini tokcha</li>
            <li>🌬 Shamollatish / ventilyator</li>
          </ul>

          {/* O‘ng taraf - Narx va tugma */}
          <div className="flex flex-col items-end space-y-2">
            <button
              className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
              onClick={() => window.open('https://www.payme.uz', '_blank')}
            >
              To‘lov qiling
            </button>
            <p className="text-xl font-semibold text-blue-700">
              Narxi: 40.000 so‘m
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Uchinchi */}
    <div onClick={() => (setOpen3(false))} className={`fixed z-40 top-0 left-0 bg-black/40 flex px-15 items-center justify-center w-screen h-screen transition-transform ${open3 ? 'duration-400 scale-100' : 'scale-0'}`}>
     

      <div className="flex flex-col items-center border border-gray-300 rounded-2xl shadow-lg p-8 max-w-xl bg-white">
        {/*  */}
        <img
          src="/3.png"
          alt="3 kishi uchun kapsula"
          className="w-80 h-64 object-cover rounded-2xl mb-6"
        />

        {/* Chap taraf tavsiflar va o‘ng taraf narx */}
        <div className="flex justify-between w-full mt-4 items-end">
          {/* Chap taraf */}
          <ul className="text-lg text-gray-700 space-y-2 text-left">
            <li>📶 Wi-Fi</li>
            <li>🪑 3 ta stul va stol</li>
            <li>🔌 Ko‘p rozетка</li>
            <li>🧴 Mini tokcha</li>
            <li>🌬 Shamollatish tizimi</li>
            <li>❄️ Konditsioner</li>
            <li>🔊 Kichik audio tizim</li>
          </ul>

          {/* O‘ng taraf - Narx va tugma */}
          <div className="flex flex-col items-end space-y-2">
            <button
              className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
              onClick={() => window.open('https://www.payme.uz', '_blank')}
            >
              To‘lov qiling
            </button>
            <p className="text-xl font-semibold text-blue-700">
              Narxi: 60.000 so‘m
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Tortinchi */}
    <div onClick={() => (setOpen4(false))} className={`fixed z-40 top-0 left-0 bg-black/40 flex px-15 items-center justify-center w-screen h-screen transition-transform ${open4 ? 'duration-400 scale-100' : 'scale-0'}`}>
      

      <div className="flex flex-col items-center border border-gray-300 rounded-2xl shadow-lg p-8 max-w-4xl bg-white">
        {/*  */}
        <img
          src="/4.png"
          alt="4 kishi uchun kapsula"
          className="w-80 h-64 object-cover rounded-2xl mb-6"
        />

        {/* Chap taraf - tavsiflar / O‘ng taraf - narx va tugma */}
        <div className="flex justify-between w-full mt-4 items-end">
          {/* Chap taraf */}
          <ul className="text-lg text-gray-700 space-y-2 text-left">
            <li>📶 Wi-Fi</li>
            <li>🪑 Stol va 4 ta stul</li>
            <li>🔌 Ko‘p rozетка</li>
            <li>🧴 Mini tokcha</li>
            <li>❄️ Konditsioner</li>
            <li>🔊 Kichik audio tizim</li>
            <li>📺 Mini televizor / Monitor (film yoki taqdimot uchun)</li>
            <li>☕️ Mini choyshab / qahva mashinasi (dam olish uchun)</li>
          </ul>

          {/* O‘ng taraf */}
          <div className="flex flex-col items-end space-y-2">
            <button
              className="px-6 py-2 bg-gray-500 text-white rounded-xl hover:bg-red-700 transition"
              onClick={() => window.open('https://www.payme.uz', '_blank')}
            >
              To‘lov qiling
            </button>
            <p className="text-2xl font-bold text-blue-700">
              Narxi: 100.000 so‘m
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Adventage