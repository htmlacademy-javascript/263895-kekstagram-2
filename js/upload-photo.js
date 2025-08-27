const uploadInput = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const previewImage = document.querySelector('#preview-image');

uploadInput.addEventListener('change', () => {
  const file = uploadInput.files[0];

  if (!file) {
    return;
  }

  if (!file.type.startsWith('image/')) {
    // eslint-disable-next-line no-alert
    alert('Пожалуйста, выберите изображение.');
    return;
  }

  previewImage.src = URL.createObjectURL(file);
  overlay.classList.remove('hidden');
});
