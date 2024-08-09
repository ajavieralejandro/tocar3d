import React, { useState, useCallback } from "react";
import Modal from "../Modal/modal";
import ImageGallery from "../ImageGallery/image";
const Gallery2 = () => {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState("");

    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    
    const onClick = (src) =>{
        setOpen(true);
        setImage(src);

    }
    
   const handleImage = (src)=>{
    setImage(src);
   }

    return (
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div class="grid gap-4">
        
    <div>

<ImageGallery  onClick={onClick}   src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/c6d653f8-5e1f-48fe-8586-27a20b17db00/public" alt="" />

</div>

<div>

<ImageGallery  onClick={onClick}    src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/477e930e-5982-45ad-b3ee-f2ede96cc300/public" alt="" />

</div>

        <div>
            <ImageGallery   onClick={onClick}  src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/632e19bb-2b5e-4739-0b24-9f97c68c7000/public" alt="" />
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <ImageGallery  onClick={onClick}   src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/9e6e3702-4099-4e81-2240-6667246a2600/public" alt="" />
        </div>
        <div>
            <ImageGallery  onClick={onClick}   src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/be986e69-68c4-4b7b-0ff6-a56f095ff600/public" alt="" />
        </div>
        <div>
            <ImageGallery  onClick={onClick}   src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/e35ad156-6447-4547-2dd6-bcf3eb361a00/public" alt="" />
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <ImageGallery  onClick={onClick}   src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/aa0b471d-e283-4cca-39d4-9391f4e9d200/public" alt="" />
        </div>
        <div>
            <ImageGallery  onClick={onClick}   src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/c20fb578-99bc-4b35-934d-bf5a52e14c00/public" alt="" />
        </div>
        <div>
            <ImageGallery  onClick={onClick}   src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/545e97d8-4295-4833-2efb-48975ebdd600/public" alt="" />
        </div>
    </div>
    <Modal open={open} setOpen={setOpen} image={image} />
</div>
    );
  }

  export default Gallery2;