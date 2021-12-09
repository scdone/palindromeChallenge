function isPalindrome (word) {
  for (let i = 0; i < word.length; i++)
  for (let j = word.length-1; j < word.length; j--){
    if (word[i] === word[j]){
      return true
    } else {return false}
  }
}

console.log(isPalindrome(`sarah`))
console.log(isPalindrome(`hannah`))