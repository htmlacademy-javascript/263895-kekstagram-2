// render-thumbnails.js
const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

/**
 * Отрисовка миниатюр
 * @param {Array} photos - массив объектов с данными фотографий
 * @param {Function} onThumbnailClick - колбэк для клика по миниатюре
 */
const renderThumbnails = (photos, onThumbnailClick) => {
  // Очищаем контейнер от старых миниатюр (если перерисовка)
  const oldPictures = picturesContainer.querySelectorAll('.picture');
  oldPictures.forEach((pic) => pic.remove());

  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    const imgEl = pictureElement.querySelector('.picture__img');
    imgEl.src = photo.url;
    imgEl.alt = photo.description;

    const likesEl = pictureElement.querySelector('.picture__likes');
    likesEl.textContent = photo.likes;

    const commentsEl = pictureElement.querySelector('.picture__comments');
    commentsEl.textContent = photo.comments.length;

    // При клике на миниатюру открываем большое фото
    pictureElement.addEventListener('click', () => {
      onThumbnailClick(photo);
    });

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};

export { renderThumbnails };
