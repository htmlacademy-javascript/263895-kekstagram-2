import { generatePhotos } from './data.js';
import { renderThumbnails } from './render-thumbnails.js';
import { openBigPicture } from './big-picture.js';
import './form.js';

const photos = generatePhotos(25);
renderThumbnails(photos, openBigPicture);
