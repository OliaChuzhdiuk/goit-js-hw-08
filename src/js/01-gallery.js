// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryDivRef = document.querySelector(".gallery");
galleryDivRef.innerHTML = galleryImg(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionDelay: 250 });

function galleryImg(items) {
    return items
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
        })
        .join("");
}