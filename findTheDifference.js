//............Find The Difference........

const word1 = 'abcd';
const word2 = 'abcde';
var Difference = (s, t) => {
   s = word1.split('').sort();
   t = word2.split('').sort();
   
   for(let i = 0; i < t.length; i++){
       if(s[i] !== t[i]) return t[i]
   }
};
console.log(Difference(word1,word2));