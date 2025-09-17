// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formEL = document.querySelector('form');
formEL.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const inputQuerry = event.currentTarget.elements['search-text'].value.trim();
  if (inputQuerry === '') {
    iziToast.error({
      message: 'Search input can`t be empty',
    });
    event.target.reset();
    return;
  }

  showLoader();
  clearGallery();
  getImagesByQuery(inputQuerry)
    .then(response => {
      if (response.data.hits.length === 0) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      createGallery(response.data.hits);
    })
    .catch(error => {
      iziToast.error({
        message: error.message,
      });
    })
    .finally(() => {
      hideLoader();
      event.target.reset();
    });
}
