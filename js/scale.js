// scale.js
const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

let currentScale = 100;

const applyScale = (value) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerClick = () => {
  currentScale = Math.max(SCALE_MIN, currentScale - SCALE_STEP);
  applyScale(currentScale);
};

const onBiggerClick = () => {
  currentScale = Math.min(SCALE_MAX, currentScale + SCALE_STEP);
  applyScale(currentScale);
};

smallerButton.addEventListener('click', onSmallerClick);
biggerButton.addEventListener('click', onBiggerClick);

// Экспорт для сброса масштаба при закрытии формы
export const resetScale = () => {
  currentScale = 100;
  applyScale(currentScale);
};
