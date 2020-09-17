// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // return str.split("").reverse().join("");

  //////////////////////

  /*let reversedStr = "";
  str.split("").forEach((element) => {
    reversedStr = element + reversedStr;
  });
  return reversedStr;*/

  return str.split("").reduce((reversedStr, char) => char + reversedStr, "");
}
// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revStr = int.toString().split("").reverse().join("");
  return revStr;
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";

  str.split("").forEach((element) => {
    if (charMap[element]) {
      charMap[element]++;
    } else {
      charMap[element] = 1;
    }
  });

  for (let char in charMap) {
    //console.log(char + charMap[char]);
    if (charMap[char] > maxNum) {
      maxChar = char;
      maxNum = charMap[char];
    }
  }

  return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
      console.log("Fizzbuzz !");
    } else if (i % 3 == 0) {
      console.log("Fizz !");
    } else if (i % 5 == 0) {
      console.log("Buzz !");
    } else {
      console.log(i);
    }
  }
}

// Call Function
// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  const arrStr = sen.toLowerCase().match(/[a-z0-9]+/g);
  let maxLength = 0;
  let maxWord = "";
  let maxWordsList = [];
  arrStr.forEach((e) => {
    if (e.length > maxLength) {
      maxWord = e;
      maxLength = e.length;
      maxWordsList[0] = e;
    } else if (e.length === maxLength) {
      maxWordsList.push(e);
    }
  }, "");

  return maxWordsList.length >= 2 ? maxWordsList : maxWord;
}

// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  const newArr = [];
  let i = 0;
  while (i < arr.length) {
    newArr.push(arr.slice(i, i + len));
    i += len;
  }

  return newArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  const arr1 = str1
    .toLowerCase()
    .match(/[a-z]+/g)
    .toString()
    .split("")
    .sort()
    .join("");
  const arr2 = str2
    .toLowerCase()
    .match(/[a-z]+/g)
    .toString()
    .split("")
    .sort()
    .join("");

  return arr1 === arr2;
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/[a|e|o|i|u]/gi, (voel) => voel.toUpperCase());
  return newStr;
}

// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;

  // TODO Check Reduce methode to sum all the array elements
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let sum = 0;
  const checkIfPrime = (i) => {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) return false;
    }
    return true;
  };

  for (let i = 2; i <= num; i++) {
    if (checkIfPrime(i)) sum += i;
  }

  return sum;
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr, ...rest) {
  /*  let elementsToDestroy = [...arguments];
  let elements = arguments[0];
  elementsToDestroy.shift(arr);
  return elements.filter((e) => !elementsToDestroy.includes(e)); */

  return arr.filter((e) => !rest.includes(e));
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
  const arr1 = [];
  const arr2 = [];

  a.forEach((e, i) => {
    if (e === -1) arr1.push(i);
    else arr2.push(e);
  });

  const sortArr = arr2.sort((a, b) => b - a);
  arr1.map((e) => sortArr.splice(e, 0, -1));

  return sortArr;
}

/* console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])); */
// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(abc) {
  const abcArr = abc.split("");
  let charCode = 97;
  let missingLetter = "";
  abcArr.map((e) => {
    if (e.charCodeAt() != charCode) {
      missingLetter = String.fromCharCode(charCode);
    } else ++charCode;
  });

  return missingLetter || undefined;
}

console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(a) {
  let evens = 0;
  let odds = 0;

  a.map((e) => {
    if (e % 2 === 0) evens += e;
    else odds += e;
  });

  return [evens, odds];
}

/* console.log(evenOddSums([50, 60, 60, 45, 71])); */
// Call Function
/* const output = sumAllPrimes(10);


console.log(output); */
uiorpitopz ^ ptzepipui;
