import { renderThumbnails } from './render-thumbnails.js';
import { openBigPicture } from './big-picture.js';
import { getData } from './api.js';
import { generatePhotos } from './data.js'; // оставляем как fallback
import { initFilters } from './filters.js';
import './form.js';

getData()
  .then((photos) => {
    renderThumbnails(photos, openBigPicture);
    initFilters(photos); // 👉 подключаем фильтры
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Не удалось получить данные с сервера:', err);

    // Показываем моковые фотки, если сервер недоступен
    const mockPhotos = generatePhotos(25);
    renderThumbnails(mockPhotos, openBigPicture);
    initFilters(mockPhotos); // 👉 фильтры работают и с моковыми
  });
