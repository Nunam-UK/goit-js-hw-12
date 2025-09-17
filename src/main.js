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
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

let page = 1;
const perPage = 15;

const formEL = document.querySelector('form');
formEL.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  showLoader();
  clearGallery();

  const inputQuerry = event.currentTarget.elements['search-text'].value.trim();
  if (inputQuerry === '') {
    iziToast.error({
      message: 'Search input can`t be empty',
    });
    setTimeout(() => {
      hideLoader();
    }, 500);
    event.target.reset();
    return;
  }

  getImagesByQuery(inputQuerry, page, perPage)
    .then(response => {
      if (response.hits.length === 0) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      createGallery(response.hits);

      if (response.totalHits > perPage) {
        showLoadMoreButton();
      } else {
        hideLoadMoreButton();
      }
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
