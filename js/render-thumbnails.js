// render-thumbnails.js
import { openBigPicture } from './big-picture.js'; // Импортируем функцию для открытия полноразмерного фото

const picturesContainer = document.querySelector('.pictures'); // Блок, куда вставляются миниатюры
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); // Шаблон миниатюры

// Функция отрисовки миниатюр
const renderThumbnails = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    // Клонируем шаблон
    const pictureElement = pictureTemplate.cloneNode(true);

    // Заполняем данными
    const imgEl = pictureElement.querySelector('.picture__img');
    imgEl.src = photo.url;
    imgEl.alt = photo.description;

    const likesEl = pictureElement.querySelector('.picture__likes');
    if (likesEl) {
      likesEl.textContent = String(photo.likes || 0);
    }

    const commentsEl = pictureElement.querySelector('.picture__comments');
    if (commentsEl) {
      commentsEl.textContent = String(Array.isArray(photo.comments) ? photo.comments.length : 0);
    }

    // Добавляем обработчик клика — открытие полноразмерного фото
    pictureElement.addEventListener('click', () => {
      openBigPicture(photo);
    });

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};

export { renderThumbnails };
