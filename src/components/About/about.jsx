import React from "react";

const About = () =>{
    return(
        <>
        <section class="bg-white dark:bg-gray-900" id="About">
            <div class="container px-6 py-10 mx-auto">
                <div class="lg:flex lg:items-center">
                    <div class="w-full space-y-12 lg:w-1/2 ">
                        <div>
                            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Nosotros <br/> Nuestra Visión</h1>
                        
                            <div class="mt-2 ">
                                <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                                <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                                <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                            </div>
                        </div>

                        <div class="md:flex md:items-start md:-mx-4 text-2xl">
                
                            <div class="mt-4 md:mx-4 md:mt-0">

                                <p class="mt-3 text-black dark:text-gray-300">
                                Confiamos en que incorporar tecnologías de fabricación digital al ecosistema de la educación y el patrimonio contribuirá exponencialmente a mejorar la alfabetización de la población de personas que no pueden tener acceso al conocimiento en igualdad de condiciones.                                </p>
                            </div>
                        </div>

                        <div class="md:flex md:items-start md:-mx-4">
                           
                            <div class="mt-4 md:mx-4 md:mt-0">

                                <p class="mt-3 text-black dark:text-gray-300 text-2xl">
                                La lecto-escritura háptica, la contribución a la digitalización abierta y a la fabricación de material pedagógico y didáctico son nuestros objetivos.
                                </p>
                            </div>
                        </div>

                        <div class="md:flex md:items-start md:-mx-4">
                            

                            <div class="mt-4 md:mx-4 md:mt-0">

                                <p class="mt-3 text-black dark:text-gray-300 text-2xl">
                                Y queremos lograrlo de forma interdisciplinaria combinando múltiples actores del sector público y del sector privado, estableciendo redes de intercambio institucional entre quienes pueden apoyar nuestra visión, quienes pueden acompañarnos a llevar a cabo nuestra misión y quienes pueden beneficiarse de la conjunción de factores nucleados por TOCAR3D y Agora3D Academy, para crear oportunidades, hacia una sociedad inclusiva.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:h-1/2 sm:w-1/2 lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                        <img cclass="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/23d04424-fc57-413d-6d9a-64203471db00/public" alt="" />
                    </div>
                </div>

                <hr class="border-gray-200 my-12 dark:border-gray-700" />

                <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">



                    
                </div>
            </div>
        </section>
        </>
    )
}

export default About;