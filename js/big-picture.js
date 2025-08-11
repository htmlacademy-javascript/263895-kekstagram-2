// big-picture.js
// Модуль для открытия и закрытия полноразмерного изображения с данными

// Находим элементы в DOM
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const shownCommentsCount = bigPicture.querySelector('.social__comment-shown-count');
const totalCommentsCount = bigPicture.querySelector('.social__comment-total-count');
const commentsList = bigPicture.querySelector('.social__comments');
const description = bigPicture.querySelector('.social__caption');
const commentCountBlock = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

// Функция закрытия окна
function closeBigPicture() {
  bigPicture.classList.add('hidden'); // Скрываем окно
  document.body.classList.remove('modal-open'); // Возвращаем прокрутку
  document.removeEventListener('keydown', onEscKeyDown); // Убираем обработчик Esc
  if (closeButton) {
    closeButton.removeEventListener('click', closeBigPicture);
  }
}

// Обработчик для закрытия по клавише Esc
function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

// Функция отрисовки комментариев
function renderComments(comments) {
  commentsList.innerHTML = ''; // Очищаем список комментариев

  comments.forEach((comment) => {
    const li = document.createElement('li');
    li.classList.add('social__comment');

    const img = document.createElement('img');
    img.classList.add('social__picture');
    img.src = comment.avatar;
    img.alt = comment.name;
    img.width = 35;
    img.height = 35;

    const p = document.createElement('p');
    p.classList.add('social__text');
    p.textContent = comment.message;

    li.appendChild(img);
    li.appendChild(p);
    commentsList.appendChild(li);
  });
}

// Функция открытия полноразмерного фото
function openBigPicture(photo) {
  // Заполняем данные
  bigPictureImage.src = photo.url;
  likesCount.textContent = photo.likes;
  shownCommentsCount.textContent = photo.comments.length; // Пока показываем все
  totalCommentsCount.textContent = photo.comments.length;
  description.textContent = photo.description;

  // Рендерим комментарии
  renderComments(photo.comments);

  // Прячем лишние элементы (позже будут задания на них)
  commentCountBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  // Показываем окно
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  // Навешиваем обработчики
  document.addEventListener('keydown', onEscKeyDown);
  if (closeButton) {
    closeButton.addEventListener('click', closeBigPicture);
  }
}

// Экспортируем функцию
export { openBigPicture };
