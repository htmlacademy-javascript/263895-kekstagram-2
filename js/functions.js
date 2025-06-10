function isValidLength(inputString, maxLength) {
  return inputString.length <= maxLength;
}
console.log(isValidLength('JarvisVerse', 12));
console.log(isValidLength('Hello, world!', 5));

function isPalindrome(str) {
const normalizedStr = str.replaceAll(' ', '').toLowerCase();
let reversedStr = '';

for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }
return normalizedStr === reversedStr;
}


console.log(isPalindrome('Marvel')); // false
console.log(isPalindrome('Лёша на полке клопа нашёл')); // true
console.log(isPalindrome('JarvisVerse')); // false



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


console.log(extractNumber('2023 год'));
console.log(extractNumber('ECMAScript 2022'));
console.log(extractNumber('1 кефир, 0.5 батона'));
console.log(extractNumber('агент 007'));
console.log(extractNumber('а я томат'));
