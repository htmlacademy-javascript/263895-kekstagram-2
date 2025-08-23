import { renderThumbnails } from './render-thumbnails.js';
import { openBigPicture } from './big-picture.js';
import { getData } from './api.js';
import { generatePhotos } from './data.js'; // оставляем как fallback
import './form.js';

getData()
  .then((photos) => renderThumbnails(photos, openBigPicture))
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Не удалось получить данные с сервера:', err);
    // Показываем моковые фотки, если сервер недоступен
    const mockPhotos = generatePhotos(25);
    renderThumbnails(mockPhotos, openBigPicture);
  });
