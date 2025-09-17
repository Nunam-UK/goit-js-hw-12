// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const loaderEl = document.querySelector('.loader');

const simplelightbox = new SimpleLightbox('.gallery a');

const btnEl = document.querySelector('.load-more-btn');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <li>
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}"  />

          <ul>
            <li>
              <p>Likes</p>
              <p>${likes}</p>
            </li>
            <li>
              <p>Views</p>
              <p>${views}</p>
            </li>
            <li>
              <p>Comments</p>
              <p>${comments}</p>
            </li>
            <li>
              <p>Downloads</p>
              <p>${downloads}</p>
            </li>
          </ul>
        </a>
      </li>
      `;
      }
    )
    .join('');

  galleryEl.innerHTML = markup;

  simplelightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('hidden');
}

export function hideLoader() {
  loaderEl.classList.add('hidden');
}

export function showLoadMoreButton() {
  btnEl.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  btnEl.classList.add('hidden');
}
