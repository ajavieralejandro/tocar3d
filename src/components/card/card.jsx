import React from 'react'

export default function card() {
  return (

    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">

            <img  src={require('../../images/img.jpeg')} alt="" />
            <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                <div className="flex justify-between font-bold text-sm">
                    <p className="text-gray-400">2022</p>
                </div>
                <h2 className="text-3xl font-semibold mt-4 md:mt-10">Tocar 3d</h2>
                <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">Bienvenido al sitio del proyecto, proximamente subiremos las novedades y actualizaciones..</p>
                
            </div>
        </section>
    </section>  )
}
