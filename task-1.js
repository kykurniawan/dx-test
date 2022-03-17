function countNumberOfVowels(str) {
    let arr = str.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            count++;
        }
    }
    return count;
}

function findTheLongestWord(str) {
    let arr = str.split(' ');
    let longestWord = '';
    for (let i = 0; i < arr.length; i++) {
        arrChar = arr[i].split('');
        arr[i] = arrChar.map((char) => {
            if ((/[a-zA-Z]/).test(char)) return char;
        }).join('');

        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        } else if (arr[i].length === longestWord.length) {
            longestWord = (countNumberOfVowels(arr[i]) > countNumberOfVowels(longestWord)) ? arr[i] : longestWord;
        }
    }
    return longestWord;
}


console.log(findTheLongestWord('Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers'));
console.log(findTheLongestWord('I am a very very long sentence'));