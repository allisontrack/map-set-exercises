// Quick Question #1
// What does the following code return?

new Set([1,1,2,2,3,4]);

// Answer: // [1,2,3,4]


// Quick Question #2
// What does the following code return?

[...new Set("referee")].join("")

// Answer: // 'ref'


// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// Answer: // {[1,2,3] => true, [1,2,3] => false}


// hasDuplicate
// Write a function called hasDuplicate which accepts an array 
// and returns true or false if that array contains a duplicate


const hasDuplicate = (arr) => {
    const newSet = new Set(arr);
    if (arr.length !== newSet.size) {
        return true;
    }
    return false;
}

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false


// vowelCount
// Write a function called vowelCount which accepts a string and returns 
// a map where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (str) => {
    const lowCaseStr = str.toLowerCase();
    const vowels = [...lowCaseStr].filter( char => {
        return isVowel(char);
    })
    const makeVowelObj = vowels.reduce((vowelObj, vowel) => {
        if (vowelObj[vowel] === undefined) {
            vowelObj[vowel] = 0;
        }
        vowelObj[vowel] += 1;
        return vowelObj;
    }, {})
    const objArr = Object.entries(makeVowelObj);
    const vowelMap = new Map(objArr);    
    return vowelMap;
}


const isVowel = char => {
    return 'aeiou'.indexOf(char) !== -1;
}


vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
