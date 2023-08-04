//............Valid Anagram........//

const anagramCheck = (word1, word2) => {
  let ObjStr1 = {};
  if (word1.length !== word2.length) {
    return false;
  }
  for (ch of word1) {
    ObjStr1[ch] = (ObjStr1[ch] || 0) + 1;
  }
  for (ch of word2) {
    if (!ObjStr1[ch]) {
      return false;
    }
    ObjStr1[ch] - word2;
  }
  return true;
};

console.log(anagramCheck("karachi", "icahrak"));
