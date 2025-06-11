function isValidLength(inputString, maxLength) {
  return inputString.length <= maxLength;
}
isValidLength('JarvisVerse', 12);
isValidLength('Hello, world!', 5);

function isPalindrome(str) {
const normalizedStr = str.replaceAll(' ', '').toLowerCase();
let reversedStr = '';

for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }
return normalizedStr === reversedStr;
}


isPalindrome('Marvel'); // false
isPalindrome('Лёша на полке клопа нашёл'); // true
isPalindrome('JarvisVerse'); // false



function extractNumber(str) {
  str = str.toString();
  let result = '';


  for (let i = 0; i < str.length; i++) {
    const digit = parseInt(str[i], 10);


    if (!Number.isNaN(digit)) {
      result += digit;
    }
  }


  if (result === '') {
    return NaN;
  }

  return parseInt(result, 10);
}


extractNumber('2023 год');
extractNumber('ECMAScript 2022');
extractNumber('1 кефир, 0.5 батона');
extractNumber('агент 007');
extractNumber('а я томат');
