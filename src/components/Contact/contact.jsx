import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_kvpe41q', 'template_svd3zpd', form.current, 'user_KRxr45LRpsTkhXElJp8Wx')
        .then((result) => {
            alert(result.text);
        }, (error) => {
            alert(error.text);
        });
    };
    return(
        <section class="bg-black text-white dark:bg-gray-900" id="Contact">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white900 dark:text-white">Contactanos</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-white500 dark:text-white400 sm:text-xl">Te interesa el proyecto ? Mandanos un mensaje y nos contactaremos!.</p>
            <form  ref={form} onSubmit={sendEmail} class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-white900 dark:text-white300"> email</label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@gmail.com" required />
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-white900 dark:text-white300">Asunto</label>
                    <input type="text" id="subject" class="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Contanos sobre vos" required />
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-white900 dark:text-white400">Mensaje</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Dejanos un comentario"></textarea>
                </div>
                <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar Mensaje</button>
            </form>
        </div>
      </section>
    )
}

export default Contact;