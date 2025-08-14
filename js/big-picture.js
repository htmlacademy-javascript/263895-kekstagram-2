// big-picture.js
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentCount = bigPicture.querySelector('.social__comment-count');
const shownCommentsCount = bigPicture.querySelector('.social__comment-shown-count');
const totalCommentsCount = bigPicture.querySelector('.social__comment-total-count');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

let comments = [];
let commentsShown = 0;
const COMMENTS_PER_PAGE = 5;

/**
 * Создаёт DOM-элемент комментария
 */
const createComment = ({ avatar, name, message }) => {
  const comment = commentTemplate.cloneNode(true);
  const img = comment.querySelector('.social__picture');
  img.src = avatar;
  img.alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

/**
 * Отрисовывает следующую порцию комментариев
 */
const renderComments = () => {
  const fragment = document.createDocumentFragment();
  const nextComments = comments.slice(commentsShown, commentsShown + COMMENTS_PER_PAGE);

  nextComments.forEach((comment) => {
    fragment.appendChild(createComment(comment));
  });

  commentsList.appendChild(fragment);
  commentsShown += nextComments.length;
  shownCommentsCount.textContent = commentsShown;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

/**
 * Открывает большое фото
 */
const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImg.src = photo.url;
  bigPictureImg.alt = photo.description;
  likesCount.textContent = photo.likes;
  socialCaption.textContent = photo.description;
  totalCommentsCount.textContent = photo.comments.length;

  // Сбрасываем и рендерим первые комментарии
  commentsList.innerHTML = '';
  comments = photo.comments;
  commentsShown = 0;
  renderComments();

  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
};

/**
 * Закрывает большое фото
 */
const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

/**
 * Обработчик закрытия по Esc
 */
function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

closeButton.addEventListener('click', closeBigPicture);
commentsLoader.addEventListener('click', renderComments);

export { openBigPicture };
