import React from "react";

const ImageGallery = ({src,onClick}) =>{
    return(
        <>
              <div>
            <img onClick={()=>onClick(src)}  class="h-auto max-w-full rounded-lg" src={src} alt="" />
        </div>
        </>
    )
}

export default ImageGallery;