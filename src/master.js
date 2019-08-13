import random from './Random'

export default function Master () {
  let answer = Array(4).fill().map( () => random(6) ),
    count = 0

  function check(guess) {
    let rightColors = []

    function exactMatch(i) {
      return guess[i] == answer[i] ? 1 : 0
    }

    function exactlyRight() {
      return [0, 1, 2, 3].map( (i) => exactMatch(i) ).reduce( (a, b) => a + b )
    }

    function sameColor(guessIndex, answerIndex) {
      if (exactMatch(answerIndex)) return 0;
      if (rightColors.includes(answerIndex)) return 0;
      if (guess[guessIndex] == answer[answerIndex]) {
        rightColors.push(answerIndex)
        return 1;
      } else return 0;
    }

    function colorMatch(index) {
      if (exactMatch(index)) { return 0 }
      let others = [0, 1, 2, 3].filter( (i) => i != index )
      return sameColor(index, others[0]) ||
        sameColor(index, others[1]) ||
        sameColor(index, others[2]) || 0
    }

    function rightColor() {
      rightColors = []
      return [0, 1, 2, 3].map( (i) => colorMatch(i) ).reduce( (a, b) => a + b )
    }

    count = count + 1;
    return [exactlyRight(), rightColor()]
  }

  function tell() {
    return answer
  }

  function guesses() {
    return count;
  }

  return {
    check: check,
    guesses: guesses,
    tell: tell
  }
}
