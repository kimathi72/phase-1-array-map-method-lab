
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const titleCased = () => {
const capitalizedStringsArray = tutorials.map(function (item){ 
  const wordsArray = item.split(" ");
  const capitalizedWordsArray = wordsArray.map(function (item){  
  const firstLetter = item.slice(0,1);  
  const capitalisedFirstLetter = firstLetter.toUpperCase(); 
  const modifiedWord = capitalisedFirstLetter + item.slice(1);
    return modifiedWord;    
  }) 
  const capitalisedStrings = capitalizedWordsArray.join(" ");
  return capitalisedStrings;  
});
  console.log(capitalizedStringsArray);
  return capitalizedStringsArray;
}
titleCased();
