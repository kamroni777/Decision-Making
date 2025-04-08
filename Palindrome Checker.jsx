function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Base case
    if (str.length <= 1) {
        return true;
    }
    
    // Compare first and last characters
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    
    // Recursive case
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false