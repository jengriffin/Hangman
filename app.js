/*Kinder sight word array*/
const sightWords = [
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
let correctWord = []
let wrongWord = []
let underscore = []
let gameLose = 6
let answerArray = document.getElementsByClassName('answerArray')
let word
let circle = document.getElementById('head')
let torso = document.getElementById('torso')
let leftarm = document.getElementById('leftarm')
let rightarm = document.getElementById('rightarm')
let leftleg = document.getElementById('leftleg')
let rightleg = document.getElementById('rightleg')
let keyboard = document.getElementsByClassName('keyboard')
//get word button
const getWordbtn = document.getElementById('btnword')

//Choosing the word from the sight words

// generating the mystery word

let randomWord = () => {
  underscore = []
  word = sightWords[Math.floor(Math.random() * sightWords.length)]
  for (let i = 0; i < word.length; i++) {
    underscore.push('_')
  }
  console.log(word)
  console.log(underscore)
  return underscore
}
let getUnderscores = () => {
  console.log('HELLO!')
  answerArray[0].innerHTML = randomWord().join(' ')
}
// let getNewWord = () => {
//   window.location.reload()
// }
getUnderscores()
getWordbtn.addEventListener('click', getUnderscores)
//run game with click
document.addEventListener('click', (event) => {
  let letter = event.target.id.toLowerCase()
  if (letter === getWordbtn.id.toLowerCase()) {
    getUnderscores()
    return
  }
  console.log(event)
  ///if guess right

  if (word.indexOf(letter) > -1) {
    console.log(underscore)
    correctWord.push(letter)
    console.log(correctWord)
    underscore[word.indexOf(letter)] = letter
    answerArray[0].innerHTML = underscore.join(' ')
    if (underscore.join('') === word) {
      let restart = confirm('You win! Want to play again?')
      if (restart === true) {
        window.location.reload()
      }
    }

    // draw hangman
  } else {
    wrongWord.push(letter)
    console.log(wrongWord)
    if (wrongWord.length === 1) {
      circle.style.display = 'inline'
    }
    if (wrongWord.length === 2) {
      torso.style.display = 'inline'
    }
    if (wrongWord.length === 3) {
      leftarm.style.display = 'inline'
    }
    if (wrongWord.length === 4) {
      rightarm.style.display = 'inline'
    }
    if (wrongWord.length === 5) {
      leftleg.style.display = 'inline'
    }
    if (wrongWord.length === 6) {
      rightleg.style.display = 'inline'
      let restart = confirm('Want to play again?')
      if (restart === true) {
        window.location.reload()
      }
    }
  }
})
//run game with keystrokes
document.addEventListener('keypress', (event) => {
  let key = String.fromCharCode(event.keyCode)
  ///if guess right

  if (word.indexOf(key) > -1) {
    console.log(underscore)
    correctWord.push(key)
    console.log(correctWord)
    underscore[word.indexOf(key)] = key
    answerArray[0].innerHTML = underscore.join(' ')
    if (underscore.join('') === word) {
      let restart = confirm('You win! Want to play again?')
      if (restart === true) {
        window.location.reload()
      }
    }

    // }
  } else {
    wrongWord.push(key)
    console.log(wrongWord)
    if (wrongWord.length === 1) {
      circle.style.display = 'inline'
    }
    if (wrongWord.length === 2) {
      torso.style.display = 'inline'
    }
    if (wrongWord.length === 3) {
      leftarm.style.display = 'inline'
    }
    if (wrongWord.length === 4) {
      rightarm.style.display = 'inline'
    }
    if (wrongWord.length === 5) {
      leftleg.style.display = 'inline'
    }
    if (wrongWord.length === 6) {
      rightleg.style.display = 'inline'
      let restart = confirm('Want to play again?')
      if (restart === true) {
        window.location.reload()
      }
    }
  }
})
