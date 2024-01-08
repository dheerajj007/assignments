/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const n1 = str1.length,
    n2 = str2.length;
    
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  if (n1 !== n2) return false;

  let arr1 = Array(256).fill(0),
    arr2 = Array(256).fill(0);

  for (let i = 0; i < n1; i++) {
    arr1[str1[i].charCodeAt(0)]++;
    arr2[str2[i].charCodeAt(0)]++;
  }
  for (let i = 0; i < 256; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

// isAnagram("hello", "world");
module.exports = isAnagram;
