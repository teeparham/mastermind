import random from './Random'

export default function Bot () {
  let guesses = [], // [ [1,2,3,4], [6,5,4,3], [1,1,1,1], ... ]
    responses = [], // [ [0,1], [1,2], [0,0], ...]
    possible = Array(4).fill().map( () => [1, 2, 3, 4, 5, 6] ),
    unordered = null

  function first() {
    return Array(4).fill().map( () => random(6) )
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  function exists(guess) {
    guesses.map( (g) => g.toString() ).includes(guess.toString())
  }

  function candidate() {
    if (unordered) return shuffle(unordered)
    else return Array(4).fill().map( (n, i) => possible[i][random(possible[i].length) - 1] )
  }

  function newGuess() {
    let aGuess = candidate()
    while (exists(aGuess)) {
      aGuess = candidate()
    }
    return aGuess
  }

  function next() {
    let lastGuess = guesses[guesses.length - 1],
      lastResponse = responses[responses.length - 1]

    if (!unordered && (lastResponse[0] + lastResponse[1] == 0)) {
      for (let i = 0; i < 4; i++) {
        lastGuess.forEach( (n) => {
          possible[i] = possible[i].filter( (v) => v != n )
        })
      }
      for (let i = 0; i < 4; i++) {
        console.log('-- [' + i + '] : ' + possible[i].toString())
      }
    }
    else if (lastResponse[0] == 0) {
      lastGuess.forEach( (n, i) => {
        possible[i] = possible[i].filter( (v) => v != n )
      })
      for (let i = 0; i < 4; i++) {
        console.log('-- [' + i + '] : ' + possible[i].toString())
      }
    }
    else if (lastResponse[0] + lastResponse[1] == 4) {
      unordered = lastGuess
      console.log('-- unordered = ' + unordered.toString())
    }

    return newGuess()
  }

  function guess(lastResponse) {
    let current
    responses.push(lastResponse)

    if (guesses.length) current = next()
    else current = first()

    guesses.push(current)
    return current
  }

  return { guess: guess }
}
