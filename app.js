/*Kinder sight word array*/
const sightWords = [
  'I',
  'a',
  'we',
  'at',
  'am',
  'it',
  'up',
  'no',
  'go',
  'in',
  'of',
  'us',
  'by',
  'to',
  'is',
  'on',
  'be',
  'so',
  'do',
  'as',
  'my',
  'he',
  'me',
  'can',
  'the',
  'yes',
  'see',
  'eat',
  'was',
  'big',
  'one',
  'has',
  'are',
  'for',
  'you',
  'she',
  'run',
  'off',
  'and',
  'his',
  'two',
  'but',
  'all',
  'saw',
  'him',
  'got',
  'not',
  'too',
  'why',
  'new',
  'six',
  'day',
  'ten',
  'get',
  'out',
  'who',
  'her',
  'red',
  'like',
  'have',
  'play',
  'come',
  'this',
  'here',
  'want',
  'what',
  'love',
  'said',
  'that',
  'look',
  'with',
  'they',
  'when',
  'jump',
  'went',
  'four',
  'away',
  'came',
  'five',
  'your',
  'from',
  'then',
  'blue',
  'pink',
  'nine',
  'there',
  'first',
  'three',
  'where',
  'could',
  'seven',
  'eight',
  'white',
  'black',
  'brown',
  'green',
  'little',
  'yellow',
  'purple',
  'because'
]
//get word button
const getWordbtn = document.getElementById('btnword')

//Choosing the word from the sight words
let word = sightWords[Math.floor(Math.random() * sightWords.length)]
console.log(word)
// generating the mystery word
let answerArray = document
let randomWord = () => {
  let answerArray = []
  for (i = 0; i < word.length; i++) {
    answerArray[i] = '_'
  }
  let remainingLetters = word.length
}

const addText = () => {
  document.body.append('It seems as if it has been clicked!')
}
getWordbtn.addEventListener('click', randomWord)
