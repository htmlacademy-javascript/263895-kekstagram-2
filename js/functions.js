function isValidLength(inputString, maxLength) {
  return inputString.length <= maxLength;
}
console.log(isValidLength("JarvisVerse", 12));
console.log(isValidLength("Hello, world!", 5));


function isPalindrome(str) {
  // 1. Нормализуем строку: убираем пробелы и приводим к нижнему регистру
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();

  // 2. Создаём пустую строку для перевёрнутой версии
  let reversedStr = '';

  // 3. Проходим по строке с конца к началу
  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }

  // 4. Сравниваем нормализованную строку и перевёрнутую
  return normalizedStr === reversedStr;
}
console.log(isPalindrome('Marvel')); // false
console.log(isPalindrome('Лёша на полке клопа нашёл')); // true
console.log(isPalindrome('JarvisVerse')); // false


function extractNumber(str) {
  // Преобразуем входной параметр в строку, на случай, если передано число
  str = str.toString();

  let result = '';

  // Проходим по каждому символу строки
  for (let i = 0; i < str.length; i++) {
    // Пробуем преобразовать символ в число
    let digit = parseInt(str[i]);

    // Если преобразование успешно (это действительно цифра)
    if (!Number.isNaN(digit)) {
      result += digit; // Добавляем цифру к результату
    }
  }

  // Если не нашли ни одной цифры, возвращаем NaN
  if (result === '') {
    return NaN;
  }

  // Возвращаем итоговое число
  return parseInt(result);
}
console.log(extractNumber('2023 год'));            // 2023
console.log(extractNumber('ECMAScript 2022'));     // 2022
console.log(extractNumber('1 кефир, 0.5 батона')); // 105
console.log(extractNumber('агент 007'));           // 7
console.log(extractNumber('а я томат'));           // NaN
