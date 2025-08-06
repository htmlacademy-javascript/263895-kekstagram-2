import { generatePhotos } from './data.js'; // Импорт реальной функции

const picturesContainer = document.querySelector('.pictures'); // Куда вставим миниатюры
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// Главная функция — отрисовка миниатюр
const renderThumbnails = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach(({ url, description, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};

// Вызываем отрисовку, передав массив из 25 сгенерированных фото
renderThumbnails(generatePhotos(25));

export { renderThumbnails };
