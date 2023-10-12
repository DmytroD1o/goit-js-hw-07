import { galleryItems } from './gallery-items.js';
// Change code below this line


const listImages = document.querySelector(".gallery");


const imagesMarkup = createImagesListMarkup(galleryItems);

listImages.insertAdjacentHTML('beforeend', imagesMarkup)


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


    
   const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionType: "attr",
    captionsData: "alt",
    captionDelay: 250,
   });
