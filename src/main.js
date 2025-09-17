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
  simplelightbox,
} from './js/render-functions';

let page = 1;
const perPage = 15;
let inputQuerry = null;

const formEL = document.querySelector('form');

const btnEl = document.querySelector('.load-more-btn');

const galleryEl = document.querySelector('.gallery');

formEL.addEventListener('submit', onSubmit);

btnEl.addEventListener('click', onClick);

async function onSubmit(event) {
  event.preventDefault();
  page = 1;
  hideLoadMoreButton();
  showLoader();
  clearGallery();

  inputQuerry = event.currentTarget.elements['search-text'].value.trim();
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
  try {
    const response = await getImagesByQuery(inputQuerry, page, perPage);
    if (response.hits.length === 0) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    galleryEl.innerHTML = createGallery(response.hits);

    simplelightbox.refresh();

    if (response.totalHits > perPage) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: error.message,
    });
  } finally {
    hideLoader();
    event.target.reset();
  }
}

async function onClick(event) {
  page += 1;

  showLoader();

  try {
    const response = await getImagesByQuery(inputQuerry, page, perPage);
    galleryEl.insertAdjacentHTML('beforeend', createGallery(response.hits));
    simplelightbox.refresh();

    // Функція для скролу
    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    const lastPage = Math.ceil(response.totalHits / perPage);
    if (lastPage === page) {
      hideLoadMoreButton();

      iziToast.success({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}
