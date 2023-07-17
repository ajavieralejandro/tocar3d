import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
   
  export default function Example() {
    return (
        <div class="grid h-screen place-items-center">
        <div class=" justify-center pt-10  items-center pl-2">

<ol class="relative border-l border-gray-200  border-gray-700">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2015 
</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Empezamos a buscar necesidad, transmitir la misión al público beneficiario(personas ciegas) para trabajar con ellos de forma colaborativa. </p>
      
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2016 

</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Recibimos premio de Inovación cultural desde la dirección nacional de innovación cultural del ministerio de cultura de Nación.  </p>
    </li>

    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2017
</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Comenzamos con las relaciones y alianzas institucionales también comenzaron los escaneos 3d's con vuelos de drones, también el diseño y desarollo del software.  </p>
    </li>

    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018 

</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Escaneo 3d del palacio Barolo
  </p>
    </li>

    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022

</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Comenzamos la fabricación del palacio Barolo Hápitico y del Documental del proyecto Tocar3d. 
</p>
    </li>

    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023 

</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Celebramos los 100 años del palacio barolo con la instalación de la impresión 3d del parcialo barolo háptico
para personas ciegas </p>
    </li>

   
    
    
</ol>
</div>
</div>
    );
  }