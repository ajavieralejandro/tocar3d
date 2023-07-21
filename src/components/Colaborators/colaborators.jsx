import React from "react";

const Team = () =>{
    return(
        <>
        <section class="bg-dark text-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-center text-white capitalize lg:text-4xl dark:text-white">Colaboradores</h1>
                
                <p class="max-w-2xl mx-auto my-6 text-center text-white dark:text-white">
                </p>
                
                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-3 xl:grid-cols-3">
              

                    <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
                        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/485b0ae9-40dd-435f-1c9a-a01fba7f4200/public" alt="" />
                        
                        <h1 class="mt-4 text-2xl font-semibold text-white capitalize dark:text-white group-hover:text-white">Laura Heiss</h1>
                        
                        <p class="mt-2 text-white capitalize dark:text-white group-hover:text-white">Directora de Arte/Documental</p>
                        
                       
                    </div>

                

                    <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
                        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/37cbe95f-9377-4f0d-e6ca-323f7a75be00/public" alt="" />
                        
                        <h1 class="mt-4 text-2xl font-semibold text-white capitalize dark:text-white group-hover:text-white">Luis Marte</h1>
                        
                        <p class="mt-2 text-white capitalize dark:text-white group-hover:text-white">Músico</p>
                        
                     
                    </div>

                    <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
                        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/af2aba69-09f7-4a47-b343-6da711625c00/public" alt="" />
                        
                        <h1 class="mt-4 text-2xl font-semibold text-white capitalize dark:text-white group-hover:text-white">Lucila</h1>
                        
                        <p class="mt-2 text-white capitalize dark:text-white group-hover:text-white">Música</p>
                        
                       
                    </div>

                    <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
                        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/dcd7d05f-aef1-4a3c-d3c7-cab9efc01700/public" alt="" />
                        
                        <h1 class="mt-4 text-2xl font-semibold text-white capitalize dark:text-white group-hover:text-white">Flor Ak.</h1>
                        
                        <p class="mt-2 text-white capitalize dark:text-white group-hover:text-white">Música, cantautora</p>
                        
                      
                    </div>

                    <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
                        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/6a5b9bd9-7215-4777-ffc6-e8a14b856a00/public" alt="" />
                        
                        <h1 class="mt-4 text-2xl font-semibold text-white capitalize dark:text-white group-hover:text-white">Stefanía Parese.</h1>
                        
                        <p class="mt-2 text-white capitalize dark:text-white group-hover:text-white">Fotografa, profesora y artista visual. @fluoritaestudio</p>
                        
                    
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Team;