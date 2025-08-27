import { renderThumbnails } from './render-thumbnails.js';
import { openBigPicture } from './big-picture.js';
import { debounce } from './util.js';

const imgFilters = document.querySelector('.img-filters');
const filterForm = imgFilters.querySelector('.img-filters__form');

const RANDOM_PHOTOS_COUNT = 10;

const getRandomPhotos = (photos) => [...photos]
  .sort(() => Math.random() - 0.5)
  .slice(0, RANDOM_PHOTOS_COUNT);

const getDiscussedPhotos = (photos) => [...photos].sort((a, b) => b.comments.length - a.comments.length);

const applyFilter = (photos, filterId) => {
  switch (filterId) {
    case 'filter-random':
      return getRandomPhotos(photos);
    case 'filter-discussed':
      return getDiscussedPhotos(photos);
    default:
      return photos;
  }
};

const initFilters = (photos) => {
  imgFilters.classList.remove('img-filters--inactive'); // показываем блок фильтров

  const debouncedRender = debounce((filterId) => {
    const filteredPhotos = applyFilter(photos, filterId);
    renderThumbnails(filteredPhotos, openBigPicture);
  });

  filterForm.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    // подсветка активной кнопки
    filterForm.querySelectorAll('.img-filters__button')
      .forEach((btn) => btn.classList.remove('img-filters__button--active'));
    evt.target.classList.add('img-filters__button--active');

    debouncedRender(evt.target.id);
  });
};

export { initFilters };
