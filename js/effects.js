// effects.js
import '../vendor/nouislider/nouislider.js';

const slider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects');

const EFFECTS = {
  chrome: {
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  sepia: {
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  marvin: {
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  phobos: {
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  heat: {
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  }
};

noUiSlider.create(slider, {
  range: { min: 0, max: 100 },
  start: 100,
  step: 1,
  connect: 'lower'
});

let currentEffect = null;

const updateSlider = ({min, max, step}) => {
  slider.noUiSlider.updateOptions({
    range: {min, max},
    start: max,
    step
  });
};

effectsList.addEventListener('change', (evt) => {
  const effect = evt.target.value;

  if (effect === 'none') {
    imagePreview.style.filter = 'none';
    slider.classList.add('hidden');
    currentEffect = null;
    return;
  }

  slider.classList.remove('hidden');
  currentEffect = EFFECTS[effect];
  updateSlider(currentEffect);
});

slider.noUiSlider.on('update', () => {
  if (!currentEffect) {
    return;
  }
  const value = slider.noUiSlider.get();
  effectValue.value = value;
  imagePreview.style.filter = `${currentEffect.filter}(${value}${currentEffect.unit})`;
});

// Экспорт для сброса
export const resetEffects = () => {
  imagePreview.style.filter = 'none';
  slider.classList.add('hidden');
};
