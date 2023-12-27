import React from 'react'

export default function Jumbotron() {
  return (
      <div id="Beranda" className="bg-cover bg-center h-jumbo flex items-center justify-center text-white relative" style={{ backgroundImage: 'url(onion-1.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center flex items-center justify-center flex-col">
          <img src="/logoNamaPutih.png" width={200} height={200}/>
          <h1 className="text-4xl font-bold">Selamat Datang di Situs Kami Raja Brambang</h1>
          <p className="mt-4 text-xl">Kami menyediakan produk bibit bawang merah berkualitas tinggi.</p>
        </div>
      </div>
  )
}
