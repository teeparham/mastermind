import Master from './master'

export default function Game () {
  const master = Master()

  function play(player) {
    let response = [0, 0],
      count = 0,
      guess

    while (response.toString() != '4,0' && count < 60) {
      count++
      guess = player.guess(response)
      console.log('#' + count + ': ' + guess.toString())
      response = master.check(guess)
      console.log('   Exact: ' + response[0] + '  Color: ' + response[1])
    }
    return ('*** Answer was ' + master.tell().toString())
  }

  return { play: play }
}
