const SERVER_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const GET_URL = `${SERVER_URL}/data`;

export const getData = () =>
  fetch(GET_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка загрузки: ${response.status}`);
      }
      return response.json();
    });

export const sendData = (body) =>
  fetch(SERVER_URL, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка отправки: ${response.status}`);
      }
      return response.json();
    });
