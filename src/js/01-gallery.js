// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const divRef = document.querySelector('.gallery');

const galleryItemCreate = galleryItems
  .map( ({ preview, original, description }) => {
    return `
      <a class = "gallery__item" href="${original}">
        <img class = "gallery__image" src = "${preview}" alt = "${description}">
      </a>  
    `
  } )
  .join("")
divRef.insertAdjacentHTML('afterbegin', galleryItemCreate);

divRef.addEventListener('click', showOriginalImg);

function showOriginalImg(e) {
  e.preventDefault();
  console.log(e);

  let galleryShow = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
};