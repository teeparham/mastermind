var Mastermind =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = random;
// integer 1 - max
function random (max) {
  return Math.floor( Math.random() * max + 1)
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "play", function() { return play; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return __WEBPACK_IMPORTED_MODULE_0__player__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return __WEBPACK_IMPORTED_MODULE_1__game__["a"]; });



const play = () => Object(__WEBPACK_IMPORTED_MODULE_1__game__["a" /* default */])().play(Object(__WEBPACK_IMPORTED_MODULE_0__player__["a" /* default */])())




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__random__ = __webpack_require__(0);


function Player () {
  let guesses = [], // [ [1,2,3,4], [6,5,4,3], [1,1,1,1], ... ]
    responses = [], // [ [0,1], [1,2], [0,0], ...]
    possible = Array(4).fill().map( () => [1, 2, 3, 4, 5, 6] ),
    unordered = null

  function first() {
    return Array(4).fill().map( () => Object(__WEBPACK_IMPORTED_MODULE_0__random__["a" /* default */])(6) )
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
    else return Array(4).fill().map( (n, i) => possible[i][Object(__WEBPACK_IMPORTED_MODULE_0__random__["a" /* default */])(possible[i].length) - 1] )
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__master__ = __webpack_require__(4);


function Game () {
  const master = Object(__WEBPACK_IMPORTED_MODULE_0__master__["a" /* default */])()

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


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Master;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__random__ = __webpack_require__(0);


function Master () {
  let answer = Array(4).fill().map( () => Object(__WEBPACK_IMPORTED_MODULE_0__random__["a" /* default */])(6) ),
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


/***/ })
/******/ ]);