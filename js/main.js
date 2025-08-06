import { generatePhotos } from './data.js';
import { renderThumbnails } from './render-thumbnails.js';

const photos = generatePhotos(25);
renderThumbnails(photos);
