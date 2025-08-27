export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getShuffledArray(count) {
  const array = [];
  for (let i = 1; i <= count; i++) {
    array.push(i);
  }

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

/**
 * Устранение дребезга
 * @param {Function} callback - функция, которую нужно "дребезжить"
 * @param {number} timeoutDelay - задержка в мс (по умолчанию 500)
 * @returns {Function}
 */
export function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, args), timeoutDelay);
  };
}
