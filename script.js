function checkPalindrome() {
    // get value from input to str and then call isPalindrome(str)
    const inputStr = document.getElementById('palindrome_input').value;
    const palindromeRes = document.getElementById('palindrome_res')
    palindromeRes.textContent = isPalindrome(inputStr);
}

function isPalindrome(str) {
    str = str.toLowerCase();
    const left = str.slice(0, str.length / 2);
    const right = str.slice(-str.length / 2, str.length).split('').reverse().join('');
    return (left === right) ? 'true' : 'false';
}

function reverseString() {
    // get value from input to str and then call reverseString(str)
    const inputReverse = document.getElementById('reverse_input').value;
    const reverseRes = document.getElementById('reverse_result')
    reverseRes.textContent = reverseString2(inputReverse);
}

function reverseString2(str) {
    return (str === '') ? 'Enter a string' : str.split('').reverse().join('');
}

function getCount() {
    // get value from input to str and c and then call countChar(str,c)
    const inputString = document.getElementById('string_value').value;
    const inputChar = document.getElementById('character_value').value;
    const countRes = document.getElementById('res_calc');
    countRes.textContent = countChar(inputString, inputChar);
}

function countChar(str, c) {
    if (c.length>1)
        return 'You entered more than one symbol';
    else if (str === '')
        return  'Enter a string';
    const arr = str.split('');
    let count = 0;
    for (let i in arr){
        if (arr[i] === c)
            count++;
    }
    return count;
}