import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52321579-5376ad108ad3c10360339b813';
axios.defaults.baseURL = BASE_URL;

export async function getImagesByQuery(q, page, perPage) {
  const params = {
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: perPage,
  };

  const res = await axios.get('', { params });

  return res.data;
}
