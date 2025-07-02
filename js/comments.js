import { getRandomNumber } from './util.js';

let commentIdCounter = 1;

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'Моя бабушка случайно чихнула с фотоаппаратом и у неё получилось лучше.',
  'Я поскользнулся и уронил фотоаппарат на кота — и всё равно лучше вышло.',
  'Лица перекошены, как будто избивают. Как можно было так поймать момент?!'
];

const names = ['Alex', 'Mia', 'John', 'Lena', 'Mark', 'Olga', 'Tom', 'Kate'];

export function generateComment() {
  return {
    id: commentIdCounter++,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: messages[getRandomNumber(0, messages.length - 1)],
    name: names[getRandomNumber(0, names.length - 1)]
  };
}

export function generateComments(count) {
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(generateComment());
  }
  return comments;
}
