// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

// 1.Створення галереї
const galleryImages = document.querySelector('.gallery');

const itemOfGallery = galleryItems
  .map(
    element =>
      `<a class="gallery__item" href=${element.original}>
  <img class="gallery__image" src=${element.preview} alt=${element.description} />
</a>`
  )
  .join(' ');
console.log(itemOfGallery);

galleryImages.insertAdjacentHTML('afterbegin', itemOfGallery);

// Через «Options» - документацію додали
// відображення підписів до зображень з атрибута та
// час появлення підпису
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
