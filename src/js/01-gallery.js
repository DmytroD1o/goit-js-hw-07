import { galleryItems } from "./gallery-items.js";
// Change code below this line

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
        data-source="${original}"
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
    
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

instance.show()

listImages.addEventListener('keydown', (evt) =>
{
    if(evt.code === "Escape") {
        instance.close()
    }
})


}




