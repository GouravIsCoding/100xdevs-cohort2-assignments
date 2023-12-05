/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const hash = new Map();
  for (let i = 0; i < str1.length; i++) {
    hash.set(str1[i], hash.get(str1[i]) ? hash.get(str1[i]) + 1 : 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let countleft = hash.get(str2[i]) ? hash.get(str2[i]) : 0;
    countleft--;

    if (countleft < 0) return false;
    else if (countleft === 0) hash.delete(str2[i]);
    else hash.set(str2[i], countleft);
  }

  if (hash.size !== 0) return false;
  return true;
}

module.exports = isAnagram;
