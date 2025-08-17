// form.js

import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

// Находим форму загрузки изображения
const form = document.querySelector('.img-upload__form');

// Поля формы
const hashtagsInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');
const fileInput = form.querySelector('.img-upload__input');
const overlay = document.querySelector('.img-upload__overlay');
const cancelButton = overlay.querySelector('.img-upload__cancel');

// Константы для валидации
const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAGS = 5;
const MAX_COMMENT_LENGTH = 140;

// Инициализация Pristine
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

// ----------- ВАЛИДАЦИЯ ХЭШТЕГОВ -----------
function validateHashtags(value) {
  if (!value) {
    return true;
  } // если пусто — ок

  const hashtags = value.trim().split(/\s+/);

  if (hashtags.length > MAX_HASHTAGS) {
    return false;
  }

  return hashtags.every((tag) => HASHTAG_REGEX.test(tag));
}

function getHashtagsErrorMessage() {
  return `Хэштегов должно быть не больше ${MAX_HASHTAGS}, каждый начинается с # и до 20 символов`;
}

pristine.addValidator(hashtagsInput, validateHashtags, getHashtagsErrorMessage);

// ----------- ВАЛИДАЦИЯ КОММЕНТАРИЯ -----------
function validateComment(value) {
  return value.length <= MAX_COMMENT_LENGTH;
}

function getCommentErrorMessage() {
  return `Комментарий не длиннее ${MAX_COMMENT_LENGTH} символов`;
}

pristine.addValidator(commentInput, validateComment, getCommentErrorMessage);

// ----------- ОТКРЫТИЕ ФОРМЫ -----------
fileInput.addEventListener('change', () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
});

// ----------- ЗАКРЫТИЕ ФОРМЫ -----------
function closeForm() {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  form.reset(); // сброс всех полей
  pristine.reset(); // сброс сообщений об ошибках
  resetScale(); // сброс масштаба
  resetEffects(); // сброс фильтров

  document.removeEventListener('keydown', onDocumentKeydown);
}

// Закрытие по крестику
cancelButton.addEventListener('click', closeForm);

// Закрытие по Escape (только если не в инпуте)
function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !evt.target.closest('.text__hashtags') && !evt.target.closest('.text__description')) {
    evt.preventDefault();
    closeForm();
  }
}

// ----------- ОТПРАВКА ФОРМЫ -----------
form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (pristine.validate()) {
    // eslint-disable-next-line no-console
    console.log('Форма валидна, отправляем ✅');
    form.submit();
  } else {
    // eslint-disable-next-line no-console
    console.log('Форма содержит ошибки ❌');
  }
});
