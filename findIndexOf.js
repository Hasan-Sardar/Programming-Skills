
// ....Find the Index of the First Occurrence in a String ..../

const word1 = 'haystack';
const word2 = 'needle';

let findIndex = (haystack, needle) => {
    
    haystack = word1.length;
    needle = word2.length;
    if (haystack > needle) return 0;

    for (let i = 0; i <= haystack - needle; i++) {
        if (haystack[i] === needle[i]) return i;
    }
    return -1;
};
console.log(findIndex(word1,word2));