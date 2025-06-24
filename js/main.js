const PHOTOS_COUNT = 25;

let commentIdCounter = 1;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getShuffledArray(count) {
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

function generateUniqueCommentId() {
  return commentIdCounter++;
}

function generateRandomObject(count) {
  const description = [
    'Отличное описание фотографии',
    'Хорошее описание фотографии',
    'Нормальное описание фотографии',
    'Прекрасное описание фотографии'
  ];

  const message = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const name = ["Alex", "Mia", "John", "Lena", "Mark", "Olga", "Tom", "Kate"];

  const ids = getShuffledArray(count);
  const result = [];

  for (let i = 0; i < count; i++) {
    const photoId = ids[i];

    const commentsCount = getRandomNumber(0, 30);
    const comments = [];

    for(let j = 0; j < commentsCount; j++) {
      const comment = {
        id: generateUniqueCommentId(),
        avatar: `img/avatar-${getRandomNumber(1,6)}.svg`,
        message: message[getRandomNumber(0, message.length - 1)],
        name: name[getRandomNumber(0, name.length - 1)]
      };
      comments.push(comment);
    }

    const object = {
      id: photoId,
      url: `photos/${photoId}.jpg`,
      description: description[getRandomNumber(0, description.length - 1)],
      likes: getRandomNumber(15, 200),
      comments: comments
    };
    result.push(object);
  }
  return result;
}

// Генерируем массив объектов с фотками и комментариями
const photos = generateRandomObject(PHOTOS_COUNT);

// Выводим результат в консоль для проверки
console.log(photos);





