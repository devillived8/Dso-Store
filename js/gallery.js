const galleryImg = document.querySelector(".gallery__img");
const gallery = document.querySelector(".gallery");

export function openGallery(){
    const accountImg = document.querySelector(".account__img");
    const imgSrc = document.querySelector(".account__img")?.src;
    galleryImg.src = imgSrc;

    accountImg?.addEventListener("click", (e)=>{
        console.log(e.target);


        if(e.target == accountImg){

           gallery.style.display = "flex";

        }



    })

}


export function closeGallery(){

    gallery?.addEventListener("click", (e)=>{
        console.log(e.target);

        
        if(e.target == gallery){

           gallery.style.display = "none";

        }



    })

}