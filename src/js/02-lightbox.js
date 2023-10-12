import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


console.log(galleryItems);

const listImages = document.querySelector(".gallery");

console.log(listImages);

const imagesMarkup = createImagesListMarkup(galleryItems);

listImages.insertAdjacentHTML('beforeend', imagesMarkup)

listImages.addEventListener('click', onCardsContainerClick)

function createImagesListMarkup(images) {
  return images
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
}



function onCardsContainerClick (evt) {
    evt.preventDefault()

    if(evt.target.nodeName !== "IMG") {
        return;
    }
    
   const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionType: "attr",
    captionsData: "alt",
    captionDelay: 250,
    
});



}
