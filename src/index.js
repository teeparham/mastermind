import Player from './player';
import Game from './game';

const play = () => Game().play(Player())

export { Player, Game, play }
