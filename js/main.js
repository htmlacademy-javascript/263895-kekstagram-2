import { renderThumbnails } from './render-thumbnails.js';
import { generatePhotos } from './data.js';

const photos = generatePhotos(25);
renderThumbnails(photos);
