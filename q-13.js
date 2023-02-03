// REGEX :- regex (Regular Expression) is a sequence of character through which we can search a pattern in the string
//it uses to search a pattern in a string
function isAlphaNUmeric(input){
    var alphaNumericPattern=/^[a-z0-9]+$/i;
return alphaNumericPattern.test(input)
}
console.log(isAlphaNUmeric('check123'));