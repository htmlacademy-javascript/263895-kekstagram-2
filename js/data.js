import { getRandomNumber, getShuffledArray } from './util.js';
import { generateComments } from './comments.js';

const DESCRIPTION_TEXTS = [
  'Отличное описание фотографии',
  'Хорошее описание фотографии',
  'Нормальное описание фотографии',
  'Прекрасное описание фотографии'
];

// 👇 ВАЖНО: Должен быть именованный экспорт!
export function generatePhotos(count) {
  const ids = getShuffledArray(count);
  const result = [];

  for (let i = 0; i < count; i++) {
    const photoId = ids[i];
    const commentsCount = getRandomNumber(0, 30);

    result.push({
      id: photoId,
      url: `photos/${photoId}.jpg`,
      description: DESCRIPTION_TEXTS[getRandomNumber(0, DESCRIPTION_TEXTS.length - 1)],
      likes: getRandomNumber(15, 200),
      comments: generateComments(commentsCount)
    });
  }

  return result;
}
