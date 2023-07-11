import React from "react";

const Card3 = () =>{
    return(
        <>
         <article class="p-10 min-h-116 max-w-xl w-full bg-gray-200 rounded-xl text-gray-600 transform duration-500 hover:-translate-y-1 cursor-pointer">
                <h1 class="mt-5 text-2xl md:text-3xl font-light leading-snug min-h-33">One small step for man one giant leap for mankind
                </h1>
                <div class="mt-20">
                    <span class="text-xl">Moonlanding - </span>
                    <span class="font-bold text-xl">Neil Armstrong</span>
                </div>
                <div class="mt-16 flex justify-between">
                    <span class="p-3 pl-0 font-bold">Story</span>
                    <span class="p-3  border-2 border-gray-500 rounded-md text-base hover:bg-black hover:border-gray-200 cursor-pointer hover:text-white ">Paid
            Membership</span>
                </div>
            </article>
        </>
    )
}

export default Card3;