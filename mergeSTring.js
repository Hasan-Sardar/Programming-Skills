// .....Merge String Alternately.....

const word1 = 'abc';
const word2 = 'pqr';

const mergeString_Alternatively = (word1, word2) => {
   const a = word1.split("").filter(wd => !!wd);
   const b = word2.split("");
   let result = '';
   for(var i = 0; i < a.length || i < b.length; i++){
      if(i < a.length){
         result += a[i];
      };
      if(i < b.length){
         result += b[i];
      };
   };
   return result;
};
console.log(mergeString_Alternatively(word1,word2));
