// big-picture.js
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
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
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  // Навешиваем обработчики
  document.addEventListener('keydown', onEscKeyDown);
  if (closeButton) {
    closeButton.addEventListener('click', closeBigPicture);
  }
}

export { openBigPicture };
